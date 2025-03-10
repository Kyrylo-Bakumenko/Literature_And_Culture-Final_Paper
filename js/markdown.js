function renderMarkdown(markdownContent) {
    const contentContainer = document.getElementById('content-container');
    
    if (!contentContainer) {
        console.error('Content container not found!');
        return;
    }
    
    // Clear any loading indicators or previous content
    contentContainer.innerHTML = '';
    
    // Check if highlight.js is available
    const highlightCodeBlock = function(code, lang) {
        if (typeof hljs === 'undefined') {
            console.warn("highlight.js is not available. Code will not be highlighted.");
            return code;
        }
        
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(code, { language: lang }).value;
            } catch (err) {
                console.warn("Error highlighting code:", err);
            }
        }
        return code;
    };
    
    // Configure marked renderer
    marked.setOptions({
        highlight: highlightCodeBlock,
        breaks: true,
        gfm: true
    });
    
    // Renderer to customize output
    const renderer = new marked.Renderer();
    
    // Handle Python code blocks specially
    renderer.code = function(code, language) {
        // For Python code, create toggle button UI
        if (language === 'python') {
            return `<div class="code-block">
                <div class="code-header">
                    <button class="btn btn-sm btn-outline-secondary" onclick="toggleCodeVisibility(this)">Show Code</button>
                </div>
                <div class="code-content hidden">
                    <pre><code class="language-python">${code}</code></pre>
                </div>
            </div>`;
        }
        
        // For other languages, use default rendering
        return `<pre><code class="${language ? 'language-' + language : ''}">${code}</code></pre>`;
    };
    
    // Add custom class to iframes
    renderer.html = function(html) {
        // Handle the LDA visualization iframe specially
        if (html.includes('lda-visualization.html') || html.includes('lda_topics.html')) {
            // Make sure we don't add the class if it's already in a full-width container
            if (!html.includes('full-width-section')) {
                return `<div class="full-width-iframe-container">${html}</div>`;
            }
        }
        return html;
    };
    
    // Render the markdown
    try {
        // Use the configured renderer
        marked.use({ renderer });
        
        // Render and set the HTML
        const renderedContent = marked.parse(markdownContent);
        
        // Get URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const mdParam = urlParams.get('md');
        
        // SIMPLIFIED CONDITION: If we're at root URL (no parameter) OR explicitly requesting korean-identity-final,
        // apply the paper styling
        const isMainPaper = mdParam === 'korean-identity-final' || !mdParam;
        
        console.log(`Rendering markdown with parameters: mdParam=${mdParam}, isMainPaper=${isMainPaper}`);
        
        if (isMainPaper) {
            console.log("Applying paper-content styling");
            contentContainer.innerHTML = `<div class="paper-content">${renderedContent}</div>`;
        } else {
            console.log("Using standard content styling");
            contentContainer.innerHTML = renderedContent;
        }
        
        // Re-highlight all code blocks
        if (typeof hljs !== 'undefined') {
            document.querySelectorAll('pre code').forEach(block => {
                hljs.highlightBlock(block);
            });
        }
        
        console.log('Markdown rendering complete');
    } catch (error) {
        console.error("Error rendering markdown:", error);
        contentContainer.innerHTML = `
            <div class="alert alert-danger">
                <h4>Error Rendering Content</h4>
                <p>${error.message}</p>
            </div>
        `;
    }
}
