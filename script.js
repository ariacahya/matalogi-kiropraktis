// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);

// TESTIMONI AUTO SLIDE
let testimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial-item");

function showTestimonial() {
    testimonials.forEach(item => item.classList.remove("active"));
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    testimonials[testimonialIndex].classList.add("active");
}

// tampilkan pertama kali
if (testimonials.length > 0) {
    testimonials[0].classList.add("active");
    setInterval(showTestimonial, 4000); // ganti tiap 4 detik
}

// SWIPE TESTIMONI MOBILE
let startX = 0;
let endX = 0;

const slider = document.querySelector(".testimonial-slider");

if (slider) {
    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
}

function handleSwipe() {
    const threshold = 50; // jarak minimal swipe
    if (startX - endX > threshold) {
        // swipe kiri → next
        showTestimonial();
    } else if (endX - startX > threshold) {
        // swipe kanan → prev
        testimonialIndex =
            (testimonialIndex - 2 + testimonials.length) % testimonials.length;
        showTestimonial();
    }
}

// LIGHTBOX GALERI
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // lock scroll
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// NAVBAR TOGGLE
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// auto close setelah klik menu (mobile)
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
