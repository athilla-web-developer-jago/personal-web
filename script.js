// Navigasi Sticky saat Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.background = 'rgba(11, 11, 11, 0.98)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.background = 'rgba(11, 11, 11, 0.95)';
    }
});

// Animasi Fade In saat scroll (Simple version)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Menerapkan efek pada section
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Mobile Menu Alert (Placeholder untuk fungsionalitas menu mobile)
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
    alert('Menu mobile dapat Anda kembangkan dengan menambahkan class aktif pada nav-links!');
});
