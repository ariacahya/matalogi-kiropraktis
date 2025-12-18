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

// ===== TESTIMONI MODERN SLIDER (FINAL FIX) =====
document.addEventListener("DOMContentLoaded", () => {

  const testimonialsData = [
    {
      text: "Pelayanannya sangat ramah dan terapinya terasa membantu. Badan jadi lebih ringan setelah terapi.",
      name: "— Budi S. ⭐⭐⭐⭐⭐"
    },
    {
      text: "Tempatnya bersih dan terapisnya profesional. Dijelaskan dengan baik sebelum terapi.",
      name: "— Siti A. ⭐⭐⭐⭐⭐"
    },
    {
      text: "Nyeri leher berkurang dan badan terasa lebih enak. Sangat direkomendasikan.",
      name: "— Andi R. ⭐⭐⭐⭐⭐"
    },
    {
      text: "Setelah terapi badan terasa jauh lebih enteng dan tidur jadi lebih nyenyak.",
      name: "— Poppy A. ⭐⭐⭐⭐⭐"
    },
    {
      text: "setelah terapi,masyaAllah badan jd lebih ringan..sakit kepala berkurang..barakallahufiyk pak..semoga berkah..dan sehat selalu..amiin ya rabb",
      name: "— Melati A. ⭐⭐⭐⭐⭐"
    },
    {
      text: "setelah terapi saya dan suami merasa badan lebih ringan dan enteng terutama d bagian kaki, alhmdullilah sangat ramah dan di kasih masukan yang positif , terimaksih pak reza sehat selalu dan di lancarkan terus usahannya 💐",
      name: "— Tina R. ⭐⭐⭐⭐⭐"
    },
    {
      text: "alhamdulilah abis di terapi disini badan terasa jauh lebih enteng dah enakeun top lah 🥰",
      name: "— Muhammad A. ⭐⭐⭐⭐⭐"
    },
    {
      text: "Sangat enak , sesudah di terapi badan jadi enteng dan enak , pokonya maju trus 💯👍",
      name: "— Raihan H. ⭐⭐⭐⭐⭐"
    },
    {
      text: "Setelah di body service, badan jadi lebih enak, naik tangga lebih ringan, nengok ke kiri udah nggak sakit. Alhamdulillah... Jazakallah Mas Reza. Semoga sehat selalu 🤲🙏🌷",
      name: "— Kiayati Y. ⭐⭐⭐⭐⭐"
    },
    {
      text: "Alhamdulillah leher yg td nya kaku dan mata yg terasa spt menusuk setelah di terapi menjadi enakan dan mata menjadi terang. Badan yg kaku m3njadi rileks. Dan yg paling penting sehabis di terapi tidur jd bs nyenyak. 👍",
      name: "— Winda M. ⭐⭐⭐⭐⭐"
    }
  ];

  let currentIndex = 0;
  let interval;

  const textEl = document.querySelector(".testimonial-text");
  const nameEl = document.querySelector(".testimonial-name");
  const indicator = document.getElementById("testimonialIndicator");

  if (!textEl || !nameEl || !indicator) return;

  testimonialsData.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot";

    dot.addEventListener("click", () => {
      goTo(i);
      restartAuto();
    });

    indicator.appendChild(dot);
  });

  const dots = indicator.querySelectorAll(".dot");

  function goTo(index) {
    currentIndex = index;
    textEl.textContent = `"${testimonialsData[index].text}"`;
    nameEl.textContent = testimonialsData[index].name;

    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function startAuto() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonialsData.length;
      goTo(currentIndex);
    }, 4000);
  }

  function restartAuto() {
    clearInterval(interval);
    startAuto();
  }

  goTo(0);
  startAuto();

});


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

