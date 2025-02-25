document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'gTSjfUcAtN6AOAeEFM0SCqNgZhkqV0onBuaHThOv'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`; // Adjust count as needed
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const galleryContainer = document.getElementById('gallery-container');
        data.forEach(item => {
          const galleryItem = document.createElement('div');
          galleryItem.classList.add('gallery-item');
  
          if (item.media_type === 'image') {
            galleryItem.innerHTML = `<img src="${item.url}" alt="${item.title}">`;
          } else if (item.media_type === 'video') {
            galleryItem.innerHTML = `<video controls><source src="${item.url}" type="video/mp4"></video>`;
          }
  
          galleryContainer.appendChild(galleryItem);
        });
      })
      .catch(error => {
        console.error('Error fetching data from the APOD API:', error);
        const galleryContainer = document.getElementById('gallery-container');
        galleryContainer.innerHTML = '<p>Error fetching data from the APOD API. Please try again later.</p>';
      });
  });
  