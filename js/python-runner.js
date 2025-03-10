let pyodide = null;

async function initializePyodide() {
    try {
        // Show loading message
        const contentContainer = document.getElementById('content-container');
        contentContainer.innerHTML += `<div id="pyodide-loading" class="alert alert-info">
            Loading Python environment... This may take a moment.
        </div>`;
        
        // Load Pyodide
        pyodide = await loadPyodide();
        
        // Install matplotlib and other useful packages
        await pyodide.loadPackagesFromImports('import matplotlib.pyplot as plt\nimport numpy as np\nimport pandas as pd');
        
        // Set up matplotlib for web output
        await pyodide.runPythonAsync(`
            import matplotlib.pyplot as plt
            import io, base64
            import sys
            from js import document
            
            # Redirect stdout to capture print outputs
            class WebConsole:
                def __init__(self):
                    self.buffer = []
                
                def write(self, text):
                    self.buffer.append(text)
                
                def flush(self):
                    pass
                
                def get_output(self):
                    return ''.join(self.buffer)
                
                def clear(self):
                    self.buffer = []
            
            web_console = WebConsole()
            sys.stdout = web_console
            sys.stderr = web_console
            
            # Function to convert matplotlib figure to base64 image
            def fig_to_base64(fig):
                buf = io.BytesIO()
                fig.savefig(buf, format='png')
                buf.seek(0)
                img_str = base64.b64encode(buf.read()).decode('utf-8')
                return img_str
        `);
        
        // Remove loading message
        document.getElementById('pyodide-loading').remove();
    } catch (error) {
        console.error('Failed to initialize Pyodide:', error);
        document.getElementById('pyodide-loading').innerHTML = `
            <div class="alert alert-danger">
                Failed to load Python environment: ${error.message}
            </div>
        `;
    }
}

function setupPythonCells() {
    document.querySelectorAll('.python-cell').forEach(cell => {
        const runButton = cell.querySelector('.run-button');
        const clearButton = cell.querySelector('.clear-button');
        const outputArea = cell.querySelector('.output-area');
        const code = decodeURIComponent(cell.dataset.code);
        
        runButton.addEventListener('click', async () => {
            if (!pyodide) {
                outputArea.innerHTML = 'Python environment is not loaded yet.';
                outputArea.classList.remove('hidden');
                return;
            }
            
            outputArea.innerHTML = 'Running...';
            outputArea.classList.remove('hidden', 'error-output');
            
            try {
                // Clear previous output
                await pyodide.runPythonAsync('web_console.clear()');
                
                // Check if the code contains matplotlib plotting
                const hasPlot = code.includes('plt.show()') || code.includes('plt.plot');
                
                // Execute the code
                let result = await pyodide.runPythonAsync(code);
                
                // Get stdout content
                const stdout = await pyodide.runPythonAsync('web_console.get_output()');
                
                // Handle plot output
                if (hasPlot) {
                    const figData = await pyodide.runPythonAsync(`
                        img_str = fig_to_base64(plt.gcf())
                        plt.close()
                        img_str
                    `);
                    
                    outputArea.innerHTML = `
                        <div class="plotting-output">
                            <img src="data:image/png;base64,${figData}" alt="Plot">
                        </div>
                    `;
                    
                    if (stdout) {
                        outputArea.innerHTML += `<div class="mt-3">${stdout}</div>`;
                    }
                } else {
                    // Display regular output
                    outputArea.textContent = stdout;
                    
                    // If there's a return value and no stdout, show the return value
                    if (result !== undefined && !stdout) {
                        outputArea.textContent = String(result);
                    } else if (!stdout) {
                        outputArea.textContent = 'Code executed successfully.';
                    }
                }
            } catch (error) {
                console.error('Python execution error:', error);
                outputArea.textContent = `Error: ${error.message}`;
                outputArea.classList.add('error-output');
            }
        });
        
        clearButton.addEventListener('click', () => {
            outputArea.classList.add('hidden');
            outputArea.innerHTML = '';
        });
    });
}
