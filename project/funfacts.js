// funfact.js
// Fetches a random quote from quotable.io and updates the fun fact element

document.addEventListener('DOMContentLoaded', () => {
  const funFactElement = document.getElementById('fun-fact');
  
  fetch('https://api.quotable.io/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      funFactElement.textContent = `"${data.content}" — ${data.author}`;
    })
    .catch(error => {
      console.error('Error fetching fun fact:', error);
      funFactElement.textContent = 'Unable to load fun fact.';
    });
});