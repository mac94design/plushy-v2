// Add this to a new file or your existing script.js
document.addEventListener("DOMContentLoaded", () => {
  const modelViewer = document.querySelector("#plushy-model");
  const modelViewerMobile = document.querySelector("#plushy-model-mobile");

  // Function to animate rotation back and forth
  function animateRotation(viewer) {
    if (!viewer) return;

    // Wait for model to load
    viewer.addEventListener("load", () => {
      let currentRotation = 90; // Starting rotation (from camera-orbit)
      let direction = 1; // 1 for forward, -1 for backward
      const minRotation = 45; // 90 - 45 = 45 degrees
      const maxRotation = 135; // 90 + 45 = 135 degrees
      const rotationSpeed = 0.05; // Adjust speed (degrees per frame)

      function animate() {
        currentRotation += direction * rotationSpeed;

        // Reverse direction when hitting limits
        if (currentRotation >= maxRotation) {
          currentRotation = maxRotation;
          direction = -1;
        } else if (currentRotation <= minRotation) {
          currentRotation = minRotation;
          direction = 1;
        }

        // Update camera orbit (keeping other values: 90deg for vertical, 105% for distance)
        viewer.cameraOrbit = `${currentRotation}deg 90deg 105%`;

        requestAnimationFrame(animate);
      }

      animate();
    });
  }

  // Apply to both viewers
  animateRotation(modelViewer);
  animateRotation(modelViewerMobile);
});
