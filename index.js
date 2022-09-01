// let cityNames;
// (function () {
//     cityNames = localStorage.getItem('cities');

// })();

// console.log(cityNames);
// localStorage.setItem('cities', city )

function getWeatherData() {
    let city = document.querySelector('#city').value;

    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=9262891c7892487bb23194128220109&q=${city}&days=14`)
        .then(function (response) {
            city.value = "";
            let mainDiv = window.document.childNodes[1].childNodes[2].childNodes[1];
            console.log(response.data);

            removeItems(mainDiv);
            forCurrentWeather(response, mainDiv);
            forHourWeather(response, mainDiv);
            forDaysWeather(response, mainDiv);
            // forNextDaysWeather(response, mainDiv);
        });

}

// function forNextDaysWeather(response, mainDiv) {

//     let newELem3 = document.createElement('ul')
//     newELem3.setAttribute('class', 'newELem3')
//     for (let i = 0; i < 24; i++) {
//         let foreCastli = document.createElement('li');
//         foreCastli.setAttribute('class', 'forNextDayHour');


//         newELem3.appendChild(foreCastDiv4);
//         mainDiv.childNodes[7].appendChild(newELem3)
//     }
//     mainDiv.appendChild(newELem3);

// }
function removeItems(mainDiv) {
    if (mainDiv.childNodes[5]) {
        let div5 = mainDiv.childNodes[5]
        let div6 = mainDiv.childNodes[6]
        let div7 = mainDiv.childNodes[7]
        mainDiv.removeChild(div5);
        mainDiv.removeChild(div6);
        mainDiv.removeChild(div7);
    }
}

function forCurrentWeather(response, mainDiv) {
    let newELem = document.createElement('section')
    newELem.setAttribute('class', 'section')

    let newELemDiv1 = document.createElement('div')
    newELemDiv1.setAttribute('class', 'newELemDiv1')
    let newELemDiv2 = document.createElement('div')
    newELemDiv2.setAttribute('class', 'newELemDiv2')

    let temp_cInDiv1 = document.createElement('h3')
    temp_cInDiv1.setAttribute('class', 'temp_cInDiv1')
    let texttemp_cInDiv1 = document.createTextNode(`${response.data.current.temp_c}C`)
    temp_cInDiv1.appendChild(texttemp_cInDiv1)
    let temp_fInDiv1 = document.createElement('h3')
    temp_fInDiv1.setAttribute('class', 'temp_fInDiv1')
    let texttemp_fInDiv1 = document.createTextNode(`${response.data.current.temp_f}F`)
    temp_fInDiv1.appendChild(texttemp_fInDiv1)
    let cityInDiv1 = document.createElement('p')
    cityInDiv1.setAttribute('class', 'cityInDiv1')
    let textcityInDiv1 = document.createTextNode(`${response.data.location.name},`)
    cityInDiv1.appendChild(textcityInDiv1)
    let countryInDiv1 = document.createElement('p')
    countryInDiv1.setAttribute('class', 'countryInDiv1')
    let textcountryInDiv1 = document.createTextNode(`${response.data.location.country}`)
    countryInDiv1.appendChild(textcountryInDiv1)

    let cityCountryInDiv1 = document.createElement('div')
    cityCountryInDiv1.setAttribute('class', 'cityCountryInDiv1')
    cityCountryInDiv1.appendChild(cityInDiv1)
    cityCountryInDiv1.appendChild(countryInDiv1)

    let minTempInDiv1 = document.createElement('p')
    minTempInDiv1.setAttribute('class', 'minTempInDiv1')
    let textminTempInDiv1 = document.createTextNode(`mintemp :${response.data.forecast.forecastday[0].day.mintemp_c}C`)
    minTempInDiv1.appendChild(textminTempInDiv1)
    let maxTempInDiv1 = document.createElement('p')
    maxTempInDiv1.setAttribute('class', 'maxTempInDiv1')
    let textmaxTempInDiv1 = document.createTextNode(`maxtemp :${response.data.forecast.forecastday[0].day.maxtemp_c}C`)
    maxTempInDiv1.appendChild(textmaxTempInDiv1)
    let precepitaionInDiv1 = document.createElement('p')
    precepitaionInDiv1.setAttribute('class', 'precepitaionInDiv1')
    let textprecepitaionInDiv1 = document.createTextNode(`precepitaion :${response.data.current.precip_mm}mm`)
    precepitaionInDiv1.appendChild(textprecepitaionInDiv1)

    let imgInDiv1 = document.createElement('img')
    imgInDiv1.setAttribute('src', `https:${response.data.current.condition.icon}`)
    let weatherNameInDiv1 = document.createElement('p')
    weatherNameInDiv1.setAttribute('class', 'weatherNameInDiv1')
    let textweatherNameInDiv1 = document.createTextNode(`${response.data.current.condition.text}`)
    weatherNameInDiv1.appendChild(textweatherNameInDiv1)
    let humdityInDiv1 = document.createElement('p')
    humdityInDiv1.setAttribute('class', 'humdityInDiv1')
    let texthumdityInDiv1 = document.createTextNode(`humdity :${response.data.current.humidity}%`)
    humdityInDiv1.appendChild(texthumdityInDiv1)
    let windInDiv1 = document.createElement('p')
    windInDiv1.setAttribute('class', 'windInDiv1')
    let textwindInDiv1 = document.createTextNode(`wind :${response.data.current.wind_mph}mph`)
    windInDiv1.appendChild(textwindInDiv1)
    let visiblityInDiv1 = document.createElement('p')
    visiblityInDiv1.setAttribute('class', 'visiblityInDiv1')
    let textvisiblityInDiv1 = document.createTextNode(`visiblity :${response.data.current.vis_miles}mi`)
    visiblityInDiv1.appendChild(textvisiblityInDiv1)

    newELemDiv1.appendChild(temp_cInDiv1)
    newELemDiv1.appendChild(temp_fInDiv1)
    newELemDiv1.appendChild(cityCountryInDiv1)
    newELemDiv1.appendChild(minTempInDiv1)
    newELemDiv1.appendChild(maxTempInDiv1)
    newELemDiv1.appendChild(precepitaionInDiv1)

    newELemDiv2.appendChild(imgInDiv1)
    newELemDiv2.appendChild(weatherNameInDiv1)
    newELemDiv2.appendChild(humdityInDiv1)
    newELemDiv2.appendChild(windInDiv1)
    newELemDiv2.appendChild(visiblityInDiv1)

    newELem.appendChild(newELemDiv1)
    newELem.appendChild(newELemDiv2)

    mainDiv.appendChild(newELem)

}

function forHourWeather(response, mainDiv) {
    let newELem1 = document.createElement('slide');
    newELem1.setAttribute('id', 'slider');
    for (let i = 0; i < 24; i++) {
        let foreCastDiv = document.createElement('div');
        foreCastDiv.setAttribute('class', 'forHour');
        let timeForCast = document.createElement('h2');
        timeForCast.setAttribute('class', 'h2Slider')
        let texttimeForCast = document.createTextNode(`${response.data.forecast.forecastday[0].hour[i].time}`);
        texttimeForCast = texttimeForCast.splitText(11, 0);
        let tempForCast = document.createElement('h3');
        tempForCast.setAttribute('class', 'h3Slider')
        let texttempForCast = document.createTextNode(`${response.data.forecast.forecastday[0].hour[i].temp_c} C`);
        let imgForCast = document.createElement('img');
        imgForCast.setAttribute('class', 'imgSlider')
        imgForCast.setAttribute('src', `https:${response.data.forecast.forecastday[0].hour[i].condition.icon}`);
        let nameForCast = document.createElement('p');
        nameForCast.setAttribute('class', 'pSlider')
        let textnameForCast = document.createTextNode(`${response.data.forecast.forecastday[0].hour[i].condition.text}`);

        timeForCast.appendChild(texttimeForCast);
        tempForCast.appendChild(texttempForCast);
        nameForCast.appendChild(textnameForCast);

        foreCastDiv.appendChild(timeForCast);
        foreCastDiv.appendChild(tempForCast);
        foreCastDiv.appendChild(imgForCast);
        foreCastDiv.appendChild(nameForCast);

        newELem1.appendChild(foreCastDiv);
    }
    mainDiv.appendChild(newELem1);


}

function forDaysWeather(response, mainDiv) {
    let newELem2 = document.createElement('ul');
    newELem2.setAttribute('id', 'list');

    for (let i = 0; i < response.data.forecast.forecastday.length; i++) {
        let foreCastlist = document.createElement('li');
        foreCastlist.setAttribute('class', 'ForDays');



        let foreCastlistDiv1 = document.createElement('div');
        foreCastlistDiv1.setAttribute('class', 'ForDaysDiv1')
        let foreCastlistDiv2 = document.createElement('div');
        foreCastlistDiv2.setAttribute('class', 'ForDaysDiv2')
        let foreCastlistDiv3 = document.createElement('div');
        foreCastlistDiv3.setAttribute('class', 'ForDaysDiv3');

        let tempInDiv1 = document.createElement('h2')
        tempInDiv1.setAttribute('class', 'tempInDiv1');
        let texttempInDiv1 = document.createTextNode(`${response.data.forecast.forecastday[i].day.avgtemp_c} C`)
        tempInDiv1.appendChild(texttempInDiv1)
        let nameInDiv1 = document.createElement('p')
        nameInDiv1.setAttribute('class', 'nameInDiv1');
        let textnameInDiv1 = document.createTextNode(`${response.data.forecast.forecastday[i].day.condition.text}`)
        nameInDiv1.appendChild(textnameInDiv1)
        let placeInDiv1 = document.createElement('p')
        placeInDiv1.setAttribute('class', 'nameInDiv1');
        let textplaceInDiv1 = document.createTextNode(`${response.data.location.name}`)
        placeInDiv1.appendChild(textplaceInDiv1)

        let imgInDiv2 = document.createElement('img')
        imgInDiv2.setAttribute('src', `https:${response.data.forecast.forecastday[i].day.condition.icon}`);
        imgInDiv2.setAttribute('class', 'imgInDiv2');

        let humidityInDiv3 = document.createElement('h4')
        humidityInDiv3.setAttribute('class', "humidityInDiv3")
        let texthumidityInDiv3 = document.createTextNode(`humidity :${response.data.forecast.forecastday[i].day.avghumidity}%`)
        humidityInDiv3.appendChild(texthumidityInDiv3)
        let dateInDiv3 = document.createElement('h2')
        dateInDiv3.setAttribute('class', 'dateInDiv3')
        let textdateInDiv3 = document.createTextNode(`${response.data.forecast.forecastday[i].date}`)
        dateInDiv3.appendChild(textdateInDiv3)

        foreCastlistDiv1.appendChild(tempInDiv1)
        foreCastlistDiv1.appendChild(nameInDiv1)
        foreCastlistDiv1.appendChild(placeInDiv1)
        foreCastlistDiv2.appendChild(imgInDiv2)
        foreCastlistDiv3.appendChild(humidityInDiv3)
        foreCastlistDiv3.appendChild(dateInDiv3)
        let mainForCastDiv = document.createElement('div')
        mainForCastDiv.setAttribute('class', 'mainForCastDiv')
        mainForCastDiv.appendChild(foreCastlistDiv1)
        mainForCastDiv.appendChild(foreCastlistDiv2)
        mainForCastDiv.appendChild(foreCastlistDiv3)

        let foreCastDiv4 = document.createElement('div');
        foreCastDiv4.setAttribute('class', 'forNextDayHour');

        foreCastlist.appendChild(mainForCastDiv)

        for (let i = 0; i < 24; i++) {
            let mainForCastDiv_Hour = document.createElement('div')
            mainForCastDiv_Hour.setAttribute('class', 'mainForCastDiv_Hour')
            let timeForCast = document.createElement('p');
            timeForCast.setAttribute('class', 'pList')
            let texttimeForCast = document.createTextNode(`${response.data.forecast.forecastday[0].hour[i].time}`);
            texttimeForCast = texttimeForCast.splitText(11, 0);
            let tempForCast = document.createElement('p');
            tempForCast.setAttribute('class', 'pList')
            let texttempForCast = document.createTextNode(`${response.data.forecast.forecastday[0].hour[i].temp_c} C`);
            let imgForCast = document.createElement('img');
            imgForCast.setAttribute('class', 'imgList')
            imgForCast.setAttribute('src', `https:${response.data.forecast.forecastday[0].hour[i].condition.icon}`);
            let nameForCast = document.createElement('p');
            nameForCast.setAttribute('class', 'pList')
            let textnameForCast = document.createTextNode(`${response.data.forecast.forecastday[0].hour[i].condition.text}`);

            timeForCast.appendChild(texttimeForCast);
            tempForCast.appendChild(texttempForCast);
            nameForCast.appendChild(textnameForCast);
            
            mainForCastDiv_Hour.appendChild(timeForCast);
            mainForCastDiv_Hour.appendChild(tempForCast);
            mainForCastDiv_Hour.appendChild(imgForCast);
            mainForCastDiv_Hour.appendChild(nameForCast);

            foreCastDiv4.appendChild(mainForCastDiv_Hour)
        }
        foreCastlist.appendChild(foreCastDiv4)
        newELem2.appendChild(foreCastlist);

    }
    mainDiv.appendChild(newELem2)
}
