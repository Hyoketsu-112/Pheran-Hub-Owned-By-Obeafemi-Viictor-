// Fade-in effect on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

// 3D logo hover effect
const logo = document.querySelector(".logo");
if (logo) {
  logo.addEventListener("mousemove", (e) => {
    const { offsetX, offsetY, target } = e;
    const x = (offsetX / target.offsetWidth) - 0.5;
    const y = (offsetY / target.offsetHeight) - 0.5;
    logo.style.transform = `rotateX(${y * 30}deg) rotateY(${x * 30}deg) scale(1.1)`;
  });

  logo.addEventListener("mouseleave", () => {
    logo.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
}

// 3D product card hover effect
const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateX(${y * 10}deg) rotateY(${x * 10}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});
