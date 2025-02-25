document.addEventListener('DOMContentLoaded', function() {
  const apiKey = 'PnSg6CNTOrdvT0DhpsUtpTvOW1kb6Fd3U6k7MdFB'; // Replace with your actual API key
  const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Display APOD content
      const apodContainer = document.getElementById('apod-container');
      const apodContent = `
        <h2>${data.title}</h2>
        <img src="${data.url}" alt="${data.title}" style="max-width: 100%;">
        <p>${data.explanation}</p>
      `;
      apodContainer.innerHTML = apodContent;
    })
    .catch(error => {
      console.error('Error fetching APOD:', error);
      const apodContainer = document.getElementById('apod-container');
      apodContainer.innerHTML = '<p>Error fetching Astronomy Picture of the Day. Please try again later.</p>';
    });
});
