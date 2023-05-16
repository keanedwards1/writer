/* toggle light/dark */
const themeImage = document.getElementById('theme-image');
const body = document.body;
const gearImage = document.getElementById('settings'); // Get a reference to the gear image element
const fightImage = document.getElementById('comp');
const upvoteImage = document.getElementById('upvote');
const profileImage = document.getElementById('profile-photo');
const submitButton = document.getElementById('submit-img');
const newPrompt = document.getElementById('new-prompt-button');
const poemOfTheDay = document.getElementById('poem-of-the-day-button');
const newPoem = document.getElementById('new-poem-button');

// Function to set the gear image based on the theme
function setGearImage(isDarkMode) {
  if (isDarkMode) {
    gearImage.src = 'y. images/gear-inverted.png';
  } else {
    gearImage.src = 'y. images/gear.png';
  }
}

// Function to set the comp image based on the theme
function setCompImage(isDarkMode) {
  if (isDarkMode) {
    fightImage.src = 'y. images/comp-night.png';
  } else {
    fightImage.src = 'y. images/comp-day.png';
  }
}

// Function to set the upvote image based on the theme
function setUpvoteImage(isDarkMode) {
  if (isDarkMode) {
    upvoteImage.src = 'y. images/upvote-night.png';
  } else {
    upvoteImage.src = 'y. images/upvote-day.svg';
  }
}

// Function to set the upvote image based on the theme
function setProfileImage(isDarkMode) {
  if (isDarkMode) {
    profileImage.src = 'y. images/profile-night.png';
  } else {
    profileImage.src = 'y. images/profile-day.png';
  }
}

function setSubmitButton(isDarkMode) {
  if (isDarkMode) {
    submitButton.src = 'y. images/submit-night.png';
  } else {
    submitButton.src = 'y. images/submit-day.png';
  }
}

function setNewPrompt(isDarkMode) {
  if (isDarkMode) {
    newPrompt.src = 'y. images/newPrompt-night.png';
  } else {
    newPrompt.src = 'y. images/newPrompt-day.png';
  }
}

function setPoemOfTheDay(isDarkMode) {
  if (isDarkMode) {
    poemOfTheDay.src = 'y. images/poemOfTheDay-night.png';
  } else {
    poemOfTheDay.src = 'y. images/poemOfTheDay-day.png';
  }
}

function setNewPoemButton(isDarkMode) {
  if (isDarkMode) {
    newPoem.src = 'y. images/newPrompt-night.png';
  } else {
    newPoem.src = 'y. images/newPrompt-day.png';
  }
}



// Check for user preference in local storage
const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// Set the initial theme and y. images based on user preference
if (isDarkMode) {
  body.classList.add('dark-theme');
  themeImage.src = 'y. images/moon.png';
  themeImage.alt = 'Moon';
  setGearImage(true);
  setCompImage(true);
  setUpvoteImage(true);
  setProfileImage(true);
  setSubmitButton(true);
  setNewPrompt(true);
  setPoemOfTheDay(true);
  setNewPoemButton(true);
} else {
  body.classList.add('light-theme');
  themeImage.src = 'y. images/sun.png';
  themeImage.alt = 'Sun';
  setGearImage(false);
  setCompImage(false);
  setUpvoteImage(false);
  setProfileImage(false);
  setSubmitButton(false);
  setNewPrompt(false);
  setPoemOfTheDay(false);
  setNewPoemButton(false);
}

// Toggle the theme and y. images when the sun or moon is clicked
themeImage.addEventListener('click', function () {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('isDarkMode', 'true');
    themeImage.src = 'y. images/moon.png';
    themeImage.alt = 'Moon';
    setGearImage(true);
    setCompImage(true);
    setUpvoteImage(true);
    setProfileImage(true);
    setSubmitButton(true);
    setNewPrompt(true);
    setPoemOfTheDay(true);
    setNewPoemButton(true);
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('isDarkMode', 'false');
    themeImage.src = 'y. images/sun.png';
    themeImage.alt = 'Sun';
    setGearImage(false);
    setCompImage(false);
    setUpvoteImage(false);
    setProfileImage(false);
    setSubmitButton(false);
    setNewPrompt(false);
    setPoemOfTheDay(false);
    setNewPoemButton(false);
  }
});