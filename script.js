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
        } else {
            // Opsional: reset state saat tidak terlihat untuk animasi berulang
            // entry.target.style.opacity = '0';
            // entry.target.style.transform = 'translateY(20px)';
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
    // Anda bisa menambahkan toggle class untuk menampilkan/menyembunyikan nav-links di sini
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Misalnya, tambahkan class 'active'
    
    // Untuk pengembangan, sementara ini kita tampilkan alert
    // alert('Menu mobile dapat Anda kembangkan dengan menambahkan class aktif pada nav-links!');
});

// Fungsionalitas Menu Mobile (Tambahan untuk contoh)
// Anda perlu menambahkan CSS untuk .nav-links.active { display: flex; flex-direction: column; ... }
// di media query untuk tampilan mobile agar ini berfungsi.
const navLinks = document.querySelector('.nav-links');
if (menuToggle) { // Pastikan menuToggle ada sebelum menambahkan event listener
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Menutup menu jika link diklik
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
}

// Inisialisasi Kursor Utama
const mainCursor = document.createElement('div');
mainCursor.classList.add('crosshair-main');
document.body.appendChild(mainCursor);

// Listener Pergerakan Mouse
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Gerakkan kursor utama seketika
    mainCursor.style.left = `${x}px`;
    mainCursor.style.top = `${y}px`;

    // Buat elemen duplikat untuk efek trail
    createTrail(x, y);
});

function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.classList.add('trail-duplicate');
    
    // Set posisi awal di lokasi mouse saat ini
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    
    document.body.appendChild(trail);

    // Animasi menghilang (Sandevistan style)
    setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'translate(-50%, -50%) scale(0.5)';
    }, 50); // Delay singkat sebelum mulai memudar

    // Hapus elemen dari DOM setelah animasi selesai agar tidak berat
    setTimeout(() => {
        trail.remove();
    }, 450);
}

// Pastikan kursor muncul kembali saat klik link (UX agar tidak bingung)
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        mainCursor.style.borderColor = 'var(--neon-yellow)';
        mainCursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        mainCursor.style.borderColor = 'var(--neon-blue)';
        mainCursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});
