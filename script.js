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

var animateElements = document.querySelectorAll('.animate');

function animateOnScroll() {
  animateElements.forEach((element) => {
    if (isElementInView(element)) {
      element.classList.add('animate__animated', 'animate__fadeInUp');
    }
  });
}

function isElementInView(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  return (rect.top <= windowHeight && rect.bottom >= 0);
}

window.addEventListener('scroll', animateOnScroll);

function stopLoader() {
  const preloader = document.getElementById('preloader');
  const snake = document.getElementById('snake');
  const preloaderBefore = document.querySelector('#preloader:before');

  preloader.classList.add('hide-preloader');
  snake.classList.remove('animate-snake');

  // hide the preloader:before pseudo-element after 2 seconds
  setTimeout(() => {
    preloaderBefore.style.display = 'none';
  }, 2000);
}

window.addEventListener("load", function() {
  stopLoader();
});





