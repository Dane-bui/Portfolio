async function getWeather() {

    const city = document.getElementById("cityInput").value;
    const apiKey = "dc4ebb728d48fd21f31108c79f11bcb9";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById("weatherResult").innerHTML =
                "City not found";
            return;
        }

        const temp = data.main.temp;
        const desc = data.weather[0].description;
        const humidity = data.main.humidity;

        document.getElementById("weatherResult").innerHTML = `
            <p><strong>${data.name}</strong></p>
            <p>Temperature: ${temp}°C</p>
            <p>Condition: ${desc}</p>
            <p>Humidity: ${humidity}%</p>
        `;

    } catch (error) {
        document.getElementById("weatherResult").innerHTML =
            "Error getting weather data";
    }
}