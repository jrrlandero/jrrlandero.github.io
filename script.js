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

function stopLoader() {
  const preloader = document.getElementById('preloader');
  const snake = document.getElementById('snake');

  // remove the hide-preloader and animate-snake classes
  preloader.classList.remove('hide-preloader');
  snake.classList.add('animate-snake');

  // hide the preloader after 2 seconds
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 2000);
}

window.addEventListener('load', function() {
  stopLoader();
});


