// JavaScript to handle the scroll effect on the navigation bar
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('hidden');
    } else {
        navbar.classList.remove('scrolled');
        if (window.scrollY > 10) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
    }
});

// Optional: Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Check if the link is for an internal section
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                    behavior: 'smooth'
                });
            }

            // Close the mobile menu after clicking a link
            if (document.querySelector('.nav-list').classList.contains('show')) {
                document.querySelector('.nav-list').classList.remove('show');
            }
        }
    });
});

// Loading Screen Logic
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');

    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.pointerEvents = 'none';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000); // match the duration of your fade-out animation
    }, 3000); // adjust this time to match your loading animation duration
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('show');
});
