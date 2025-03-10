document.addEventListener('DOMContentLoaded', async () => {
    console.log("Main.js: Document ready, loading content...");
    
    try {
        // Add a general error handler for uncaught exceptions
        window.addEventListener('error', function(event) {
            console.error('Global error caught:', event.error);
            document.getElementById('content-container').innerHTML += `
                <div class="alert alert-warning">
                    <h4>Error Detected</h4>
                    <p>An error occurred during page execution. Please check the developer console for more information.</p>
                </div>
            `;
        });
        
        // Load the markdown file
        let markdownUrl = 'content/korean-identity-final.md'; // Default markdown file
        const urlParams = new URLSearchParams(window.location.search);
        const mdParam = urlParams.get('md');
        
        if (mdParam) {
            // If a specific markdown file is specified in the URL
            markdownUrl = `content/${mdParam}.md`;
        }
        
        console.log(`Main.js: Loading markdown from ${markdownUrl}`);
        
        // Show loading indicator
        document.getElementById('content-container').innerHTML = `
            <div class="text-center p-5">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3">Loading content from ${markdownUrl}...</p>
            </div>
        `;
        
        const response = await fetch(markdownUrl);
        if (!response.ok) {
            throw new Error(`Failed to load markdown: ${response.status} ${response.statusText}`);
        }
        
        const markdownContent = await response.text();
        console.log(`Main.js: Markdown loaded (${markdownContent.length} characters)`);
        
        // Process and render the markdown content
        renderMarkdown(markdownContent);
        
        // Initialize visualization toggle if needed
        if (typeof switchVisualization === 'function' && document.querySelector('.visualization-toggle')) {
            switchVisualization('overall');
        }
        
        // Handle hash navigation (used for direct linking to sections)
        if (window.location.hash) {
            setTimeout(() => {
                const targetElement = document.querySelector(window.location.hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    targetElement.classList.add('section-highlight');
                }
            }, 1000); // Wait a bit for content to render
        }
    } catch (error) {
        console.error('Error loading blog content:', error);
        document.getElementById('content-container').innerHTML = `
            <div class="alert alert-danger">
                <h4>Error Loading Content</h4>
                <p>${error.message}</p>
                <p>Please check the console for more information or try refreshing the page.</p>
            </div>
        `;
    }
});
