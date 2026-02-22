const elements = document.querySelectorAll('.glass');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

elements.forEach((el) => {
  el.classList.add('hidden');
  observer.observe(el);
});
// Hero animation on load
window.addEventListener("load", () => {
  document.querySelector(".hero-title").classList.add("show");
  document.querySelector(".hero-subtitle").classList.add("show");
  document.querySelector(".hero-buttons").classList.add("show");
});
// Active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});