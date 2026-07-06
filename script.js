document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Toggle ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-links');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- Active Link Indicator ---
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === 'index.html' && href === '#') || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealFunction = () => {
        if (revealElements.length === 0) return;
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // how many pixels before the element shows

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('visible');
            }
        });
    };

    // Initial check and scroll event listener
    revealFunction();
    window.addEventListener('scroll', revealFunction);


    // --- Accordion Logic (Projets d'Avenir) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                // Toggle active class on header
                this.classList.toggle('active');
                
                // Get the corresponding content
                const content = this.nextElementSibling;
                
                // Toggle max-height for sliding effect
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
                
                // Optional: Close other open accordions
                accordionHeaders.forEach(otherHeader => {
                    if (otherHeader !== this && otherHeader.classList.contains('active')) {
                        otherHeader.classList.remove('active');
                        otherHeader.nextElementSibling.style.maxHeight = null;
                    }
                });
            });
        });
    }

    // --- Navbar background on scroll ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = '0 1px 0 rgba(0,0,0,0.05)';
            }
        });
    }

    // --- Counter Animation ---
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        const speed = 150; // Slower, more elegant counting

        const startCounters = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    
                    const updateCount = () => {
                        const count = +counter.innerText;
                        const inc = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 20);
                        } else {
                            counter.innerText = target;
                        }
                    };

                    updateCount();
                    observer.unobserve(counter);
                }
            });
        };

        const counterObserver = new IntersectionObserver(startCounters, {
            root: null,
            threshold: 0.5,
        });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // --- Dynamic Gallery Loader & Filtering ---
    const galleryGrid = document.getElementById('gallery-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (galleryGrid) {
        const categories = ["eau", "environnement", "education", "religion", "routes", "tourisme", "festivites", "autres"];
        const extensions = ["webp", "jpg", "jpeg", "png"];
        
        const categoryNames = {
            'eau': 'Hydraulique / Eau',
            'environnement': 'Environnement / Nature',
            'education': 'Éducation',
            'religion': 'Religion',
            'routes': 'Routes / Sentiers',
            'tourisme': 'Tourisme',
            'festivites': 'Festivités',
            'autres': 'Autres'
        };

        function getCaption(category, imgSrc) {
            const filename = imgSrc.split('/').pop().split('.')[0];
            const catName = categoryNames[category] || category;
            if (filename === '1' || !isNaN(filename)) {
                return catName;
            }
            const cleanName = filename.replace(/[_-]/g, ' ');
            const formattedName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
            return `${catName} : ${formattedName}`;
        }

        // Load images sequentially for each category
        categories.forEach(category => {
            let index = 1;
            
            function tryNextImage() {
                let extIndex = 0;
                
                function tryExtension() {
                    if (extIndex >= extensions.length) {
                        // All extensions failed for this index, stop for this category
                        return;
                    }
                    
                    const ext = extensions[extIndex];
                    const imgSrc = `images/galerie/${category}/${index}.${ext}`;
                    const img = new Image();
                    
                    img.onload = function() {
                        // Image successfully loaded! Create elements
                        const caption = getCaption(category, imgSrc);
                        const col = document.createElement('div');
                        col.className = 'gallery-item scroll-reveal visible';
                        col.setAttribute('data-category', category);
                        
                        col.innerHTML = `
                            <img src="${imgSrc}" alt="${caption}">
                            <div class="gallery-overlay"><span>${caption}</span></div>
                        `;
                        
                        galleryGrid.appendChild(col);
                        
                        // Increment and load the next image in this category
                        index++;
                        tryNextImage();
                    };
                    
                    img.onerror = function() {
                        // This extension failed, try the next extension
                        extIndex++;
                        tryExtension();
                    };
                    
                    img.src = imgSrc;
                }
                
                tryExtension();
            }
            
            tryNextImage();
        });
    }

    // Gallery Filtering Event Listeners
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');
                const galleryItems = document.querySelectorAll('.gallery-item');

                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.9)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // --- Lightbox Visionneuse ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (lightbox) {
        let visibleItems = [];
        let currentIndex = -1;

        const updateLightboxContent = (index) => {
            if (index >= 0 && index < visibleItems.length) {
                const item = visibleItems[index];
                const img = item.querySelector('img');
                const overlayText = item.querySelector('.gallery-overlay span');
                if (img && lightboxImg && lightboxCaption) {
                    lightboxImg.src = img.src;
                    lightboxCaption.innerText = overlayText ? overlayText.innerText : (img.alt || '');
                    currentIndex = index;
                }
            }
        };

        // Event delegation to catch clicks on dynamically loaded gallery images
        document.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if (item) {
                // Get all currently visible gallery items
                visibleItems = Array.from(document.querySelectorAll('.gallery-item')).filter(el => {
                    return window.getComputedStyle(el).display !== 'none';
                });
                
                const index = visibleItems.indexOf(item);
                if (index !== -1 && lightboxImg && lightboxCaption) {
                    updateLightboxContent(index);
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Disable scroll
                }
            }
        });

        // Close Lightbox
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
        };

        // Close on close button click
        const closeBtn = lightbox.querySelector('.lightbox-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }

        // Prev/Next handlers
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Avoid closing lightbox
                if (visibleItems.length > 1) {
                    let nextIdx = currentIndex - 1;
                    if (nextIdx < 0) nextIdx = visibleItems.length - 1;
                    updateLightboxContent(nextIdx);
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Avoid closing lightbox
                if (visibleItems.length > 1) {
                    let nextIdx = (currentIndex + 1) % visibleItems.length;
                    updateLightboxContent(nextIdx);
                }
            });
        }

        // Close on background click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Keyboard navigation (Escape, Left, Right)
        window.addEventListener('keydown', (e) => {
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowLeft' && visibleItems.length > 1) {
                    let nextIdx = currentIndex - 1;
                    if (nextIdx < 0) nextIdx = visibleItems.length - 1;
                    updateLightboxContent(nextIdx);
                } else if (e.key === 'ArrowRight' && visibleItems.length > 1) {
                    let nextIdx = (currentIndex + 1) % visibleItems.length;
                    updateLightboxContent(nextIdx);
                }
            }
        });
    }
});
