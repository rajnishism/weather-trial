
const city = prompt("Enter your city Name ")
const url ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=ef0b05d05153eaed452a8689acf5844d&units=metric";
fetch(url)
.then(response=>response.json())
.then(function(data)

{
  document.getElementById("weatherImg").src= "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
  document.getElementById("city").innerHTML=data.name;
  document.getElementById("temp").innerHTML= "data.main.temp"+"degree celsius";
  document.getElementById("description").innerHTML=data.weather[0].description;
  document.getElementById("temp").innerHTML=data.main.temp;

})
