/* changes music images based on theme */
const musicImage = document.getElementById('music-image');

// Function to set the music image based on the theme
function setMusicImage(isDarkMode) {
  if (isDarkMode) {
    musicImage.src = 'images/music-night.png';
    musicImage.dataset.hoverSrc = 'images/music-hover-night.png';
    musicImage.dataset.offSrc = 'images/music-off-night.png';
  } else {
    musicImage.src = 'images/music.png';
    musicImage.dataset.hoverSrc = 'images/music-hover.png';
    musicImage.dataset.offSrc = 'images/music-off.png';
  }
}

// Set the initial music image based on user preference
setMusicImage(isDarkMode);

// Update the music image when the theme is changed
themeImage.addEventListener('click', function () {
  const isDarkMode = body.classList.contains('dark-theme');
  setMusicImage(isDarkMode);
});

// Hover effect for the music image
musicImage.addEventListener('mouseover', function () {
  musicImage.src = musicImage.dataset.hoverSrc;
});

musicImage.addEventListener('mouseout', function () {
  const isDarkMode = body.classList.contains('dark-theme');
  if (isMusicPlaying) {
    setMusicImage(isDarkMode);
  }
});

/* play music in loop depending on theme */
const audio = new Audio();

// Load saved track and time from localStorage
let currentTrackKey = body.classList.contains('dark-theme') ? 'currentDarkTrack' : 'currentLightTrack';
let currentTrack = parseInt(localStorage.getItem(currentTrackKey)) || 0;
audio.currentTime = parseFloat(localStorage.getItem('currentTime')) || 0;

// Function to generate track list
function generateTrackList(count) {
const trackList = [];
for (let i = 1; i <= count; i++) {
  trackList.push(`music/all/track${i}.mp3`);
}
return trackList;
}

// Function to play the music
function playMusic(trackList) {
function setTrack() {
  audio.src = trackList[currentTrack];
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % trackList.length;
  setTrack();

  // Save the current track to localStorage
  localStorage.setItem(currentTrackKey, currentTrack);
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + trackList.length) % trackList.length;
  setTrack();

  // Save the current track to localStorage
  localStorage.setItem(currentTrackKey, currentTrack);
}

audio.addEventListener('ended', nextTrack);

return {
  nextTrack,
  prevTrack,
  setTrack,
};
}

// Generate track list for all music
const allTrackList = generateTrackList(54);

// Play music on page load
const musicPlayer = playMusic(allTrackList);
musicPlayer.setTrack();

// Function to switch music folder
function switchMusicFolder() {
const isDarkMode = body.classList.contains('dark-theme');
const newTrackList = isDarkMode ? darkTrackList : lightTrackList;

// Swap the track list in the musicPlayer object
Object.assign(musicPlayer, playMusic(newTrackList));

// Update the current track key based on the theme
currentTrackKey = isDarkMode ? 'currentDarkTrack' : 'currentLightTrack';

 // Update the current track based on the localStorage value
currentTrack = parseInt(localStorage.getItem('currentTrack')) || 0;

// Set the new track and play it
musicPlayer.setTrack();
audio.play();
}

// Add event listener to switch music folder button
const switchMusicFolderButton = document.getElementById('switch-music-folder');
switchMusicFolderButton.addEventListener('click', switchMusicFolder);

// Add skip song functionality
function skipSong() {
musicPlayer.nextTrack();
}

// Add go back a song functionality
function goBackSong() {
musicPlayer.prevTrack();
}

// Keyboard event listener to skip/go back a song
document.addEventListener('keydown', function (e) {
// You can change the key codes to different keys if you want
if (e.code === 'ArrowRight') {
  skipSong();
} else if (e.code === 'ArrowLeft') {
  goBackSong();
}
});

// Save the current playback time to localStorage
audio.addEventListener('timeupdate', function () {
localStorage.setItem('currentTime', audio.currentTime);
});

// Fade in/out and toggle music functionality

let isMusicPlaying = true;
let fadeDuration = 300;

function fadeOutAudio() {
let startVolume = audio.volume;
let startTime = new Date().getTime();

function decreaseVolume() {
  let currentTime = new Date().getTime();
  let timePassed = currentTime - startTime;
  let newVolume = startVolume - (timePassed / fadeDuration) * startVolume;

  if (newVolume <= 0) {
    audio.pause();
    audio.volume = 0;
  } else {
    audio.volume = newVolume;
    requestAnimationFrame(decreaseVolume);
  }
}
decreaseVolume();
}

function fadeInAudio() {
audio.play();
let startVolume = 0;
let startTime = new Date().getTime();

function increaseVolume() {
  let currentTime = new Date().getTime();
  let timePassed = currentTime - startTime;
  let newVolume = startVolume + (timePassed / fadeDuration) * (1 - startVolume);

  if (newVolume >= 1) {
    audio.volume = 1;
  } else {
    audio.volume = newVolume;
    requestAnimationFrame(increaseVolume);
  }
}
increaseVolume();
}

// Function to toggle music playback and update the music image
function toggleMusic() {
const isDarkMode = body.classList.contains('dark-theme');
if (isMusicPlaying) {
  fadeOutAudio();
  musicImage.src = isDarkMode ? 'images/music-off-night.png' : 'images/music-off.png';
} else {
  fadeInAudio();
  setMusicImage(isDarkMode);
}
isMusicPlaying = !isMusicPlaying;
}

// Toggle music playback when the music image is clicked
musicImage.addEventListener('click', toggleMusic);

// Function to play the audio after user interaction
function playAfterInteraction() {
window.removeEventListener('keydown', playAfterInteraction);
window.removeEventListener('click', playAfterInteraction);
audio.play();
}

window.addEventListener('keydown', playAfterInteraction);
window.addEventListener('click', playAfterInteraction);

/* <div id="music-toggle-div">
          <img id="music-image" src="images/music.png" alt="music" width="30">
        </div>

*/

/* #music-image {
  cursor: pointer;
  transition: 1.0s;
  margin-top: 20px;
}
*/