// Get the button element
const button = document.querySelector('.push');

// Get all the div elements within the section with id "items"
const divs = document.querySelectorAll('#items div');

// Hide all the divs initially
divs.forEach(div => {
  div.style.display = 'none';
});

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Generate a random index between 0 and the number of divs
  const randomIndex = Math.floor(Math.random() * divs.length);

  // Loop through all the divs
  for (let i = 0; i < divs.length; i++) {
    // If the current index matches the random index, display the div
    if (i === randomIndex) {
      divs[i].style.display = 'block';
    } else {
      // Otherwise, hide the div
      divs[i].style.display = 'none';
    }
  }
});

