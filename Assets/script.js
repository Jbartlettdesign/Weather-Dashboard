/**************weather**************/
var lat;
var lng;
/*var part = "minutely,hourly,daily,alerts";*/
var part = "current,minutely,hourly,alerts";

/***************geocode************/
var citySearch = []
var city;
var cityValue = document.getElementById("city");
var placeName = document.getElementById("cityButton");
/**********************************/
console.log(localStorage.getItem("lastSearch"));
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    /*var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();*/
    var time = date + '/' + month + '/' + year;
    return time;
  }
 
function findWeather(){
fetch("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" 
+ lat + "&lon=" + lng + "&exclude=" + part + " &appid=" + "f5c430ddf7008ff80762695514952b53"
)
    .then(function(response){
        return response.json()
})
    .then(function(data){
        console.log(data);
        data.daily.forEach(element =>{
            /*console.log(element.dt);*/
            var date = timeConverter(element.dt);
            console.log(date);
            var tempDay = element.temp.day;
            console.log(tempDay + " " + "°F");
            console.log(element.wind_gust + " " + "mph");
            console.log(element.humidity);
            console.log(element.uvi);
            console.log(element.weather[0].description);
            console.log("----------------")
        });
})
   .catch(function() {
        console.log("error");
});}
/**********************************/
function findLatLong(){
fetch("https://api.opencagedata.com/geocode/v1/json?q=" + city + "&key=67683203830344f580da2a2de469cf57")
    .then(function(response){
        return response.json()
})
    .then(function (data){
        console.log(data.results[0].geometry);
        lat = data.results[0].geometry.lat;
        lng = data.results[0].geometry.lng;
        findWeather();
})
    .catch(function() {
        console.log("error");
});}
placeName.addEventListener("click", function(event){
    event.preventDefault();
    console.log(cityValue.value);
    console.log("works");
    city = cityValue.value;

    findLatLong();
    citySearch.push(city);
    localStorage.setItem("lastSearch", citySearch)
});