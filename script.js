document.addEventListener('DOMContentLoaded', function() {
            const container = document.getElementById('circleThreads');
            const colors = ['rgba(0, 240, 255, 0.3)', 'rgba(255, 0, 230, 0.3)', 'rgba(100, 255, 200, 0.3)'];
            
            for (let i = 0; i < 15; i++) {
                const circle = document.createElement('div');
                circle.className = 'circle-thread';
                
                // Random properties
                const size = Math.random() * 200 + 50;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const delay = Math.random() * 15;
                const duration = 10 + Math.random() * 20;
                
                // Apply styles
                circle.style.width = `${size}px`;
                circle.style.height = `${size}px`;
                circle.style.left = `${posX}%`;
                circle.style.top = `${posY}%`;
                circle.style.borderColor = color;
                circle.style.animationDelay = `${delay}s`;
                circle.style.animationDuration = `${duration}s`;
                
                container.appendChild(circle);
            }
            
            // GSAP animations for interactive elements
            gsap.from(".gradient-text", {
                duration: 1.5,
                opacity: 0,
                y: 20,
                ease: "power3.out",
                stagger: 0.2
            });
            
            gsap.from(".feature-card", {
                scrollTrigger: {
                    trigger: "#features",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                y: 50,
                ease: "back.out(1.7)",
                stagger: 0.2
            });
            
            // Hover effects for feature cards
            document.querySelectorAll(".feature-card").forEach(card => {
                card.addEventListener("mouseenter", () => {
                    gsap.to(card, {
                        duration: 0.3,
                        scale: 1.02,
                        ease: "power2.out"
                    });
                });
                
                card.addEventListener("mouseleave", () => {
                    gsap.to(card, {
                        duration: 0.3,
                        scale: 1,
                        ease: "power2.out"
                    });
                });
            });
            
            // Tab system functionality
            const tabButtons = document.querySelectorAll('.tab-button');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons and contents
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabContents.forEach(content => content.classList.remove('active'));
                    
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    // Show corresponding content
                    const tabId = button.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobileMenuButton');
            const mobileMenu = document.getElementById('mobileMenu');
            
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
            });
            
            // Close mobile menu when clicking on a link
            document.querySelectorAll('#mobileMenu a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                });
            });
            
            // Smooth scrolling for all links with scroll-link class
            document.querySelectorAll('.scroll-link').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Prevent form submission
            document.querySelector('form').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for joining our waitlist! We\'ll be in touch soon.');
                this.reset();
            });
        });