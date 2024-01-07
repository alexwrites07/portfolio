function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Trigger animation when the document is fully loaded
    animateSkills();
  });
  
  function animateSkills() {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      bar.classList.add("animate");
    });
  }
  

