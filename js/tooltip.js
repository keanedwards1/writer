const submitTooltip = document.querySelector(".tooltip");
const newPromptTooltip = document.querySelector(".tooltip2");
const promptOfTheDayTooltip = document.querySelector(".tooltip3");
const newPoemTooltip = document.querySelector(".tooltip4");
const infoTooltip = document.querySelector(".tooltip5");

toggleInfoButton.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  infoTooltip.style.top = y - 30 + "px";
  infoTooltip.style.left = x - 43 + "px";
});

if (currentPage === 'index.html') {
  submitImg.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    submitTooltip.style.top = y - 45 + "px";
    submitTooltip.style.left = x - 50 + "px";
  });

  newPrompt.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    newPromptTooltip.style.top = y - 40 + "px";
    newPromptTooltip.style.left = x - 40 + "px";
  });

  poemOfTheDay.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    promptOfTheDayTooltip.style.top = y - 40 + "px";
    promptOfTheDayTooltip.style.left = x - 55 + "px";
  });

  newPoem.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    newPoemTooltip.style.top = y - 40 + "px";
    newPoemTooltip.style.left = x - 30 + "px";
  });
}







/*const tooltip = document.getElementById('tooltip4');
const promptText = document.getElementById('prompt-text');

// Update tooltip text
promptText.addEventListener('mouseenter', () => {
  tooltip.textContent = 'your writing prompt'; // Change the tooltip text dynamically here
});

promptText.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none'; // Hide the tooltip when the user leaves the text
});*/

