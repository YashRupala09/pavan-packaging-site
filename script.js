  gsap.registerPlugin(ScrollTrigger);

  // Nav Slide from Top
  gsap.from("#nav-bar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  });
if (performance.navigation.type === 1 || performance.getEntriesByType("navigation")[0].type === "reload") {
    window.location.href = "index.html";
  }
  // Hero Section Pop
  gsap.from(".hero-section h1", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    delay: 0.2
  });

  gsap.from(".hero-section p", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "expo.out"
  });

  gsap.from(".hero-section button", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.8,
    ease: "bounce.out"
  });

  // About Image Clip Reveal
  gsap.from(".about-image img", {
    scrollTrigger: {
      trigger: ".about-image img",
      start: "top 85%"
    },
    clipPath: "inset(0 100% 0 0)",
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  });

  // About Text Slide
  gsap.from(".about-text", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 85%",
    },
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  // Product Cards Floating Zoom
  gsap.utils.toArray(".product-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
      },
      y: 60,
      opacity: 0,
      scale: 0.85,
      duration: 0.8,
      ease: "back.out(1.4)",
      delay: i * 0.1
    });
  });

  // Service Card Rotation and Lift
  gsap.utils.toArray(".service-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%"
      },
      rotationY: 30,
      y: 50,
      opacity: 0,
      duration: 1,
      delay: i * 0.15,
      ease: "power3.out"
    });
  });

  // Section Titles Slide In + Underline Expand
  // Section Titles Slide In (All)
gsap.utils.toArray(".section-title").forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 90%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8
  });
});

// Add Underline Animation Only for About Section
const aboutTitle = document.querySelector("#about .section-title");
if (aboutTitle) {
  const underline = document.createElement("div");
  underline.style.height = "3px";
  underline.style.background = "#2e8b57";
  underline.style.marginTop = "8px";
  underline.style.width = "0%";
  aboutTitle.appendChild(underline);

  gsap.to(underline, {
    scrollTrigger: {
      trigger: aboutTitle,
      start: "top 90%",
    },
    width: "80%",
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out"
  });
}
const menuToggle = document.getElementById('menu-toggle');
const navText = document.getElementById('nav-text');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  navText.classList.toggle('show');
});

// Optional: Hide nav on link click (mobile)
document.querySelectorAll('#nav-text a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navText.classList.remove('show');
      menuToggle.classList.remove('open');
    }
  });
});

  // FAQ Bounce Reveal
  gsap.utils.toArray(".faq-box").forEach((box, i) => {
    gsap.from(box, {
      scrollTrigger: {
        trigger: box,
        start: "top 90%",
      },
      y: 60,
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      delay: i * 0.1,
      ease: "bounce.out"
    });
  });

  // Contact Section Slide from Bottom
  gsap.from(".contact-form", {
    scrollTrigger: {
      trigger: ".contact-form",
      start: "top 85%",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "expo.out"
  });