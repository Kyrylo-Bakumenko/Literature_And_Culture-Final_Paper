const browserSync = require('browser-sync').create();

// Initialize browser-sync server with live reload
browserSync.init({
    server: {
        baseDir: './',  // Serve from current directory
    },
    files: [
        '*.html',
        'css/*.css',
        'js/*.js',
        'content/*.md'
    ],
    open: true,        // Automatically open browser
    notify: true,      // Show notification when refreshing
    port: 3000,        // Use port 3000
    ui: {
        port: 3001     // UI on port 3001
    }
});

console.log('Live reload server running at http://localhost:3000');
console.log('UI available at http://localhost:3001');
