const submitButton = document.getElementById("submit-button");
const poemInput = document.getElementById("poem-input");

submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Get the value of the poem input textarea
  const poem = poemInput.value;
  
  // Do something with the poem, such as send it to your server using AJAX
});
