/* dropdown menu */
const dropdownContent = document.getElementById('dropdown');
const profilePhoto = document.getElementById('profile-photo');
const dropdownItems = document.getElementById('dropdown-items');

profilePhoto.addEventListener('click', () => {
  dropdownItems.style.display = dropdownItems.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if the user clicks outside of it
window.onclick = (event) => {
  if (!event.target.matches('#profile-photo')) {
    dropdownItems.style.display = 'none';
  }
};