// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector("nav ul");
    const menuToggle = document.createElement("div");

  
    menuToggle.style.fontSize = "24px";
    menuToggle.style.cursor = "pointer";
    menuToggle.style.display = "none";

    document.querySelector("header").prepend(menuToggle);

    menuToggle.addEventListener("click", function () {
        navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
    });

    function updateMenuDisplay() {
        if (window.innerWidth < 768) {
            menuToggle.style.display = "block";
            navLinks.style.display = "none";
        } else {
            menuToggle.style.display = "none";
            navLinks.style.display = "flex";
        }
    }

    window.addEventListener("resize", updateMenuDisplay);
    updateMenuDisplay();
}); // <-- 🔴 CLOSED FIRST EVENT LISTENER

// Form Validation
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const checkin = document.getElementById("checkin").value;
        const checkout = document.getElementById("checkout").value;
        const guests = document.getElementById("guests").value;

        if (!name || !email || !checkin || !checkout || !guests) {
            alert("Please fill in all fields before submitting.");
            event.preventDefault();
        } else {
            alert("Reservation submitted successfully!");
        }
    });
}); // <-- 🔴 CLOSED SECOND EVENT LISTENER

// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
}); // <-- 🔴 CLOSED THIRD EVENT LISTENER

// Initialize Swiper.js
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false, // Prevents looping back to the first slide
    autoplay: false, // Disables automatic sliding
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

        slidesPerView: 1, // Show 1 slide at a time
        spaceBetween: 20, // Space between slides
    });
}); // <-- 🔴 CLOSED FOURTH EVENT LISTENER
// Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");

    form.addEventListener("submit", function (event) {
        const name = form.querySelector("input[name='name']").value.trim();
        const email = form.querySelector("input[name='email']").value.trim();
        const message = form.querySelector("textarea[name='message']").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            event.preventDefault();
        } else {
            alert("Message sent successfully!");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

