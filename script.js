// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  for (let el of reveals) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.6s ease";
    }
  }
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Contact form (demo only)
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks Jeff! Your message has been sent.");
  e.target.reset();
});
