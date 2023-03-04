const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});



window.addEventListener("load", function() {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "none";
  var snake = document.getElementByID("snake");
  snake.style.display = "none";
  
});


