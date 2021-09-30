const fst_h = document.querySelector(".fst_h");
const fst_y = document.querySelector(".fst_y");
const fst_r = document.querySelector(".fst_r");
const fst_n = document.querySelector(".fst_n");
const hbs_t = document.querySelector(".hbs_t");
const hbs_s = document.querySelector(".hbs_s");
const hbs_d = document.querySelector(".hbs_d");
const flag = document.querySelector(".flag");
const city_info_map = document.querySelector(".city_info_map");
const city_length_info = document.querySelector(".city_length_info");
const frominfo = document.querySelector(".frominfo");
const weathinfo = document.querySelector(".weathinfo");
const countrinfo = document.querySelector(".countrinfo");
const info_day = document.querySelector(".info_day");
const day124324q = document.querySelector(".day124324q");
const day124324w = document.querySelector(".day124324w");
const day124324e = document.querySelector(".day124324e");
const day124324r = document.querySelector(".day124324r");
const day124324t = document.querySelector(".day124324t");
const day124324y = document.querySelector(".day124324y");
const day124324u = document.querySelector(".day124324u");
const day242323q = document.querySelector(".day242323q");
const day242323w = document.querySelector(".day242323w");
const day242323e = document.querySelector(".day242323e");
const day242323r = document.querySelector(".day242323r");
const day242323t = document.querySelector(".day242323t");
const day242323y = document.querySelector(".day242323y");
const day242323u = document.querySelector(".day242323u");
const day312443q = document.querySelector(".day312443q");
const day312443w = document.querySelector(".day312443w");
const day312443e = document.querySelector(".day312443e");
const day312443r = document.querySelector(".day312443r");
const day312443t = document.querySelector(".day312443t");
const day312443y = document.querySelector(".day312443y");
const day312443u = document.querySelector(".day312443u");
const day4234q = document.querySelector(".day4234q");
const day4234w = document.querySelector(".day4234w");
const day4234e = document.querySelector(".day4234e");
const day4234r = document.querySelector(".day4234r");
const day4234t = document.querySelector(".day4234t");
const day4234y = document.querySelector(".day4234y");
const day4234u = document.querySelector(".day4234u");
const info_day_top = document.querySelector(".info_day_top");
const weather_info = document.querySelector(".weather_info");
const weather_info2 = document.querySelector(".weather_info2");
const weather_info3 = document.querySelector(".weather_info3");
const weather_info4 = document.querySelector(".weather_info4");
const weather_info5 = document.querySelector(".weather_info5");
const weather_info6 = document.querySelector(".weather_info6");
const weather_info7 = document.querySelector(".weather_info7");
// ======================================================================= // API kalitni tortib olsish  <--
const API_KEYSUZ = "316b9736dbcafba7127d93281fa85cc0";
getWeatherData()
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        let {
            latitude,
            longitude,
        } = success.coords;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily,minutely&units=metric&appid=${API_KEYSUZ}`).then(res => res.json()).then(data => {
            showWeatherData(data);
            console.log(data);
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
    day124324q.innerHTML = Math.floor(day.temp) 
    day124324w.innerHTML = Math.floor(day2.temp)
    day124324e.innerHTML = Math.floor(day3.temp)
    day124324r.innerHTML = Math.floor(day4.temp)
    day124324t.innerHTML = Math.floor(day5.temp)
    day124324y.innerHTML = Math.floor(day6.temp)
    day124324u.innerHTML = Math.floor(day7.temp)
    day242323q.innerHTML = day.humidity
    day242323w.innerHTML = day2.humidity
    day242323e.innerHTML = day3.humidity
    day242323r.innerHTML = day4.humidity
    day242323t.innerHTML = day5.humidity
    day242323y.innerHTML = day6.humidity
    day242323u.innerHTML = day7.humidity
    /* ====================================== */
    day312443q.innerHTML = day.wind_deg
    day312443w.innerHTML = day2.wind_deg
    day312443e.innerHTML = day3.wind_deg
    day312443r.innerHTML = day4.wind_deg
    day312443t.innerHTML = day5.wind_deg
    day312443y.innerHTML = day6.wind_deg
    day312443u.innerHTML = day7.wind_deg
    day4234q.innerHTML = day.pressure
    day4234w.innerHTML = day2.pressure
    day4234e.innerHTML = day3.pressure
    day4234r.innerHTML = day4.pressure
    day4234t.innerHTML = day5.pressure
    day4234y.innerHTML = day6.pressure
    day4234u.innerHTML = day7.pressure
    fst_h.innerHTML = humidity
    fst_y.innerHTML = pressure
    hbs_t.innerHTML = wind_speed
    hbs_s.innerHTML = wind_deg
    weather_info.innerHTML = `
    <img class="back" src = "https://openweathermap.org/img/wn/${setinfo1}@2x.png">`
    weather_info2.innerHTML = `
    <img class="back" src = "https://openweathermap.org/img/wn/${setinfo2}@2x.png">`
    weather_info3.innerHTML = `
    <img class="back" src = "https://openweathermap.org/img/wn/${setinfo3}@2x.png">`
    weather_info4.innerHTML = `
    <img class="back" src = "https://openweathermap.org/img/wn/${setinfo4}@2x.png">`
    weather_info5.innerHTML = `
    <img class="back" src = "https://openweathermap.org/img/wn/${setinfo5}@2x.png">`
    console.log(setinfo5);
    weather_info6.innerHTML = `
    <img class="back" src = "https://openweathermap.org/img/wn/${setinfo6}@2x.png">`
    weather_info7.innerHTML = `
    <img class="back" src = "https://openweathermap.org/img/wn/${setinfo7}@2x.png">`
    fst_n.innerHTML = `
    <img src = "https://openweathermap.org/img/wn/${setinfo}@2x.png">`
    if (setinfo == '01d') {
        info_day.innerHTML = 'Quyoshli kun'
    } else if (setinfo == '02d') {
        info_day.innerHTML = 'Bulut va Quyoshli kun'
    } else if (setinfo == '03d') {
        info_day.innerHTML = 'Bulutli kun'
    } else if (setinfo == '04d') {
        info_day.innerHTML = 'Qalin bulutli kun'
    } else {
        console.error('Iltimos parametrlarni ko`ring kun farmati topilmati :(');
        info_day.innerHTML = 'Iltimos parametrlarni ko`ring kun farmati topilmati :('
    }
    fst_r.innerHTML = Math.floor(temp)
    const infoline = weather[0].description
    if (infoline === 'clear sky') {
        city_length_info.innerHTML = 'Ochiq osmon'
    } else if (infoline === 'few clouds') {
        city_length_info.innerHTML = 'Bulutli kun'
    } else if (infoline === 'scattered clouds') {
        city_length_info.innerHTML = 'Tarqoq bulutlar'
    } else if (infoline === 'broken clouds') {
        city_length_info.innerHTML = 'Qalin bulutlar'
    } else if (infoline === 'overcast clouds') {
        city_length_info.innerHTML = 'Qalin bulutlar'
    } else {
        city_length_info.innerHTML = ' :( descriptionda kelgan ma`lumotni o`zgartiring'
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
    // let {
    //     png
    // } = datatimeuz.flag
    hbs_d.innerHTML = current_time
    city_info_map.innerHTML = datatimeuz.city
    // flag.innerHTML = `
    // <img class="figbig" src = "${png}">
    // `
    frominfo.innerHTML = datatimeuz.country
    countrinfo.innerHTML = datatimeuz.continent
    city_info_map.innerHTML = datatimeuz.city
} // ================================================================ // API kalitlari ochiq ,ma'lumotlar olindi // consule ...
