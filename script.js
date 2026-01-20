/**
 * PreciseFlow Project Website
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ PreciseFlow loaded');

    // Navbar scroll behavior
    const navbar = document.getElementById('navbar');

    if (navbar) {
        // 立即检查一次
        checkNavbar();

        window.addEventListener('scroll', checkNavbar);

        function checkNavbar() {
            if (window.scrollY > 200) {
                navbar.classList.add('visible');
            } else {
                navbar.classList.remove('visible');
            }
        }
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 60;
                const top = target.offsetTop - offset;
                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }
        });
    });

    // BibTeX copy
    const bibtexBox = document.querySelector('.bibtex-box');
    if (bibtexBox) {
        bibtexBox.title = 'Click to copy BibTeX';
        bibtexBox.addEventListener('click', () => {
            const text = bibtexBox.querySelector('code').textContent;
            navigator.clipboard.writeText(text).then(() => {
                bibtexBox.style.borderColor = '#8D85E5';
                bibtexBox.style.boxShadow = '0 0 0 2px rgba(141, 133, 229, 0.3)';
                setTimeout(() => {
                    bibtexBox.style.borderColor = '';
                    bibtexBox.style.boxShadow = '';
                }, 500);
            }).catch(err => {
                console.error('Copy failed:', err);
            });
        });
    }
});
