const apikey = "";
const apiUrl = "";

const searchBox = document.querySelector (".search input");
const searchBtn = document.querySelector (".search button");
const WeatherIcon = document.querySelector (".Weather-Icon");

async function checkWeather (city) {
    const response = await fetch (apiURL + city + `&appid=${apikey}`);

    If(response.status == 404){
        document.querySelector (".error").style.display = "block";
        document.querySelector (".weather").style.display = "none";
    }else{
        var data = await response.json ();
        
        document.querySelector (".city").innerHTML = data.name;
        document.querySelector (".temp").innerHTML = Math.round (data.main.temp)  + "°C";
        document.querySelector (".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector (".wind").innerHTML = data.wind.speed + " km/h";
    }
        if (data.weather [0].main == "Clouds") {
            Weather-Icon.src; "../../Images/weather-app-img/clouds.png";
        }
    
    else if (data.weather [0].main == "Clear") {
    Weather-Icon.src; "../../Images/weather-app-img/clear.png";
    }
    else if (data.weather [0].main == "Rain") {
    Weather-Icon.src; "../../Images/weather-app-img/rain.png";
    }
    else if (data.weather [0].main == "Drizzle") {
    Weather-Icon.src; "../../Images/weather-app-img/drizzle.png";
    }
    else if (data.weather [0].main == "Mist") {
    Weather-Icon.src; "../../Images/weather-app-img/mist.png";
    }

    document.querySelector (".weather").style.display = "block";
    document.querySelector (".error").style.display = "none";
}

searchBtn.addEventListener ("click", () => {
checkWeather (searchBox.value);
})