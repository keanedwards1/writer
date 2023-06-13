const rectangleContainer = document.getElementById('rectangleContainer');
const closeButton = document.getElementById('closeButton');
const infoButton = document.getElementById('info-image');

/*var infoButton; 
if (infoButton.classList.conatains('light')) {
  infoButton= document.getElementsById('infoButton.light');
} else {
  infoButton= document.getElementsById('infoButton.dark');
} */

let isRectangleVisible = false;

const toggleRectangleVisibility = () => {
  if (isRectangleVisible) {
    rectangleContainer.style.right = '-420px'; // Hide the rectangle
  } else {
    rectangleContainer.style.right = '0'; // Show the rectangle
  }
  isRectangleVisible = !isRectangleVisible; // Toggle the visibility
};

infoButton.addEventListener('click', toggleRectangleVisibility);

closeButton.addEventListener('click', (event) => {
  rectangleContainer.style.right = '-320px'; // Hide the rectangle
  isRectangleVisible = false; // Update the visibility state
  event.stopPropagation(); // Prevent event bubbling
});

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === 'i') {
    toggleRectangleVisibility();
  }
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (isRectangleVisible && target !== rectangleContainer && !rectangleContainer.contains(target) && target !== infoButton) {
    toggleRectangleVisibility(); }
});


/*****************************************************/
/*************** #result-rectangle ********************/
/*****************************************************/

// JavaScript code to show and hide the result rectangle
if (currentPage === 'index.html') {
    const resultRectangle = document.getElementById("result-rectangle");
    const submitButton = document.getElementById("submit-img");
    const poemInputy = document.getElementById("poem-input");


    let isPoemRectangleVisible = false;

    function showResultRectangle() {
      const content = poemInputy.value;
      resultRectangle.textContent = content;
      resultRectangle.style.display = "block";
      isPoemRectangleVisible = true;
    }

    function hideResultRectangle() {
      resultRectangle.style.display = "none";
      isPoemRectangleVisible = false;
    }

    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      if (isPoemRectangleVisible) {
        hideResultRectangle();
      } else {
        showResultRectangle();
      }
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (isPoemRectangleVisible && target !== resultRectangle && !resultRectangle.contains(target) && target !== submitButton) {
        hideResultRectangle();
      }
    });

    document.addEventListener('keydown', (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
        if (isPoemRectangleVisible) {
          hideResultRectangle();
        } else {
          showResultRectangle();
        }
      }
    });
  }

