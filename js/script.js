// Currently empty for a static homepage.
// Add your JavaScript functionalities here as needed.

// Example: Simple console log to confirm script is linked
console.log("Enactus website script loaded!");

// Example: Smooth scrolling for anchor links (if you want to add this)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});