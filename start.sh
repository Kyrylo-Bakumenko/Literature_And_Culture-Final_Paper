#!/bin/bash

echo "Setting up Python Interactive Blog..."

# Create necessary directories
mkdir -p content css js

# Check if essential files exist, if not, print error message
echo "Checking essential files..."

MISSING_FILES=0

check_file() {
    if [ ! -f "$1" ]; then
        echo "❌ Missing file: $1"
        MISSING_FILES=$((MISSING_FILES+1))
    else
        echo "✓ Found: $1"
    fi
}

# Check essential files
check_file "index.html"
check_file "css/styles.css"
check_file "js/main.js"
check_file "js/markdown.js"
check_file "js/python-runner.js"
check_file "content/sample-post.md"

if [ $MISSING_FILES -gt 0 ]; then
    echo "⚠️  Warning: $MISSING_FILES essential files are missing!"
    echo "Please make sure all files are in the correct locations."
    echo "You can still try to start the server, but the application may not work correctly."
fi

# Make the script executable
chmod +x start.sh

# Start a simple HTTP server
echo "Starting local server at http://localhost:8000"
echo "You can access the debug page at http://localhost:8000/debug.html"
echo "Press Ctrl+C to stop the server"

# Try Python's http.server first
if command -v python3 &>/dev/null; then
    python3 -m http.server 8000
elif command -v python &>/dev/null; then
    python -m http.server 8000
# Fall back to Node.js http-server if Python is not available
elif command -v npx &>/dev/null; then
    npx http-server -p 8000
else
    echo "Error: Could not find python or npx to start a local server."
    echo "Please install Python or Node.js, or manually start a local server."
    exit 1
fi
