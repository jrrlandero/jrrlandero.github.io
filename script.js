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

  preloader.classList.add('hide-preloader');
  snake.classList.remove('animate-snake');
}

setTimeout(function() {
  stopLoader();
}, 2000);








