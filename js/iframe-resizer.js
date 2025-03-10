/**
 * This script handles iframes to ensure they fit properly
 * and don't require unnecessary scrolling
 */

document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for content to load
    setTimeout(() => {
        // Handle LDA visualization iframe resizing
        const ldaIframe = document.querySelector('.lda-section iframe');
        if (ldaIframe) {
            console.log('LDA iframe found, optimizing size...');
            
            // Try to adjust iframe height based on content
            ldaIframe.onload = function() {
                try {
                    // Attempt to get content height
                    const iframeDoc = ldaIframe.contentDocument || ldaIframe.contentWindow.document;
                    if (iframeDoc) {
                        const contentHeight = iframeDoc.body.scrollHeight;
                        console.log('Content height detected:', contentHeight);
                        
                        // Set iframe height with a bit of extra space to avoid scrollbars
                        ldaIframe.style.height = (contentHeight + 20) + 'px';
                        
                        // Adjust parent container's aspect ratio if needed
                        const ratioContainer = ldaIframe.closest('.ratio');
                        if (ratioContainer) {
                            // Remove the fixed aspect ratio
                            ratioContainer.style.height = (contentHeight + 20) + 'px';
                            ratioContainer.classList.remove('ratio-16x9');
                            ratioContainer.classList.add('custom-ratio');
                        }
                    }
                } catch (e) {
                    console.warn('Could not auto-adjust iframe height:', e);
                    // Fall back to a reasonable fixed height
                    ldaIframe.style.height = '600px';
                }
            };
            
            // In case onload doesn't fire (already loaded)
            if (ldaIframe.contentDocument && ldaIframe.contentDocument.readyState === 'complete') {
                ldaIframe.onload();
            }
            
            // Ensure LDA visualization doesn't get cut off by scrolling to left
            ldaIframe.addEventListener('load', function() {
                try {
                    // Add a class to indicate it's ready for viewing
                    ldaIframe.classList.add('loaded');
                    
                    // Scroll to the left if needed
                    if (ldaIframe.contentWindow) {
                        ldaIframe.contentWindow.scrollTo(0, 0);
                    }
                } catch (e) {
                    console.warn('Error optimizing LDA visualization:', e);
                }
            });
        }
    }, 1000);
});
