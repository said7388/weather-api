function getWeather(){
    const city = document.getElementById('city-input').value;
    document.getElementById('city-input').value = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=90c095c444dbcd9360d655e9737e6591`)
    .then(ress => ress.json())
    .then(data => updateWeather(data))
}

function updateWeather(data) {
    const cityName = document.getElementById('city-name');
    const tempField = document.getElementById('temp-field');
    const weatherStatus = document.getElementById('weather-status');
    if (data.cod == 404){
        cityName.classList.add('text-danger');
        cityName.innerText = `The city not pound`;
        tempField.innerText = '';
        weatherStatus.innerText ='';
        return;
    }
    cityName.classList.replace('text-danger', 'text-white');
    cityName.innerText = data.name;
    const temperature = Math.round(data.main.temp - 273.15);
    tempField.innerHTML = `${temperature} &deg;C`;
    weatherStatus.innerText = data.weather[0].main ;
    const icon = data.weather[0].icon ;
    const imgSection = document.getElementById('img-sector');
    imgSection.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png">`
    console.log(data.weather[0].icon);
}