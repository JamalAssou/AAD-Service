// Animations avancées pour AAD Service
document.addEventListener('DOMContentLoaded', () => {
    // Créer l'effet de particules
    createParticles();

    // Initialiser les animations au scroll
    initScrollAnimations();

    // Initialiser l'effet de parallaxe
    initParallaxEffect();

    // Initialiser le curseur personnalisé
    initCustomCursor();

    // Initialiser l'effet de carte 3D
    initCard3DEffect();

    // Initialiser l'effet de texte qui s'écrit
    initTypingEffect();
});

// Fonction pour créer l'effet de particules
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);

    const particleCount = window.innerWidth < 768 ? 30 : 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Taille aléatoire
        const size = Math.random() * 5 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Position aléatoire
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;

        // Opacité aléatoire
        particle.style.opacity = Math.random() * 0.5 + 0.1;

        // Animation aléatoire
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

        particlesContainer.appendChild(particle);
    }
}

// Fonction pour initialiser les animations au scroll
function initScrollAnimations() {
    // Sélectionner tous les éléments avec les classes d'animation
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');

    // Fonction pour vérifier si un élément est visible
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
    };

    // Fonction pour animer les éléments visibles
    const animateElements = () => {
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    };

    // Ajouter les classes d'animation aux éléments
    document.querySelectorAll('.section-header').forEach(header => {
        header.classList.add('fade-in-up');
    });

    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.classList.add('fade-in-up');
        card.classList.add(`delay-${(index % 3) * 100 + 100}`);
    });

    document.querySelectorAll('.process-step').forEach((step, index) => {
        step.classList.add('fade-in-left');
        step.classList.add(`delay-${index * 100 + 100}`);
    });

    document.querySelectorAll('.portfolio-item').forEach((item, index) => {
        item.classList.add('scale-in');
        item.classList.add(`delay-${(index % 3) * 100 + 100}`);
    });

    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.classList.add('fade-in-right');
    });

    document.querySelectorAll('.pricing-card').forEach((card, index) => {
        card.classList.add('fade-in-up');
        card.classList.add(`delay-${index * 100 + 100}`);
    });

    document.querySelectorAll('.stat-card').forEach((card, index) => {
        card.classList.add('scale-in');
        card.classList.add(`delay-${index * 100 + 100}`);
    });

    document.querySelectorAll('.value-item').forEach((item, index) => {
        item.classList.add('fade-in-right');
        item.classList.add(`delay-${index * 100 + 100}`);
    });

    document.querySelectorAll('.contact-method').forEach((method, index) => {
        method.classList.add('fade-in-left');
        method.classList.add(`delay-${index * 100 + 100}`);
    });

    // Ajouter des effets spéciaux
    document.querySelectorAll('.hero-title').forEach(title => {
        title.classList.add('gradient-animation');
    });

    document.querySelectorAll('.section-title').forEach(title => {
        title.classList.add('highlight-animation');
    });

    document.querySelectorAll('.service-icon').forEach(icon => {
        icon.classList.add('pulse');
    });

    document.querySelectorAll('.hero-shape').forEach(shape => {
        shape.classList.add('morph');
    });

    document.querySelectorAll('.stat-number').forEach(number => {
        number.classList.add('neon');
    });

    document.querySelectorAll('.cta-button.primary-cta').forEach(button => {
        button.classList.add('shadow-move');
    });

    document.querySelectorAll('.portfolio-image img').forEach(img => {
        img.classList.add('filter-on-hover');
    });

    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.classList.add('bounce');
    });

    // Exécuter l'animation au chargement et au scroll
    animateElements();
    window.addEventListener('scroll', animateElements);
}

// Fonction pour initialiser l'effet de parallaxe
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax');

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        parallaxElements.forEach(element => {
            const depth = element.getAttribute('data-depth') || 0.1;
            const moveX = (mouseX - 0.5) * depth * 100;
            const moveY = (mouseY - 0.5) * depth * 100;

            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // Ajouter la classe parallaxe à certains éléments
    document.querySelectorAll('.hero-image').forEach(image => {
        image.classList.add('parallax');
        image.setAttribute('data-depth', '0.2');
    });

    document.querySelectorAll('.service-icon').forEach(icon => {
        icon.classList.add('parallax');
        icon.setAttribute('data-depth', '0.1');
    });
}

// Fonction pour initialiser le curseur personnalisé
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.addEventListener('mousedown', () => {
        cursor.classList.add('active');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('active');
    });

    // Ajouter des effets au survol des éléments interactifs
    const interactiveElements = document.querySelectorAll('a, button, .service-card, .portfolio-item');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });

        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
}

// Fonction pour initialiser l'effet de carte 3D
function initCard3DEffect() {
    const cards = document.querySelectorAll('.service-card, .pricing-card, .portfolio-item');

    cards.forEach(card => {
        card.classList.add('card-3d');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// Fonction pour initialiser l'effet de texte qui s'écrit
function initTypingEffect() {
    const typingElements = document.querySelectorAll('.typing-effect');

    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';

        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    });

    // Ajouter la classe typing-effect à certains éléments
    if (document.querySelector('.hero-title')) {
        document.querySelector('.hero-title').classList.add('typing-effect');
    }
}