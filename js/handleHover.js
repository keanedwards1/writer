const submitButtonContainer = document.getElementById("submit-container");
const newPromptyButton = document.getElementById("new-prompt-container");
const submitTooltip = document.querySelector(".tooltip");
const newPromptTooltip = document.querySelector(".tooltip2");
const promptOfDayTooltip = document.querySelector(".tooltip3");

submitContainer.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  submitTooltip.style.top = y - 30 + "px";
  submitTooltip.style.left = x - 70 + "px";
});

newPromptyButton.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  newPromptTooltip.style.top = y - 30 + "px";
  newPromptTooltip.style.left = x - 40 + "px";
});

newPromptyButton.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  promptOfDayTooltip.style.top = y - 30 + "px";
  promptOfDayTooltip.style.left = x - 300 + "px";
});