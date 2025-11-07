const apikey = "b9a357711371173bdf19b4d362f6abdd"
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input")
const searchBtb = document.querySelector(".search button")

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`)
  var data = await response.json()

  console.log(data)
   document.querySelector(".city").innerHTML = data.name
   document.querySelector(".temp").innerHTML = Math.round (data.main.temp)  + "°C"
   document.querySelector(".humidity").innerHTML= data.main.humidity + "%"
   document.querySelector(".spend").innerHTML= data.wind.speed +"km/h"

   
}


searchBtb.addEventListener("click",()=>{
  checkWeather(searchBox.value)

})