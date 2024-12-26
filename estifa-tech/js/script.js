document.addEventListener('DOMContentLoaded', () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    
    // Hide loader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loaderWrapper.classList.add('hidden');
        }, 1000); // 1 second delay before hiding
    });
});

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the dashboard manager
    window.dashboard = new DashboardManager();
    
    // Load and render existing skills
    dashboard.loadData();
    dashboard.updateHomePageSkills();
});

let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-card');
const totalSlides = slides.length;

function moveSlider(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const track = document.querySelector('.testimonial-track');
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Optional: Auto-slide
setInterval(() => moveSlider(1), 5000);

// Animate skill bars when they come into view
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });
    
    skillItems.forEach(item => {
        observer.observe(item);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
});
