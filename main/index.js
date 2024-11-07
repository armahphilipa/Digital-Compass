//reveal


document.addEventListener('DOMContentLoaded', function () {
  ScrollReveal().reveal('.swoop-in', {
    duration: 1000,
    origin: 'top',
    distance: '20px',
    easing: 'ease-out',
  });

  // Initialize ScrollReveal for the paragraph with a delay of 2 seconds
  ScrollReveal().reveal('.paragraph', {
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    easing: 'ease-out',
    delay: 2000, 
  });

  ScrollReveal().reveal('.btn', {
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    easing: 'ease-out',
    delay: 3500, 
  });

  ScrollReveal().reveal('.apps', {
    duration: 1000,
    origin: 'right', // You can adjust this to 'left' if you want it to come in from the left
    distance: '20px',
    easing: 'ease-out',
  });

  ScrollReveal().reveal('footer', {
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    easing: 'ease-out',
  });
  
});

  


  //use these
  /*
document.addEventListener('DOMContentLoaded', function () {
  // Your existing code

  // Initialize ScrollReveal for the 'swoop-in' class
 

  // Add more similar blocks for other elements
});

document.addEventListener('DOMContentLoaded', function () {
  // Your existing code

  // Initialize ScrollReveal for the 'apps' class
 

  // Add more similar blocks for other elements
});


document.addEventListener('DOMContentLoaded', function () {
  // Your existing code

  // Initialize ScrollReveal
  ScrollReveal().reveal('.swoop-in', {
    duration: 1000,
    origin: 'top',
    distance: '20px',
    easing: 'ease-out',
    interval: 200
  });

  ScrollReveal().reveal('.paragraph', {
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    easing: 'ease-out',
    interval: 200
  });

  // Add more similar blocks for other elements
});
  */