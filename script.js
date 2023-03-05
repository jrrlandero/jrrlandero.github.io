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
  const preloaderBefore = document.querySelector('#preloader:before');

  preloader.classList.add('hide-preloader');
  snake.classList.add('animate-snake'); // add this line

  // hide the preloader:before pseudo-element after 2 seconds
  setTimeout(() => {
    preloaderBefore.style.display = 'none';
  }, 2000);
}


window.addEventListener('load', function() {
  stopLoader();
});



