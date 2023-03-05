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
  const preloaderBefore = document.querySelector('#preloader:before');

  preloader.classList.add('hide-preloader');
  preloader.classList.remove('animate-snake');

  // hide the preloader:before pseudo-element after 2 seconds
  setTimeout(() => {
    preloaderBefore.style.display = 'none';
  }, 2000);
}



window.addEventListener('load', function() {
  stopLoader();
});



