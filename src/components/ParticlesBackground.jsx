import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        const particleCount = window.innerWidth < 768 ? 30 : 60; // Reduce density on mobile

        let mouse = {
            x: null,
            y: null,
            radius: 150 // Interaction radius
        };

        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove); // Listen globally or scoped? Better scoped if possible, but for background effect global is smoother usually, but let's stick to canvas interaction if it covers the area.
        // Actually, since this is a section background, we might want to listen on the window but calculate relative to canvas if the canvas is full width.
        // However, sticking to window for simpler "follows mouse" logic across the screen is often better, but let's map to canvas coordinates.
        // Ideally, the canvas covers the section.

        // Initialize Canvas
        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
                initParticles();
            }
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 1.5; // Increased ambient speed
                this.vy = (Math.random() - 0.5) * 1.5;
                this.size = Math.random() * 2 + 1;
                this.density = (Math.random() * 30) + 1;
            }

            update() {
                // Ambient movement
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
                if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

                // Mouse Interaction (Repulsion/Shockwave)
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        // Move AWAY from mouse (Repulsion/Shockwave)
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        const directionX = forceDirectionX * force * this.density * 0.6;
                        const directionY = forceDirectionY * force * this.density * 0.6;

                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }
            }

            draw() {
                ctx.fillStyle = '#A4FF00';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();

                ctx.shadowBlur = 10;
                ctx.shadowColor = '#A4FF00';
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();

                // Connect particles close to each other
                /* Optional: Constellation effect */
                particles.forEach(otherParticle => {
                    let dx = particle.x - otherParticle.x;
                    let dy = particle.y - otherParticle.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(164, 255, 0, ${0.1 - distance / 1000})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Check if mouse is within the section mainly
        const sectionFunc = (e) => {
            const rect = canvas.getBoundingClientRect();
            // If mouse is near the canvas
            if (e.clientY >= rect.top - 100 && e.clientY <= rect.bottom + 100) {
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            } else {
                mouse.x = null;
                mouse.y = null;
            }
        }

        window.addEventListener('mousemove', sectionFunc);

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', sectionFunc);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none', // Allow clicks to pass through
                zIndex: 0
            }}
        />
    );
};

export default ParticlesBackground;
