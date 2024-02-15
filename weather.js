function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    if (cityName.trim() === '') {
        alert('Please enter a city name');
        return;
    }

    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherInfoHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature} K</p>
        <p>Description: ${description}</p>
    `;

    weatherInfoDiv.innerHTML = weatherInfoHTML;
}
