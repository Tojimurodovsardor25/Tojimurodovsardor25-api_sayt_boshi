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
// ======================================================================= // API kalitni tortib olsish  <--
const API_KEYSUZ = "316b9736dbcafba7127d93281fa85cc0";
getWeatherData()
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        let {
            latitude,
            longitude,
        } = success.coords;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEYSUZ}`).then(res => res.json()).then(data => {
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
    fst_h.innerHTML = humidity
    fst_y.innerHTML = pressure
    hbs_t.innerHTML = wind_speed
    hbs_s.innerHTML = wind_deg
    const setinfo = weather[0].icon
    fst_n.innerHTML = `
    <img src = "https://openweathermap.org/img/wn/${setinfo}@2x.png">`
    if(setinfo == '01d'){
        info_day.innerHTML = 'Quyoshli kun'
    }else if(setinfo == '02d'){
        info_day.innerHTML = 'Bulut va Quyoshli kun'
    }else if(setinfo == '03d'){
        info_day.innerHTML = 'Bulutli kun'
    }else if(setinfo == '04d'){
        info_day.innerHTML = 'Qalin bulutli kun'
    }else{
        console.error('Iltimos parametrlarni ko`ring kun farmati topilmati :(');
        info_day.innerHTML = 'Iltimos parametrlarni ko`ring kun farmati topilmati :('
    }
    fst_r.innerHTML = Math.floor(temp)
    const infoline = weather[0].description
    if (infoline === 'clear sky') {
        city_length_info.innerHTML = 'Ochiq osmon'
    } else {
        city_length_info.innerHTML = ' :( descriptionda kelgan ma`lumotni o`zgartiring'
    }
}
// fetch(`http://worldtimeapi.org/api/timezone/Asia/Tashkent`) // ================================== Qo'shimcha API malumotlari { }
//     .then((res) => res.json())
//     .then((datauz) => {
//         hbs_d.innerHTML = datauz.datetime
//     });
fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=bf6511faeaea415792321186cb641f35`)
    .then((res) => res.json())
    .then((apiabstractuz) => {
        city_info_map.innerHTML = apiabstractuz.city
    });
getlocations()
function getlocations() {
    fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=bf6511faeaea415792321186cb641f35')
        .then((res) => res.json())
        .then((datatimeuz) => {
            consleTimeData(datatimeuz)
        })
}
function consleTimeData(datatimeuz) {
    let {
        current_time
    } = datatimeuz.timezone
    let {
        png
    } = datatimeuz.flag
    hbs_d.innerHTML = current_time
    city_info_map.innerHTML = datatimeuz.city
    flag.innerHTML =`
    <img class="figbig" src = "${png}">
    `
    frominfo.innerHTML = datatimeuz.country
    countrinfo.innerHTML = datatimeuz.continent
} // ================================================================ // API kalitlari ochiq ,ma'lumotlar olindi // consule ...