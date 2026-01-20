/**
 * PreciseFlow Project Website
 */

document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll behavior
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('.header');

    if (navbar && header) {
        window.addEventListener('scroll', () => {
            const headerBottom = header.offsetTop + header.offsetHeight;
            if (window.scrollY > headerBottom - 100) {
                navbar.classList.add('visible');
            } else {
                navbar.classList.remove('visible');
            }
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = navbar ? 60 : 0;
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
        bibtexBox.title = 'Click to copy';
        bibtexBox.addEventListener('click', () => {
            const text = bibtexBox.querySelector('code').textContent;
            navigator.clipboard.writeText(text).then(() => {
                bibtexBox.style.borderColor = '#8D85E5';
                setTimeout(() => {
                    bibtexBox.style.borderColor = '';
                }, 500);
            });
        });
    }

    console.log('✅ PreciseFlow loaded');
});
