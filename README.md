# Python Interactive Blog

A static website that renders Markdown content with interactive Python code cells that can be executed directly in the browser.

## Features

- Load content from Markdown files
- Execute Python code in the browser using Pyodide
- Support for data visualization with Matplotlib
- No server-side code required - runs entirely in the browser

## Getting Started

### Local Development

1. Clone this repository
2. Serve the directory with a local web server:

```bash
# Using Python's built-in server
python -m http.server 8000

# Or with Node.js's http-server if installed
npx http-server
```

3. Open your browser and navigate to `http://localhost:8000`

### Adding Your Own Content

1. Create a new Markdown file in the `content/` directory
2. Format your content with Python code blocks using triple backticks and the `python` language identifier
3. Access your content by navigating to `index.html?md=your-file-name` (without the .md extension)

Example Markdown format:

```markdown
# Your Blog Title

Regular text and explanations go here.

​```python
# Python code blocks are interactive
import numpy as np
print("Hello world!")
​```
```

### Deployment

To deploy this blog:

1. Upload all files to any static web hosting service:
   - GitHub Pages
   - Netlify
   - Vercel
   - Amazon S3
   - etc.

## Customization

- Modify `styles.css` to change the appearance of your blog
- Edit the header and footer in `index.html`
- Add additional JavaScript libraries as needed

## Limitations

- Python code runs entirely in the browser, so execution may be slower than server-side code
- Not all Python packages are available in Pyodide
- Large computations might freeze the browser temporarily

## License

MIT
