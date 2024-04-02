const input = document.querySelector("#input-text")
const btn = document.querySelector("button")
const celcius = document.querySelector("#celcius")
const heading = document.querySelector("h2");
const hum = document.querySelector("#hum")
const air = document.querySelector("#air")
const pic=document.querySelector(".pic")
async function weather(city) {
    const API_KEY = "e0738db10be6671e3e1e622bd0f30dfa"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const data = await fetch(`${url}`).then(response => response.json());
   console.log(data)
   celcius.innerHTML=`${Math.round(data.main.temp-273.15)}°C`;
   heading.innerHTML=`${data.weather[0].description}`
   hum.innerHTML=`${data.main.humidity}`
   air.innerHTML=`${data.wind.speed}`
   pic.innerHTML=`<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">`
}
btn.addEventListener("click", function(){
    weather(input.value);
})
