let apiKey = "cf5b2a9f1a6489cd34b715ce628f6deb";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function weatherCheck(city){
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else{
        let data = await response.json();

    let cityName = document.querySelector(".city");
    let temperature = document.querySelector(".temp");
    let humidity = document.querySelector(".humidity");
    let windSpeed = document.querySelector(".wind")


    cityName.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + " Km/H";


   if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "Assets/cloud.png"
   }
   else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "Assets/Sunny.png"
   }
   else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "Assets/rain.png"
   }
   else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "Assets/Drizzle.png"
   }
   else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "Assets/mist.png"
   }

   document.querySelector(".weather").style.display = "block"
   document.querySelector(".error").style.display = "none"
}
    
}
searchBtn.addEventListener("click" , ()=>{
    weatherCheck(searchBox.value)
})
