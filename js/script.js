/*****************Menu***************
************************************/
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");
    const dropdown = document.querySelector(".dropdown");
  
    hamburgerMenu.addEventListener("click", function() {
      navMenu.classList.toggle("active");
    });
  
    dropdown.addEventListener("click", function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.classList.toggle("active");
      }
    });
});
  