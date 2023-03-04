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
  // hide the #preloader element and the #preloader:before element after 1.5 seconds
  setTimeout(function() {
    document.querySelector('#preloader').classList.add('hide-preloader');
    document.querySelector('#snake').classList.add('hide-preloader');
  }, 1500);
}


