let apiKey="98de9dafa8955a36942cabb5b15c3c5a";
let units = "metric";
let cities = ['berlin', 'bali', 'kyiv'];
function showTemperature(location) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then((response) => {
        let id;
        switch (location) {
            case 'kyiv':
                id = 'temperatureKyiv';
                break;
            case 'bali':
                id = 'temperatureBali';
                break;
            case 'berlin':
                id = 'temperatureBerlin';
                break;
            default:
                    id = 'temperature';
                break;

        }
        let temperature = Math.round(response.data.main.temp);
        let city= response.data.name;
        let message= `It is </br> ${temperature}°C in ${city}`;
        let h3 =document.getElementById(id);
        h3.innerHTML = message;

    });
} 
cities.forEach((c) => showTemperature(c));


var a = document.getElementById('form');
a.addEventListener('submit', (e) => {
    e.preventDefault();
    showTemperature(document.getElementById('city').value);
});