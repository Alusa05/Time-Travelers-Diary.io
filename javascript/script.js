document.addEventListener("DOMContentLoaded", function () {
    // Highlight active navigation link
    const navLinks = document.querySelectorAll("nav a");
    const currentLocation = window.location.href;
    
    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });

    // Smooth scroll for internal links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    
});