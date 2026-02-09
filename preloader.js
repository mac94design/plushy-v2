// Preloader functionality
const preloader = document.getElementById("preloader");
const loaderBar = document.getElementById("loaderBar");
const body = document.body;

// Add class to body to prevent scrolling
body.classList.add("preloader-active");

// Animate the progress bar
let progress = 0;
const duration = 2500; // 2.5 seconds total
const interval = 16; // ~60fps updates
const increment = (100 / duration) * interval;

const fillProgress = setInterval(() => {
  progress += increment;

  if (progress >= 100) {
    progress = 100;
    clearInterval(fillProgress);

    // Wait a moment at 100%, then fade out
    setTimeout(() => {
      preloader.classList.add("hidden");
      body.classList.remove("preloader-active");

      // Remove preloader from DOM after fade out completes
      setTimeout(() => {
        preloader.remove();
      }, 500); // Match the transition duration
    }, 100);
  }

  loaderBar.style.width = progress + "%";
}, interval);
