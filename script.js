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
  console.log('stopLoader() called');
  const preloader = document.querySelector('#preloader');
  const snake = document.querySelector('#snake');

  preloader.classList.add('hide-preloader'); // add hide-preloader class to preloader element
  console.log('hide-preloader class added');

  // Remove the animation class from the snake
  snake.style.animation = 'none';
  console.log('animation removed from snake');

  // Hide the preloader after 2 seconds
  setTimeout(() => {
    preloader.style.display = 'none';
    console.log('preloader hidden');
  }, 2000);
}


// Add an event listener to window that triggers the stopLoader function when the page is loaded
window.addEventListener('load', () => {
  stopLoader();
});



