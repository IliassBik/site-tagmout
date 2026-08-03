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
        const categoryNames = {
            'eau': 'Hydraulique / Eau',
            'environnement': 'Environnement / Nature',
            'education': 'Éducation / Enseignement',
            'religion': 'Religion',
            'routes': 'Routes / Sentiers',
            'tourisme': 'Tourisme',
            'festivites': 'Festivités',
            'autres': 'Autres'
        };

        const categoryIcons = {
            'eau': '💧',
            'environnement': '🌱',
            'education': '🎓',
            'religion': '🕌',
            'routes': '🛣️',
            'tourisme': '🏔️',
            'festivites': '🎉',
            'autres': '📷'
        };

        const categoryImages = {
            'eau': ['1.webp'],
            'environnement': ['1.webp'],
            'education': ['1.webp'],
            'religion': ['mosquee.webp'],
            'routes': ['1.webp'],
            'tourisme': ['1.webp'],
            'festivites': ['1.webp'],
            'autres': []
        };

        function getCaption(category, imgSrc) {
            const filename = imgSrc.split('/').pop().split('.')[0];
            const catName = categoryNames[category] || category;
            if (filename === 'mosquee') {
                return "Mosquée de Tagmout";
            }
            if (filename === '1' || !isNaN(filename)) {
                return catName;
            }
            const cleanName = filename.replace(/[_-]/g, ' ');
            const formattedName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
            return `${catName} : ${formattedName}`;
        }

        // Generate slideshows for each category
        for (const [category, files] of Object.entries(categoryImages)) {
            if (files.length === 0) continue;

            const catName = categoryNames[category] || category;
            const icon = categoryIcons[category] || '📷';

            const section = document.createElement('div');
            section.className = 'theme-slideshow-section scroll-reveal visible';
            section.setAttribute('data-category', category);

            const header = document.createElement('h3');
            header.innerHTML = `${icon} ${catName}`;
            section.appendChild(header);

            const wrapper = document.createElement('div');
            wrapper.className = 'slideshow-wrapper';

            const slidesContainer = document.createElement('div');
            slidesContainer.className = 'slideshow-container';

            files.forEach((filename, idx) => {
                const imgSrc = `images/galerie/${category}/${filename}`;
                const caption = getCaption(category, imgSrc);

                const slide = document.createElement('div');
                slide.className = `slide gallery-item${idx === 0 ? ' active' : ''}`;
                slide.style.display = idx === 0 ? 'block' : 'none';
                slide.setAttribute('data-category', category);

                slide.innerHTML = `
                    <img src="${imgSrc}" alt="${caption}">
                    <div class="gallery-overlay" style="display: none;"><span>${caption}</span></div>
                `;
                slidesContainer.appendChild(slide);
            });

            wrapper.appendChild(slidesContainer);

            if (files.length > 1) {
                const prevBtn = document.createElement('button');
                prevBtn.className = 'slide-nav prev';
                prevBtn.innerHTML = '&#10094;';
                wrapper.appendChild(prevBtn);

                const nextBtn = document.createElement('button');
                nextBtn.className = 'slide-nav next';
                nextBtn.innerHTML = '&#10095;';
                wrapper.appendChild(nextBtn);

                const dotsContainer = document.createElement('div');
                dotsContainer.className = 'slide-dots';
                files.forEach((_, idx) => {
                    const dot = document.createElement('button');
                    dot.className = `slide-dot${idx === 0 ? ' active' : ''}`;
                    dotsContainer.appendChild(dot);
                });
                wrapper.appendChild(dotsContainer);
            }

            section.appendChild(wrapper);
            galleryGrid.appendChild(section);
        }

        // Initialize Slideshow Event Listeners
        document.querySelectorAll('.theme-slideshow-section').forEach(section => {
            const wrapper = section.querySelector('.slideshow-wrapper');
            const slides = wrapper.querySelectorAll('.slide');
            const prevBtn = wrapper.querySelector('.slide-nav.prev');
            const nextBtn = wrapper.querySelector('.slide-nav.next');
            const dots = wrapper.querySelectorAll('.slide-dot');

            if (slides.length <= 1) return;

            let currentIndex = 0;
            let autoplayInterval;

            function showSlide(index) {
                slides[currentIndex].classList.remove('active');
                slides[currentIndex].style.display = 'none';
                if (dots.length > 0) dots[currentIndex].classList.remove('active');

                currentIndex = (index + slides.length) % slides.length;

                slides[currentIndex].classList.add('active');
                slides[currentIndex].style.display = 'block';
                if (dots.length > 0) dots[currentIndex].classList.add('active');
            }

            function nextSlide() {
                showSlide(currentIndex + 1);
            }

            function prevSlide() {
                showSlide(currentIndex - 1);
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    nextSlide();
                    resetAutoplay();
                });
            }

            if (prevBtn) {
                prevBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    prevSlide();
                    resetAutoplay();
                });
            }

            dots.forEach((dot, idx) => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showSlide(idx);
                    resetAutoplay();
                });
            });

            function startAutoplay() {
                autoplayInterval = setInterval(nextSlide, 5000);
            }

            function resetAutoplay() {
                clearInterval(autoplayInterval);
                startAutoplay();
            }

            startAutoplay();
        });
    }

    // Gallery Filtering Event Listeners
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');
                const slideshowSections = document.querySelectorAll('.theme-slideshow-section');

                slideshowSections.forEach(section => {
                    const category = section.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        section.style.display = 'block';
                        setTimeout(() => {
                            section.style.opacity = '1';
                            section.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        section.style.opacity = '0';
                        section.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            section.style.display = 'none';
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
