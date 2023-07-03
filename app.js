const input = document.querySelector("#input-text")
const btn = document.querySelector("button")
const celcius = document.querySelector("#celcius")
const heading = document.querySelector("h2");
const hum = document.querySelector("#hum")
const air = document.querySelector("#air")

async function weather(city) {
    const api_key = "dd551dd3c95de517caeb65e5ede12b0a"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const data = await fetch(`${url}`).then(response => response.json());
   console.log(data)
}















btn.addEventListener("click", () => {
    weather(input.value);
})

