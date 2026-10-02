// ================================
// Home Bite - Main JavaScript
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // Mobile Navigation
    // -------------------------------
    const menuButton = document.getElementById("menuButton");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Close menu after clicking a navigation link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }


    // -------------------------------
    // Scroll Reveal Animation
    // -------------------------------
    const revealElements = document.querySelectorAll(
        ".feature-card, .meal-card, .step-card, .plan-card, .testimonial-card, .about-content"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });


    // -------------------------------
    // Current Year in Footer
    // -------------------------------
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // -------------------------------
    // Smooth Scrolling
    // -------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

});