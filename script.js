document.addEventListener('DOMContentLoaded', () => {
    const serviceList = document.querySelector('.service-list');
    const serviceArticles = Array.from(document.querySelectorAll('.service-list article'));
    const totalArticles = serviceArticles.length;
    let currentOffset = 0;
    const articleWidth = 270; // Width (250px) + gap (20px)
    const animationSpeed = 0.05; // Pixels per millisecond for smooth scrolling

    // CSS for layout and animation
    const style = document.createElement('style');
    style.textContent = `
        .service-list {
            display: flex;
            overflow: hidden;
            width: 100%;
            gap: 20px;
            position: relative;
        }
        .service-list.paused {
            animation-play-state: paused;
        }
        .service-list article {
            flex: 0 0 250px;
            min-width: 250px;
            position: relative;
            transition: transform 0.1s linear;
        }
        @media (max-width: 768px) {
            .service-list article {
                flex: 0 0 200px;
                min-width: 200px;
            }
        }
    `;
    document.head.appendChild(style);

    // Animation loop
    function animate() {
        currentOffset += animationSpeed * 16; // Approximate 60fps (16ms per frame)
        const containerWidth = serviceList.offsetWidth;

        serviceArticles.forEach((article, index) => {
            let xPos = (index * articleWidth - currentOffset) % (totalArticles * articleWidth);
            
            // If article moves off the left, reposition to the right
            if (xPos < -articleWidth) {
                xPos += totalArticles * articleWidth;
            }
            article.style.transform = `translateX(${xPos}px)`;
        });

        // Reset offset to prevent overflow
        if (currentOffset >= totalArticles * articleWidth) {
            currentOffset -= totalArticles * articleWidth;
        }

        if (!serviceList.classList.contains('paused')) {
            requestAnimationFrame(animate);
        }
    }

    // Start animation
    requestAnimationFrame(animate);

    // Pause on hover
    serviceList.addEventListener('mouseenter', () => {
        serviceList.classList.add('paused');
    });
    serviceList.addEventListener('mouseleave', () => {
        serviceList.classList.remove('paused');
        requestAnimationFrame(animate);
    });

    // Intersection Observer to control animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                serviceList.classList.remove('paused');
                requestAnimationFrame(animate);
            } else {
                serviceList.classList.add('paused');
            }
        });
    }, observerOptions);

    observer.observe(serviceList);
});
