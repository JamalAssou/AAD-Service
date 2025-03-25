// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Éléments du DOM
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const backToTop = document.querySelector('.back-to-top');
    const serviceCards = document.querySelectorAll('.service-card');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const pricingToggle = document.getElementById('pricing-toggle');
    const monthlyPrices = document.querySelectorAll('.price.monthly');
    const annualPrices = document.querySelectorAll('.price.annual');
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const statNumbers = document.querySelectorAll('.stat-number');
    const langButtons = document.querySelectorAll('.lang-btn');

    // Modals
    const serviceModal = document.getElementById('serviceModal');
    const projectModal = document.getElementById('projectModal');
    const modalCloseButtons = document.querySelectorAll('.modal-close');

    // Données pour les modals
    const serviceData = {
        web: {
            title: "Sites Web",
            description: "Nous concevons des sites web performants, modernes et optimisés pour le référencement SEO, adaptés à vos besoins spécifiques.",
            features: [
                "Sites vitrines professionnels",
                "Plateformes e-commerce",
                "Applications web complexes",
                "Optimisation SEO avancée",
                "Responsive design",
                "Expérience utilisateur optimisée",
                "Intégration de systèmes de paiement",
                "Maintenance et support technique"
            ]
        },
        mobile: {
            title: "Applications Mobiles",
            description: "Création d'applications mobiles intuitives et réactives pour iOS et Android, adaptées à vos besoins spécifiques.",
            features: [
                "Applications natives iOS/Android",
                "Applications hybrides cross-platform",
                "Interfaces utilisateur intuitives",
                "Intégration de fonctionnalités avancées",
                "Notifications push",
                "Synchronisation avec le cloud",
                "Optimisation des performances",
                "Maintenance et mises à jour"
            ]
        },
        design: {
            title: "Design UX/UI",
            description: "Création d'interfaces utilisateur modernes et intuitives qui améliorent l'engagement et la conversion.",
            features: [
                "Audit et refonte UX",
                "Design d'interfaces modernes",
                "Prototypage interactif",
                "Identité visuelle cohérente",
                "Tests utilisateurs",
                "Optimisation de la conversion",
                "Design responsive",
                "Accessibilité web"
            ]
        }
    };

    const projectData = {
        project1: {
            title: "E-commerce Luxe",
            description: "Conception et développement d'une plateforme e-commerce pour une marque de produits de luxe, avec une expérience utilisateur premium et des fonctionnalités avancées.",
            image: "/placeholder.svg?height=400&width=600",
            client: "Luxeo Paris",
            services: "Design UX/UI, Développement Web, E-commerce",
            year: "2023",
            link: "#"
        },
        project2: {
            title: "FitTrack Pro",
            description: "Application mobile de suivi fitness et nutrition permettant aux utilisateurs de suivre leurs activités physiques, leur alimentation et leurs progrès.",
            image: "/placeholder.svg?height=400&width=600",
            client: "FitTech Solutions",
            services: "Design UX/UI, Développement Mobile, API",
            year: "2022",
            link: "#"
        },
        project3: {
            title: "BankEase",
            description: "Refonte complète de l'expérience utilisateur pour une application bancaire, avec un focus sur la simplicité, l'accessibilité et la sécurité.",
            image: "/placeholder.svg?height=400&width=600",
            client: "BankGroup",
            services: "Design UX/UI, Prototypage, Tests Utilisateurs",
            year: "2023",
            link: "#"
        },
        project4: {
            title: "EduConnect",
            description: "Plateforme éducative pour cours en ligne avec des fonctionnalités avancées comme le suivi de progression, les quiz interactifs et les forums de discussion.",
            image: "/placeholder.svg?height=400&width=600",
            client: "EduTech Inc.",
            services: "Développement Web, Design UX/UI, API",
            year: "2022",
            link: "#"
        },
        project5: {
            title: "ImmoScan",
            description: "Application immobilière avec réalité augmentée permettant aux utilisateurs de visualiser les propriétés en 3D et d'obtenir des informations en temps réel.",
            image: "/placeholder.svg?height=400&width=600",
            client: "ImmoTech",
            services: "Développement Mobile, Réalité Augmentée, API",
            year: "2023",
            link: "#"
        },
        project6: {
            title: "DataViz Pro",
            description: "Design d'interface pour dashboard analytique permettant aux entreprises de visualiser et d'analyser leurs données de manière intuitive et efficace.",
            image: "/placeholder.svg?height=400&width=600",
            client: "DataTech Solutions",
            services: "Design UX/UI, Data Visualization, Prototypage",
            year: "2022",
            link: "#"
        }
    };

    // Fonctions

    // Changement de style du header au scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            backToTop.classList.add('active');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.remove('active');
        }

        // Animation des statistiques au scroll
        animateStatsOnScroll();
    }

    // Toggle du menu mobile
    function toggleMobileMenu() {
        navLinks.classList.toggle('active');

        // Animation du bouton hamburger
        const spans = menuToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }

    // Fermeture du menu mobile au clic sur un lien
    function closeMobileMenu() {
        navLinks.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    }

    // Scroll vers une section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    }

    // Filtrer les éléments du portfolio
    function filterPortfolio(category) {
        portfolioItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Toggle des prix (mensuel/annuel)
    function togglePricing() {
        const isAnnual = pricingToggle.checked;
        const toggleLabels = document.querySelectorAll('.toggle-label');

        toggleLabels.forEach((label, index) => {
            if ((isAnnual && index === 1) || (!isAnnual && index === 0)) {
                label.classList.add('active');
            } else {
                label.classList.remove('active');
            }
        });

        monthlyPrices.forEach(price => {
            price.style.display = isAnnual ? 'none' : 'inline-block';
        });

        annualPrices.forEach(price => {
            price.style.display = isAnnual ? 'inline-block' : 'none';
        });
    }

    // Ouvrir la modal de service
    function openServiceModal(serviceType) {
        const service = serviceData[serviceType];
        if (service) {
            document.getElementById('modalTitle').textContent = service.title;
            document.getElementById('modalDescription').textContent = service.description;

            const featuresList = document.getElementById('modalFeatures');
            featuresList.innerHTML = '';
            service.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });

            serviceModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Ouvrir la modal de projet
    function openProjectModal(projectId) {
        const project = projectData[projectId];
        if (project) {
            document.getElementById('projectTitle').textContent = project.title;
            document.getElementById('projectDescription').textContent = project.description;
            document.getElementById('projectImage').src = project.image;
            document.getElementById('projectImage').alt = project.title;
            document.getElementById('projectClient').textContent = project.client;
            document.getElementById('projectServices').textContent = project.services;
            document.getElementById('projectYear').textContent = project.year;
            document.getElementById('projectLink').href = project.link;

            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Fermer les modals
    function closeModals() {
        serviceModal.classList.remove('active');
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Slider de témoignages
    function initTestimonialsSlider() {
        const track = document.querySelector('.testimonials-track');
        const slides = document.querySelectorAll('.testimonial-card');
        const dotsContainer = document.querySelector('.testimonials-dots');
        const prevBtn = document.querySelector('.nav-btn.prev');
        const nextBtn = document.querySelector('.nav-btn.next');

        let currentIndex = 0;
        const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);

        // Créer les points de navigation
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        // Fonction pour aller à un slide spécifique
        function goToSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;

            track.style.transform = `translateX(-${index * slideWidth}px)`;

            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });

            currentIndex = index;
        }

        // Event listeners pour les boutons de navigation
        prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
        nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

        // Auto-play
        let interval = setInterval(() => goToSlide(currentIndex + 1), 5000);

        // Pause auto-play on hover
        track.addEventListener('mouseenter', () => clearInterval(interval));
        track.addEventListener('mouseleave', () => {
            clearInterval(interval);
            interval = setInterval(() => goToSlide(currentIndex + 1), 5000);
        });

        // Responsive
        window.addEventListener('resize', () => {
            const newSlideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
            goToSlide(currentIndex);
        });
    }

    // Animation des statistiques
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2 secondes
            const step = target / (duration / 16); // 16ms par frame (environ 60fps)
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                stat.textContent = Math.floor(current);
            }, 16);
        });
    }

    // Animation des statistiques au scroll
    function animateStatsOnScroll() {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const sectionTop = aboutSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75 && !aboutSection.classList.contains('animated')) {
                aboutSection.classList.add('animated');
                animateStats();
            }
        }
    }

    // Soumission du formulaire de contact
    function handleFormSubmit(e) {
        e.preventDefault();

        // Simuler l'envoi du formulaire
        const formData = new FormData(contactForm);

        // Ici, vous pourriez ajouter une vraie requête AJAX pour envoyer les données

        // Afficher le message de succès
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';

        // Réinitialiser le formulaire après 5 secondes
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            formSuccess.style.display = 'none';
        }, 5000);
    }

    // Changement de langue
    function changeLanguage(lang) {
        // Mettre à jour l'attribut lang de la balise html
        document.documentElement.lang = lang;

        // Sauvegarder la langue choisie dans le localStorage
        localStorage.setItem('preferredLanguage', lang);

        // Mettre à jour les boutons de langue
        langButtons.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Mettre à jour tous les textes avec les traductions
        const elementsToTranslate = document.querySelectorAll('[data-lang-key]');
        elementsToTranslate.forEach(element => {
            const key = element.dataset.langKey;
            if (translations[lang] && translations[lang][key]) {
                // Si l'élément est un input ou textarea
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.type === 'submit' || element.type === 'button') {
                        element.value = translations[lang][key];
                    } else {
                        element.placeholder = translations[lang][key];
                    }
                }
                // Si l'élément est un label
                else if (element.tagName === 'LABEL') {
                    element.textContent = translations[lang][key];
                }
                // Pour les autres éléments, on peut utiliser innerHTML pour gérer les balises HTML
                else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Mettre à jour les données des modals
        updateModalData(lang);
    }

    // Mettre à jour les données des modals en fonction de la langue
    function updateModalData(lang) {
        // Mettre à jour les données des services
        for (const serviceType in serviceData) {
            if (translations[lang]) {
                // Titre du service
                const titleKey = serviceType === 'web' ? 'websites' :
                    serviceType === 'mobile' ? 'mobile_apps' : 'ux_ui_design';
                if (translations[lang][titleKey]) {
                    serviceData[serviceType].title = translations[lang][titleKey];
                }

                // Description du service
                const descKey = serviceType === 'web' ? 'websites_desc' :
                    serviceType === 'mobile' ? 'mobile_apps_desc' : 'ux_ui_design_desc';
                if (translations[lang][descKey]) {
                    serviceData[serviceType].description = translations[lang][descKey];
                }

                // Fonctionnalités du service
                const featurePrefix = serviceType === 'web' ? 'websites_feature' :
                    serviceType === 'mobile' ? 'mobile_apps_feature' : 'ux_ui_design_feature';

                // Mettre à jour les 4 premières fonctionnalités qui sont dans les traductions
                for (let i = 0; i < 4; i++) {
                    const featureKey = `${featurePrefix}${i+1}`;
                    if (translations[lang][featureKey]) {
                        serviceData[serviceType].features[i] = translations[lang][featureKey];
                    }
                }
            }
        }

        // Mettre à jour les données des projets
        for (const projectId in projectData) {
            if (translations[lang]) {
                // Titre du projet
                const titleKey = `${projectId}_title`;
                if (translations[lang][titleKey]) {
                    projectData[projectId].title = translations[lang][titleKey];
                }

                // Description du projet
                const descKey = `${projectId}_desc`;
                if (translations[lang][descKey]) {
                    projectData[projectId].description = translations[lang][descKey];
                }
            }
        }
    }

    // Charger la langue préférée de l'utilisateur
    function loadPreferredLanguage() {
        const preferredLanguage = localStorage.getItem('preferredLanguage') || 'fr';
        changeLanguage(preferredLanguage);
    }

    // Event Listeners
    window.addEventListener('scroll', handleScroll);
    menuToggle.addEventListener('click', toggleMobileMenu);
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Bouton retour en haut
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Cartes de services
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceType = card.getAttribute('data-service');
            openServiceModal(serviceType);
        });
    });

    // Filtres du portfolio
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-filter');
            filterPortfolio(category);
        });
    });

    // Boutons du portfolio
    document.querySelectorAll('.portfolio-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectId = btn.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    // Toggle des prix
    if (pricingToggle) {
        pricingToggle.addEventListener('change', togglePricing);
    }

    // Fermeture des modals
    modalCloseButtons.forEach(btn => {
        btn.addEventListener('click', closeModals);
    });

    window.addEventListener('click', (e) => {
        if (e.target === serviceModal || e.target === projectModal) {
            closeModals();
        }
    });

    // Formulaire de contact
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Boutons de changement de langue
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            changeLanguage(lang);
        });
    });

    // Initialiser le slider de témoignages
    initTestimonialsSlider();

    // Fonction pour naviguer vers une section depuis n'importe où
    window.goToContactSection = function() {
        scrollToSection('contact');
    };

    window.scrollToSection = scrollToSection;

    // Appliquer les animations initiales
    handleScroll();

    // Charger la langue préférée
    loadPreferredLanguage();
});