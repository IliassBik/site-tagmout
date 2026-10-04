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

        const categoryProjects = window.galleryProjects || {};
        const projectSection = document.getElementById('gallery-projects');
        const projectFilters = document.getElementById('gallery-project-filters');
        const projectTitle = document.getElementById('gallery-projects-title');
        const albumLabel = document.getElementById('gallery-album-label');

        const imageCaptions = {
            'installation-eau-panneaux-solaires-vue-ensemble.jpeg': "Installation d’eau et panneaux solaires — vue d’ensemble",
            'panneaux-solaires-installation-eau.jpeg': "Panneaux solaires de l’installation d’eau",
            'installation-eau-vue-depuis-route.jpeg': "Installation d’eau — vue depuis la route",
            'ouvrage-eau-couvercle-bleu.jpeg': "Ouvrage d’eau à couvercle bleu et clôture",
            'cloture-local-installation-eau.jpeg': "Clôture et local de l’installation d’eau",
            'terrain-arbore-abords-installation-eau.jpeg': "Terrain arboré aux abords de l’installation d’eau",
            'local-panneaux-solaires-vue-arriere.jpeg': "Local et panneaux solaires — vue arrière"
        };

        function getCaption(category, imgSrc) {
            const explicitCaption = imageCaptions[imgSrc.split('/').pop()];
            if (explicitCaption) return explicitCaption;
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
        const allImages = [];
        for (const [category, projects] of Object.entries(categoryProjects)) {
            projects.forEach(project => project.images.forEach(photo => {
                const imgSrc = photo.src;
                const caption = getCaption(category, photo.original);
                allImages.push({
                    date: photo.date,
                    category,
                    project: project.id,
                    src: imgSrc,
                    caption: `${project.name} — ${caption}`
                });
            }));
        }

        allImages.sort((a, b) => a.date.localeCompare(b.date) || a.src.localeCompare(b.src));
        let currentFilteredImages = [...allImages];
        let currentSlideIdx = 0;
        let slideshowInterval = null;

        function selectAlbum(category, projectId = null) {
            currentFilteredImages = allImages.filter(img =>
                (category === 'all' || img.category === category) &&
                (!projectId || img.project === projectId)
            );
            const project = categoryProjects[category]?.find(item => item.id === projectId);
            const albumName = document.createElement('bdi');
            albumName.className = 'gallery-album-name';
            albumName.dir = 'auto';
            albumName.textContent = project ? project.name : (categoryNames[category] || 'Tous les thèmes');
            const albumCount = document.createElement('span');
            albumCount.className = 'gallery-album-count';
            albumCount.dir = 'ltr';
            albumCount.textContent = `${currentFilteredImages.length} photo${currentFilteredImages.length !== 1 ? 's' : ''}`;
            albumLabel.replaceChildren(albumName, albumCount);
            currentSlideIdx = 0;
            renderSlideshow();
            resetAutoplay();
        }

        function renderProjects(category) {
            projectFilters.replaceChildren();
            projectSection.hidden = category === 'all';
            if (category === 'all') return;
            projectTitle.textContent = `Les projets : ${categoryNames[category]}`;
            const projects = categoryProjects[category] || [];
            if (!projects.length) {
                const message = document.createElement('p');
                message.textContent = 'Les projets de ce thème seront ajoutés prochainement.';
                projectFilters.appendChild(message);
                return;
            }
            const options = [{ id: null, name: 'Tous les projets' }, ...projects];
            options.forEach(project => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = `filter-btn project-filter-btn${project.id === null ? ' active' : ''}`;
                button.textContent = project.name;
                button.setAttribute('aria-pressed', String(project.id === null));
                button.addEventListener('click', () => {
                    projectFilters.querySelectorAll('button').forEach(item => {
                        item.classList.toggle('active', item === button);
                        item.setAttribute('aria-pressed', String(item === button));
                    });
                    selectAlbum(category, project.id);
                });
                projectFilters.appendChild(button);
            });
        }

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
                    <img data-src="${imgObj.src}" alt="${imgObj.caption}" decoding="async">
                    <div class="gallery-overlay" style="display: none;"><span>${imgObj.caption}</span></div>
                `;
                mainSlideshowContainer.appendChild(slide);

                const dot = document.createElement('button');
                dot.className = 'slide-thumbnail';
                dot.type = 'button';
                dot.setAttribute('aria-label', `Photo ${idx + 1} : ${imgObj.caption}`);
                const thumbnail = document.createElement('img');
                thumbnail.src = imgObj.src;
                thumbnail.alt = '';
                thumbnail.loading = 'lazy';
                thumbnail.decoding = 'async';
                dot.appendChild(thumbnail);
                mainSlideshowDots.appendChild(dot);
            });

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
            // Select after showing the strip so its width is available.
            showSlide(0);
        }

        function showSlide(index) {
            const slides = mainSlideshowContainer.querySelectorAll('.slide');
            const dots = mainSlideshowDots.querySelectorAll('.slide-thumbnail');

            if (slides.length === 0) return;

            // Hide previous active slide
            if (currentSlideIdx >= 0 && currentSlideIdx < slides.length) {
                slides[currentSlideIdx].classList.remove('active');
                slides[currentSlideIdx].style.display = 'none';
                if (dots[currentSlideIdx]) {
                    dots[currentSlideIdx].classList.remove('active');
                    dots[currentSlideIdx].removeAttribute('aria-current');
                }
            }

            // Wrap index
            currentSlideIdx = (index + slides.length) % slides.length;

            // Fetch only the selected photo and the next one.
            [currentSlideIdx, (currentSlideIdx + 1) % slides.length].forEach(idx => {
                const image = slides[idx].querySelector('img');
                if (!image.getAttribute('src')) image.src = image.dataset.src;
            });

            // Show new active slide
            slides[currentSlideIdx].classList.add('active');
            slides[currentSlideIdx].style.display = 'block';
            if (dots[currentSlideIdx]) {
                dots[currentSlideIdx].classList.add('active');
                dots[currentSlideIdx].setAttribute('aria-current', 'true');
                const activeThumbnail = dots[currentSlideIdx];
                mainSlideshowDots.scrollLeft = activeThumbnail.offsetLeft - (mainSlideshowDots.clientWidth - activeThumbnail.offsetWidth) / 2;
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

        // Swipe horizontally on the main photo; vertical page scrolling remains available.
        let touchStart = null;
        mainSlideshowContainer.addEventListener('touchstart', (event) => {
            touchStart = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
        }, { passive: true });
        mainSlideshowContainer.addEventListener('touchend', (event) => {
            if (!touchStart || !event.changedTouches.length) return;
            const dx = event.changedTouches[0].clientX - touchStart.x;
            const dy = event.changedTouches[0].clientY - touchStart.y;
            touchStart = null;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
                dx < 0 ? nextSlide() : prevSlide();
                resetAutoplay();
            }
        }, { passive: true });
        mainSlideshowContainer.addEventListener('touchcancel', () => { touchStart = null; });

        // Event delegation for thumbnail navigation
        mainSlideshowDots.addEventListener('click', (e) => {
            const dot = e.target.closest('.slide-thumbnail');
            if (dot) {
                e.stopPropagation();
                const dots = Array.from(mainSlideshowDots.querySelectorAll('.slide-thumbnail'));
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
                btn.setAttribute('aria-pressed', String(btn.classList.contains('active')));
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => {
                        b.classList.remove('active');
                        b.setAttribute('aria-pressed', 'false');
                    });
                    btn.classList.add('active');
                    btn.setAttribute('aria-pressed', 'true');

                    const filterValue = btn.getAttribute('data-filter');
                    renderProjects(filterValue);
                    selectAlbum(filterValue);
                });
            });
        }

        // Initialize slideshow
        selectAlbum('all');
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
