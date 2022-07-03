permissions-policy: interest-cohort=();
function getWeatherData() {
    let city = document.querySelector('#city').value;
    let temp = document.getElementById('temp');
    let cond = document.getElementById('cond');
    let min = document.getElementById('min');
    let max = document.getElementById('max');
    let prec = document.getElementById('prec');
    let humi = document.getElementById('humi');
    let wind = document.getElementById('wind');
    let visi = document.getElementById('visi');
    let image = document.getElementById('image');
    let cityname = document.getElementById('cityname');
    let countryname = document.getElementById('countryname');
    let regionname = document.getElementById('regionname');


    axios.get('http://api.weatherapi.com/v1/forecast.json?key=d334715e82a4490c903112428220107&q=' + city)
        .then(function (response) {

            const max_temp_c = response.data.forecast.forecastday[0].day.maxtemp_c;
            const max_temp_f = response.data.forecast.forecastday[0].day.maxtemp_f;
            const min_temp_c = response.data.forecast.forecastday[0].day.mintemp_c;
            const min_temp_f = response.data.forecast.forecastday[0].day.mintemp_f;

            const name = response.data.location.name;
            const country = response.data.location.country;
            const humidity = response.data.current.humidity;
            const temp_c = response.data.current.temp_c;
            const temp_f = response.data.current.temp_f;
            const vis_km = response.data.current.vis_km;
            const wind_kph = response.data.current.wind_kph;
            const precepetaion = response.data.forecast.forecastday[0].day.totalprecip_mm;
            const text = response.data.current.condition.text;
            const icon = response.data.forecast.forecastday[0].day.condition.icon;
            image.src = `https:${icon}`;
            // image.src = icon;
            
            cityname.innerHTML = name ;
            countryname.innerHTML = country ;
            cond.innerHTML = text;
            temp.innerHTML = temp_c + '&deg;C' + " <br>" + temp_f + '&deg;F';
            humi.innerHTML = "Humidity : " + humidity + "%";
            wind.innerHTML = "Wind : " + wind_kph + "km/h";
            visi.innerHTML = "Visibility : " + vis_km + "km";
            prec.innerHTML = "Precepitation : " + precepetaion + "mm";
            max.innerHTML = "Max Temp : " + max_temp_c + "&deg;C" + " " + max_temp_f + "&deg;F";
            min.innerHTML = "Min Temp : " + min_temp_c + "&deg;C" + " " + min_temp_f + "&deg;F";
            console.log(response.data);
        })
}
// let icon = data.current.condition.icon;
// key
//    <!-- d334715e82a4490c903112428220107 -->
