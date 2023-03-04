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
  // hide the #preloader element
  document.querySelector('#preloader').classList.add('hide-preloader');
  // hide the #preloader:before element
  document.querySelector('#preloader:before').classList.add('hide-preloader');
}

// stop the preloader after 1.5 seconds
setTimeout(stopLoader, 1500);

