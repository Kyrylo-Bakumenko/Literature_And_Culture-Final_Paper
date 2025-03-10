function renderMarkdown(markdownContent) {
    const contentContainer = document.getElementById('content-container');
    
    // Configure marked renderer
    marked.setOptions({
        highlight: function(code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(code, { language: lang }).value;
                } catch (err) {}
            }
            return code;
        },
        breaks: true,
    });
    
    // Custom renderer to handle Python code blocks specially
    const renderer = new marked.Renderer();
    const originalCodeRenderer = renderer.code.bind(renderer);
    
    renderer.code = function(code, language) {
        if (language === 'python') {
            // Create a special container for Python code that will be made interactive
            return `<div class="python-cell" data-code="${encodeURIComponent(code)}">
                <div class="buttons">
                    <button class="btn btn-sm btn-primary run-button">Run</button>
                    <button class="btn btn-sm btn-outline-secondary clear-button">Clear</button>
                </div>
                <div class="code-area">
                    <pre><code class="language-python">${hljs.highlight(code, { language: 'python' }).value}</code></pre>
                </div>
                <div class="output-area hidden"></div>
            </div>`;
        }
        return originalCodeRenderer(code, language);
    };
    
    // Render the markdown
    marked.use({ renderer });
    contentContainer.innerHTML = marked.parse(markdownContent);
}
