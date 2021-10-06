// ======================================================================= // API kalitni tortib olsish  <--
const API_KEYSUZ = "316b9736dbcafba7127d93281fa85cc0";
getWeatherData()
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((joylashuv) => {
        let {
            latitude, // Joylashuv nuqtasi (kenglik bilan) 
            longitude, // Joylashuv nuqtasi (uzunlik bilan)
        } = joylashuv.coords;
        // Fetch API so'rov va javonlar bilan ishlash uchun eng sodda javascript interfeysi
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily,minutely&units=metric&appid=${API_KEYSUZ}`).then(res => res.json()).then(data => {
            showWeatherData(data);
        })
    })
}

function showWeatherData(data) { //==================================== APIda kelgan ma'lumotlar ombori { }...
    let {
        humidity,
        pressure,
        sunrise,
        sunset,
        wind_speed,
        wind_deg,
        temp,
        weather,
    } = data.current;
    const day = data.hourly[1]
    const day2 = data.hourly[2]
    const day3 = data.hourly[3]
    const day4 = data.hourly[4]
    const day5 = data.hourly[5]
    const day6 = data.hourly[6]
    const day7 = data.hourly[7]
    const setinfo = weather[0].icon
    const setinfo1 = data.hourly[1].weather[0].icon
    const setinfo2 = data.hourly[2].weather[0].icon
    const setinfo3 = data.hourly[3].weather[0].icon
    const setinfo4 = data.hourly[4].weather[0].icon
    const setinfo5 = data.hourly[5].weather[0].icon
    const setinfo6 = data.hourly[6].weather[0].icon
    const setinfo7 = data.hourly[7].weather[0].icon
    document.querySelector(".day124324q").innerHTML = Math.floor(day.temp)
    document.querySelector(".day124324w").innerHTML = Math.floor(day2.temp)
    document.querySelector(".day124324e").innerHTML = Math.floor(day3.temp)
    document.querySelector(".day124324r").innerHTML = Math.floor(day4.temp)
    document.querySelector(".day124324t").innerHTML = Math.floor(day5.temp)
    document.querySelector(".day124324y").innerHTML = Math.floor(day6.temp)
    document.querySelector(".day124324u").innerHTML = Math.floor(day7.temp)
    document.querySelector(".day242323q").innerHTML = day.humidity
    document.querySelector(".day242323w").innerHTML = day2.humidity
    document.querySelector(".day242323e").innerHTML = day3.humidity
    document.querySelector(".day242323r").innerHTML = day4.humidity
    document.querySelector(".day242323t").innerHTML = day5.humidity
    document.querySelector(".day242323y").innerHTML = day6.humidity
    document.querySelector(".day242323u").innerHTML = day7.humidity
    /* ====================================== */
    document.querySelector(".day312443q").innerHTML = day.wind_speed
    document.querySelector(".day312443w").innerHTML = day2.wind_speed
    document.querySelector(".day312443e").innerHTML = day3.wind_speed
    document.querySelector(".day312443r").innerHTML = day4.wind_speed
    document.querySelector(".day312443t").innerHTML = day5.wind_speed
    document.querySelector(".day312443y").innerHTML = day6.wind_speed
    document.querySelector(".day312443u").innerHTML = day7.wind_speed
    document.querySelector(".day4234q").innerHTML = day.pressure
    document.querySelector(".day4234w").innerHTML = day2.pressure
    document.querySelector(".day4234e").innerHTML = day3.pressure
    document.querySelector(".day4234r").innerHTML = day4.pressure
    document.querySelector(".day4234t").innerHTML = day5.pressure
    document.querySelector(".day4234y").innerHTML = day6.pressure
    document.querySelector(".day4234u").innerHTML = day7.pressure
    document.querySelector(".fst_h").innerHTML = humidity
    document.querySelector(".fst_y").innerHTML = pressure
    document.querySelector(".hbs_t").innerHTML = wind_speed
    document.querySelector(".hbs_s").innerHTML = wind_deg
    document.querySelector(".weather_info").innerHTML = `
    <img class="back" src = "https://openweathermap.org/img/wn/${setinfo1}@2x.png">`
    document.querySelector(".weather_info2").innerHTML = `
    <img class="back" src = "https://openweathermap.org/img/wn/${setinfo2}@2x.png">`
    document.querySelector(".weather_info3").innerHTML = `
    <img class="back" src = "https://openweathermap.org/img/wn/${setinfo3}@2x.png">`
    document.querySelector(".weather_info4").innerHTML = `
    <img class="back" src = "https://openweathermap.org/img/wn/${setinfo4}@2x.png">`
    document.querySelector(".weather_info5").innerHTML = `
    <img class="back" src = "https://openweathermap.org/img/wn/${setinfo5}@2x.png">`
    document.querySelector(".weather_info6").innerHTML = `
    <img class="back" src = "https://openweathermap.org/img/wn/${setinfo6}@2x.png">`
    document.querySelector(".weather_info7").innerHTML = `
    <img class="back" src = "https://openweathermap.org/img/wn/${setinfo7}@2x.png">`
    document.querySelector(".fst_n").innerHTML = `
    <img src = "https://openweathermap.org/img/wn/${setinfo}@2x.png">`
    if (setinfo == '01d') {
        document.querySelector(".info_day").innerHTML = 'Quyoshli kun'
    } else if (setinfo == '02d') {
        document.querySelector(".info_day").innerHTML = 'Bulut va Quyoshli kun'
    } else if (setinfo == '03d') {
        document.querySelector(".info_day").innerHTML = 'Bulutli kun'
    } else if (setinfo == '04d') {
        document.querySelector(".info_day").innerHTML = 'Qalin bulutli kun'
    } else if (setinfo == '10d') {
        document.querySelector(".info_day").innerHTML = 'Bulut va Quyoshli yomg`ir'
    } else {
        console.error('Iltimos parametrlarni ko`ring kun farmati topilmati :(');
        document.querySelector(".info_day").innerHTML = 'Iltimos parametrlarni ko`ring kun farmati topilmati :('
        console.log(setinfo);
    }
    document.querySelector(".fst_r").innerHTML = Math.floor(temp)
    const infoline = weather[0].description
    if (infoline === 'clear sky') {
        document.querySelector(".city_length_info").innerHTML = 'Ochiq osmon'
    } else if (infoline === 'few clouds') {
        document.querySelector(".city_length_info").innerHTML = 'Bulutli kun'
    } else if (infoline === 'scattered clouds') {
        document.querySelector(".city_length_info").innerHTML = 'Tarqoq bulutlar'
    } else if (infoline === 'broken clouds') {
        document.querySelector(".city_length_info").innerHTML = 'Qalin bulutlar'
    } else if (infoline === 'overcast clouds') {
        document.querySelector(".city_length_info").innerHTML = 'Qalin bulutlar'
    } else if (infoline === 'moderate rain') {
        document.querySelector(".city_length_info").innerHTML = 'O`rtacha yomg`ir'
    } else {
        document.querySelector(".city_length_info").innerHTML = ' :( descriptionda kelgan ma`lumotni o`zgartiring'
        console.log(infoline);
    }
}
// fetch(`http://worldtimeapi.org/api/timezone/Asia/Tashkent`) // ================================== Qo'shimcha API malumotlari { }
//     .then((res) => res.json())
//     .then((datauz) => {
//         hbs_d.innerHTML = datauz.datetime
//     });
function getlocations() {
    fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=bf6511faeaea415792321186cb641f35')
        .then((res) => res.json())
        .then((datatimeuz) => {
            consleTimeData(datatimeuz)
        })
}
getlocations()
function consleTimeData(datatimeuz) {
    let {
        current_time
    } = datatimeuz.timezone
    document.querySelector(".hbs_d").innerHTML = current_time
    document.querySelector(".city_info_map").innerHTML = datatimeuz.city
    document.querySelector(".frominfo").innerHTML = datatimeuz.country
    document.querySelector(".countrinfo").innerHTML = datatimeuz.continent
    document.querySelector(".city_info_map").innerHTML = datatimeuz.city
} // ================================================================ // API kalitlari ochiq ,ma'lumotlar olindi // consule ...
