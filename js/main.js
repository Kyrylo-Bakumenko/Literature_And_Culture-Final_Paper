document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Load the markdown file
        let markdownUrl = 'content/korean-identity-final.md'; // Default markdown file - Changed from const to let
        const urlParams = new URLSearchParams(window.location.search);
        const mdParam = urlParams.get('md');
        
        if (mdParam) {
            // If a specific markdown file is specified in the URL
            markdownUrl = `content/${mdParam}.md`;
        }

        const response = await fetch(markdownUrl);
        if (!response.ok) {
            throw new Error(`Failed to load markdown: ${response.statusText}`);
        }
        
        const markdownContent = await response.text();
        
        // Process and render the markdown content
        renderMarkdown(markdownContent);
        
        // Initialize Pyodide
        await initializePyodide();
        
        // Set up Python cells
        setupPythonCells();
    } catch (error) {
        console.error('Error loading blog content:', error);
        document.getElementById('content-container').innerHTML = `
            <div class="alert alert-danger">
                <h4>Error Loading Content</h4>
                <p>${error.message}</p>
            </div>
        `;
    }
});
