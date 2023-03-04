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


window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  const snake = document.getElementById('snake');

  preloader.classList.add('hide-preloader');
  snake.classList.remove('animate-snake');
});


