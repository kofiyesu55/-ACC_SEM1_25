document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-btn");
  const navLinks = document.querySelector("nav ul");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
  
  