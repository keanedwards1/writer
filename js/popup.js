const showRectButton = document.getElementById('showRectButton');
const rectangleContainer = document.getElementById('rectangleContainer');
const closeButton = document.getElementById('closeButton');

let isRectangleVisible = false;

showRectButton.addEventListener('click', () => {
  if (isRectangleVisible) {
    rectangleContainer.style.right = '-420px'; // Hide the rectangle
  } else {
    rectangleContainer.style.right = '0'; // Show the rectangle
  }
  isRectangleVisible = !isRectangleVisible; // Toggle the visibility
});

closeButton.addEventListener('click', (event) => {
  rectangleContainer.style.right = '-320px'; // Hide the rectangle
  isRectangleVisible = false; // Update the visibility state
  event.stopPropagation(); // Prevent event bubbling (prevents a bug where clickling the x would cause the user to 
// have to click the info button twice)
});
