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

// Function to stop the preloader
function stopLoader() {
  const preloader = document.querySelector('#preloader');
  const snake = document.querySelector('#snake');
  const preloaderBefore = document.querySelector('#preloader:before');

  // Hide the preloader by adding the 'hide-preloader' class
  preloader.classList.add('hide-preloader');

  // Remove the animation class from the snake
  snake.classList.remove('animate-snake');

  // Hide the preloader:before pseudo-element after 2 seconds
  setTimeout(() => {
    preloaderBefore.style.display = 'none';
  }, 2000);
}

// Add an event listener to window that triggers the stopLoader function when the page is loaded
//window.addEventListener('load', () => {
//  stopLoader();
//}); 

