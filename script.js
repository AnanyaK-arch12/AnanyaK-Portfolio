
// ========================================
// MOBILE NAVIGATION
// ========================================

// Get the menu button and navigation menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Open and close the mobile navigation
menuToggle.addEventListener("click", function () {
    // Toggle the active class
    const isOpen = navMenu.classList.toggle("active");

    // Update accessibility attributes
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Update the button's accessible label
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the menu when a navigation link is clicked
const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        // Hide the navigation menu
        navMenu.classList.remove("active");

        // Reset accessibility attributes
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});