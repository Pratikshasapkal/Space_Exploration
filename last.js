document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'gTSjfUcAtN6AOAeEFM0SCqNgZhkqV0onBuaHThOv'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = 'https://eonet.gsfc.nasa.gov/api/v2.1/events?source=InciWeb,EO' + apiKey;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const eventsContainer = document.getElementById('events-container');
        data.events.forEach(event => {
          const eventItem = document.createElement('div');
          eventItem.classList.add('event-item');
          eventItem.innerHTML = `
            <h2>${event.title}</h2>
            <p>${event.description}</p>
            <p>Category: ${event.categories[0].title}</p>
            <!-- Add more lines as needed based on the data structure -->
          `;
          eventsContainer.appendChild(eventItem);
        });
      })
      .catch(error => {
        console.error('Error fetching data from the EONET API:', error);
        const eventsContainer = document.getElementById('events-container');
        eventsContainer.innerHTML = '<p>Error fetching data from the EONET API. Please try again later.</p>';
      });
  });
  