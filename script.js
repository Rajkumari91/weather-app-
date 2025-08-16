async function getweather() {
    let city= document.getElementById("cityinput").value;
    if(!city){
        alert("please eanter a city name!");
        return;
    }
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
    let geoRes = await fetch (geoURL);
    let geoData = await geoRes.json();
    
    if (!geoData.results || geoData.result.length===0){
        alert("city not found!");
        return;
    }
    let lat=
    geoData.results[0].latitude;
    let lon =
    geoData.result[0].longitude;
        let cityName =
        geoData.results[0].name;
        let weatherURL =
        `https://api.open-meteo.com/v1/forcast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`;
        let weatherRes = await fetch(weatherURL);
        let weatherData = await weather Res.json();
        let temp = 
        weatherData.current.temperature_2m;
        let code = 
        weatherData,current.weather_code;
        let desc = code === 0 ? "clear sky" : code === 1 ? "mainly clear" : "cloudy";
        
        document.getElementById("cityName").textContent = cityName;
        
        document.getElementById("temp").textContent = temp + " °c";

        document.getElementById("desc").textContent = desc;
}