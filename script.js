document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Toggle ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-links');

    if (mobileMenu && navMenu) {
        const setMenuOpen = (open) => {
            mobileMenu.classList.toggle('is-active', open);
            navMenu.classList.toggle('active', open);
            mobileMenu.setAttribute('aria-expanded', String(open));
            mobileMenu.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
        };
        mobileMenu.addEventListener('click', () => {
            setMenuOpen(!navMenu.classList.contains('active'));
        });

        // Close mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                setMenuOpen(false);
            });
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                setMenuOpen(false);
                mobileMenu.focus();
            }
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

    const mainSlideshowContainer = document.getElementById('main-slideshow-container');
    const mainSlideshowDots = document.getElementById('main-slideshow-dots');
    const mainSlidePrev = document.getElementById('main-slide-prev');
    const mainSlideNext = document.getElementById('main-slide-next');

    if (mainSlideshowContainer) {
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

        const categoryImages = {
            'eau': ['1.webp'],
            'environnement': ['1.webp'],
            'education': ['1.webp'],
            'religion': ['Mosquee face 1.jpeg', 'Mosquee face 2.jpeg'],
            'routes': ['1.webp'],
            'tourisme': ['1.webp'],
            'festivites': ['1.webp'],
            'autres': []
        };

        filterBtns.forEach(btn => {
            const category = btn.getAttribute('data-filter');
            btn.hidden = category !== 'all' && !(categoryImages[category]?.length);
        });

        function getCaption(category, imgSrc) {
            const filename = imgSrc.split('/').pop().split('.')[0];
            const catName = categoryNames[category] || category;
            if (category === 'religion') {
                return `Mosquée de Tagmout — ${filename.endsWith('2') ? 'vue 2' : 'vue 1'}`;
            }
            if (filename === '1' || !isNaN(filename)) {
                return catName;
            }
            const cleanName = filename.replace(/[_-]/g, ' ');
            const formattedName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
            return `${catName} : ${formattedName}`;
        }

        // Flat array of all images
        let allImages = [];
        for (const [category, files] of Object.entries(categoryImages)) {
            files.forEach(filename => {
                const imgSrc = `images/galerie/${category}/${filename}`;
                const caption = getCaption(category, imgSrc);
                allImages.push({
                    category,
                    src: imgSrc,
                    caption
                });
            });
        }

        let currentFilteredImages = [...allImages];
        let currentSlideIdx = 0;
        let slideshowInterval = null;

        function renderSlideshow() {
            // Clear existing slides and dots
            mainSlideshowContainer.innerHTML = '';
            mainSlideshowDots.innerHTML = '';

            if (currentFilteredImages.length === 0) {
                const message = document.createElement('p');
                message.className = 'gallery-empty';
                message.setAttribute('role', 'status');
                message.textContent = 'Aucune photo pour le moment.';
                mainSlideshowContainer.appendChild(message);
                mainSlidePrev.style.display = 'none';
                mainSlideNext.style.display = 'none';
                mainSlideshowDots.style.display = 'none';
                return;
            }

            // Create slides and dots
            currentFilteredImages.forEach((imgObj, idx) => {
                const slide = document.createElement('div');
                slide.className = 'slide gallery-item';
                slide.setAttribute('data-category', imgObj.category);
                slide.style.display = 'none';

                slide.innerHTML = `
                    <img src="${imgObj.src}" alt="${imgObj.caption}">
                    <div class="gallery-overlay" style="display: none;"><span>${imgObj.caption}</span></div>
                `;
                mainSlideshowContainer.appendChild(slide);

                const dot = document.createElement('button');
                dot.className = 'slide-dot';
                dot.setAttribute('aria-label', `Diapositive ${idx + 1}`);
                mainSlideshowDots.appendChild(dot);
            });

            // Show first slide
            showSlide(0);

            // Show/hide controls
            if (currentFilteredImages.length <= 1) {
                mainSlidePrev.style.display = 'none';
                mainSlideNext.style.display = 'none';
                mainSlideshowDots.style.display = 'none';
            } else {
                mainSlidePrev.style.display = 'flex';
                mainSlideNext.style.display = 'flex';
                mainSlideshowDots.style.display = 'flex';
            }
        }

        function showSlide(index) {
            const slides = mainSlideshowContainer.querySelectorAll('.slide');
            const dots = mainSlideshowDots.querySelectorAll('.slide-dot');

            if (slides.length === 0) return;

            // Hide previous active slide
            if (currentSlideIdx >= 0 && currentSlideIdx < slides.length) {
                slides[currentSlideIdx].classList.remove('active');
                slides[currentSlideIdx].style.display = 'none';
                if (dots[currentSlideIdx]) {
                    dots[currentSlideIdx].classList.remove('active');
                }
            }

            // Wrap index
            currentSlideIdx = (index + slides.length) % slides.length;

            // Show new active slide
            slides[currentSlideIdx].classList.add('active');
            slides[currentSlideIdx].style.display = 'block';
            if (dots[currentSlideIdx]) {
                dots[currentSlideIdx].classList.add('active');
            }
        }

        function nextSlide() {
            showSlide(currentSlideIdx + 1);
        }

        function prevSlide() {
            showSlide(currentSlideIdx - 1);
        }

        function startAutoplay() {
            if (currentFilteredImages.length > 1) {
                slideshowInterval = setInterval(nextSlide, 4000); // Auto change every 4 seconds
            }
        }

        function resetAutoplay() {
            if (slideshowInterval) {
                clearInterval(slideshowInterval);
            }
            startAutoplay();
        }

        // Bind control click events
        mainSlidePrev.addEventListener('click', (e) => {
            e.stopPropagation();
            prevSlide();
            resetAutoplay();
        });

        mainSlideNext.addEventListener('click', (e) => {
            e.stopPropagation();
            nextSlide();
            resetAutoplay();
        });

        // Event delegation for dots navigation
        mainSlideshowDots.addEventListener('click', (e) => {
            const dot = e.target.closest('.slide-dot');
            if (dot) {
                e.stopPropagation();
                const dots = Array.from(mainSlideshowDots.querySelectorAll('.slide-dot'));
                const idx = dots.indexOf(dot);
                if (idx !== -1) {
                    showSlide(idx);
                    resetAutoplay();
                }
            }
        });

        // Event listener for category filters
        if (filterBtns.length > 0) {
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    const filterValue = btn.getAttribute('data-filter');
                    if (filterValue === 'all') {
                        currentFilteredImages = [...allImages];
                    } else {
                        currentFilteredImages = allImages.filter(img => img.category === filterValue);
                    }

                    currentSlideIdx = 0;
                    renderSlideshow();
                    resetAutoplay();
                });
            });
        }

        // Initialize slideshow
        renderSlideshow();
        startAutoplay();
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
                // Get all gallery items currently in the DOM
                visibleItems = Array.from(document.querySelectorAll('.gallery-item'));
                
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
