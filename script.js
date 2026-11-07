
/* =========================
   Portfolio JavaScript
========================= */

// Update the footer year automatically
const footerText = document.querySelector("footer p");

if (footerText) {
    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `&copy; ${currentYear} Israt Jahan Tonwi. All rights reserved.`;
}

// Smooth scrolling for navigation links
const navigationLinks = document.querySelectorAll(
    '.nav-links a, .logo, .hero-buttons a'
);

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");

        if (targetId && targetId.startsWith("#")) {
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});

// Add a subtle reveal animation when sections enter the screen
const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });
}

/* =========================
   Contact Form
========================= */

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document
            .querySelector("#visitor-name")
            .value.trim();

        const senderEmail = document
            .querySelector("#visitor-email")
            .value.trim();

        const message = document
            .querySelector("#visitor-message")
            .value.trim();

        if (!name || !senderEmail || !message) {
            alert("Please complete all fields.");
            return;
        }

        const subject = encodeURIComponent(
            "Portfolio Contact from " + name
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + senderEmail +
            "\n\nMessage:\n" + message
        );

        const recipient = "tonwi1234@gamil.com";

        window.location.href =
            "mailto:" + recipient +
            "?subject=" + subject +
            "&body=" + body;
    });
}
