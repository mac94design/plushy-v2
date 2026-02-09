// Preloader functionality
const preloader = document.getElementById("preloader");
const body = document.body;

// Add class to body to prevent scrolling
body.classList.add("preloader-active");

// Wait for 2 seconds, then fade out
setTimeout(() => {
  preloader.classList.add("hidden");
  body.classList.remove("preloader-active");

  // Remove preloader from DOM after fade out completes
  setTimeout(() => {
    preloader.remove();
  }, 500); // Match the transition duration
}, 2500); // 2.5 seconds
