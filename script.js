const SearchInput = document.getElementById("SearchBox")
const SubmitBtn = document.getElementById("SubmitBtn")

SubmitBtn.addEventListener("click",function(){
    GetWeather(SearchInput.value)
})

function GetWeather(text){
    console.log(SearchInput.value)
    console.log()
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+text+'&units=metric&appid=550be1c0a5be33a4d22270b7e1862be0')
    .then(response  => response.json())
    .then(data => {
        console.log(data)
        document.querySelector('#city-name h1').innerHTML=data['name']
        document.querySelector('#weather-desc h2').innerHTML=data['weather'][0].description
        document.querySelector('#temperature h3').innerHTML=data['main']['temp'] +'°C'
        document.querySelector('#wind-speed h4').innerHTML=data['wind']['speed'] + 'km/h'
        document.querySelector('#humidity h4').innerHTML=data['main']['humidity'] + '%'
    })

    .catch(err => alert("Wrong city name!"))
}

GetWeather('Romania')