/**
 * PreciseFlow Project Website - StyleAlign Style
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ PreciseFlow loaded');

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 20,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // BibTeX copy functionality
    const bibtexBox = document.querySelector('.bibtex-box');
    if (bibtexBox) {
        bibtexBox.title = 'Click to copy BibTeX';
        bibtexBox.addEventListener('click', () => {
            const text = bibtexBox.querySelector('code').textContent;
            navigator.clipboard.writeText(text).then(() => {
                const originalBorder = bibtexBox.style.borderColor;
                bibtexBox.style.borderColor = '#333';
                bibtexBox.style.boxShadow = '0 0 0 2px rgba(0, 0, 0, 0.2)';
                setTimeout(() => {
                    bibtexBox.style.borderColor = originalBorder;
                    bibtexBox.style.boxShadow = '';
                }, 500);
            }).catch(err => {
                console.error('Copy failed:', err);
            });
        });
    }

    // Video comparison slider
    const videoContainers = document.querySelectorAll('.video-compare-container');
    videoContainers.forEach(container => {
        const slider = container.querySelector('.video-slider');
        const wrapper = container.querySelector('.video-foreground-wrapper');
        const videoSrc = container.querySelector('.video-background');
        const videoEdit = container.querySelector('.video-foreground');

        // Sync videos
        const syncVideos = () => {
            if (Math.abs(videoSrc.currentTime - videoEdit.currentTime) > 0.1) {
                videoEdit.currentTime = videoSrc.currentTime;
            }
        };

        videoSrc.addEventListener('timeupdate', syncVideos);

        // Slider control
        slider.addEventListener('input', (e) => {
            const value = e.target.value;
            wrapper.style.width = value + '%';
        });
    });
});
