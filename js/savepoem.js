

const poemInput = document.getElementById("poem-input");

// Load saved poem from localStorage if available
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('savedPoem')) {
      poemInput.value = localStorage.getItem('savedPoem');
    }
  });
  
  // Save poem to localStorage when the input changes
  poemInput.addEventListener('input', () => {
    localStorage.setItem('savedPoem', textarea.value);
  });