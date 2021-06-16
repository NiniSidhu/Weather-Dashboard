var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var cityName = document.querySelector('.cityName');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var uv = document.querySelector('.uv');

button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=2fad36d0135aa7aa52c86dec12de0e72')
    .then(response => response.json())
    .then(data => {
        var cityNameValue = data['name'];
        var tempValue = data['main']['temp'];
        var windValue = data['wind']['speed'];
        var humidityValue = data['main']['humidity'];

        cityName.innerHTML = cityNameValue;
        temp.innerHTML = tempValue;
        wind.innerHTML = windValue;
        humidity.innerHTML = humidityValue; 
    
    })


});

