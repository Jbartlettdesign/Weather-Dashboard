/**************weather**************/
var lat;
var lng;
/*var part = "minutely,hourly,daily,alerts";*/
var part = "current,minutely,hourly,alerts";

/***************geocode************/
var citySearch = [];
var city;
var cityValue = document.getElementById("city");
var placeName = document.getElementById("cityButton");
var left = document.getElementById("leftSide");
var right = document.getElementById("rightSide");
var bottom = document.getElementById("bottomSide");
var openedPage = true;
var weatherInfo = {
 infoCity :[],
 infoDate :[],
 infoTemp :[],
 infoHumid :[],
 infoUv :[],
 wind:[],
 description:[],
 icon:[]
};
topPart = true;
/**********************************/
        
function addEntry(city) {
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
if(existingEntries == null) {existingEntries = []; console.log("empty");}
if(existingEntries.length > 9){
    
    existingEntries.shift();
    console.log(existingEntries);
    }
    var testObject =city;
    localStorage.setItem('testObject', JSON.stringify(testObject));
    existingEntries.push(testObject);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    console.log(existingEntries.length);
};

function openPage(){
    console.log("hello");
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
if(existingEntries != null) {
    console.log("hello2");
    if(openedPage === true && existingEntries.length > 0){
        openedPage = false;

    for(var i = 0;i < existingEntries.length; i++){
        var cityBlock = document.createElement("h3");
        cityBlock.textContent = existingEntries[i];
        left.appendChild(cityBlock);
            }
        }
        
    }
}

/***********************************/
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
        var i = 0;
        data.daily.forEach(element =>{
            /*console.log(element.dt);*/
            var date = timeConverter(element.dt);
            /*console.log(date);*/
            var tempDay = element.temp.day;
            /*console.log(tempDay + " " + "°F");
            console.log(element.wind_gust + " " + "mph");
            console.log(element.humidity);
            console.log(element.uvi);
            console.log(element.weather[0].description);
            console.log("----------------")*/
            var iconGraphic = (element.weather[0].icon);
            weatherInfo.icon.push(iconGraphic);
            var weatherDescription = element.weather[0].description;
            weatherInfo.description.push(weatherDescription);
            /************************/
            /**date**/
            weatherInfo.infoCity.push(city + " " + " " + date); 
            weatherInfo.infoDate.push(date);
            /**temp***/
            weatherInfo.infoTemp.push("Temp:" + " " + tempDay + " " + "°F"); 
            /****humid****/
            weatherInfo.infoHumid.push(element.humidity);
            /*****wind*****/ 
            weatherInfo.wind.push(element.wind_gust);
            /*******uvi********/
            weatherInfo.infoUv.push(element.uvi); 
            /*****************/
           if(topPart){
            infoCityDiv = document.createElement("h4");
            infoCityDiv.setAttribute("class", "textInfoTop");
            infoCityDiv.textContent = weatherInfo.infoCity;
            right.appendChild(infoCityDiv);
            /************************/
            infoTempDiv = document.createElement("p");
            infoTempDiv.setAttribute("class", "textInfoTop");

            infoTempDiv.textContent = weatherInfo.infoTemp;
            right.appendChild(infoTempDiv);
            /************************/
            infoHumidDiv = document.createElement("p");
            infoHumidDiv.textContent = "Humidy:" + " " + weatherInfo.infoHumid + "%";
            infoHumidDiv.setAttribute("class", "textInfoTop");
            right.appendChild(infoHumidDiv);
            /************************/
            infoUvDiv = document.createElement("p");
            infoUvDiv.setAttribute("class", "textInfoTop");

            infoUvDiv.textContent = "UV Index" + " " + weatherInfo.infoUv;
            right.appendChild(infoUvDiv);
            topPart = false;
           }
           else{
            i++;
            console.log("here");
            weatherBox = document.createElement("div");
            weatherBox.setAttribute("class", "column is-one-fifth futureForecast");
            
            /************************/
            infoCityDiv = document.createElement("h5");
            infoCityDiv.textContent = weatherInfo.infoDate[i];
            weatherBox.appendChild(infoCityDiv);
            /************************/
            var infoGraphicBox = document.createElement("img");
            infoGraphicBox.src = "http://openweathermap.org/img/wn/" + weatherInfo.icon[i] + "@2x.png";
            infoGraphicBox.setAttribute("class", "sizeOfPic");
            weatherBox.appendChild(infoGraphicBox);
            /************************/
            infoTempDiv = document.createElement("p");
            infoTempDiv.setAttribute("class", "textInfoBottom");
            infoTempDiv.textContent = weatherInfo.infoTemp[i]; 
            weatherBox.appendChild(infoTempDiv);
            /************************/
            infoWindDiv= document.createElement("p");
            infoWindDiv.setAttribute("class", "textInfoBottom");
            infoWindDiv.textContent = "Wind:" + weatherInfo.wind[i] + " " + "MPH";
            weatherBox.appendChild(infoWindDiv);
            /*************************/
            infoHumidDiv = document.createElement("p");
            infoHumidDiv.setAttribute("class", "textInfoBottom");
            infoHumidDiv.textContent = "Humidy:" + " " + weatherInfo.infoHumid[i] + "%";
            weatherBox.appendChild(infoHumidDiv);
            /************************/
            /*infoUvDiv = document.createElement("p");
            infoUvDiv.setAttribute("class", "textInfoBottom");
            infoUvDiv.innerHTML = "Humidity:" + " " + weatherInfo.infoUv[i] + "%";
            weatherBox.appendChild(infoUvDiv);*/
            /*************************/
            bottom.appendChild(weatherBox);
           }
        }
        );
        console.log(weatherInfo);
})
   .catch(function() {
        console.log("error");
        alert("Weather not found!");
});
/************************/
         
}
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
        alert("You must enter a real location!");
});}
placeName.addEventListener("click", function(event){
    event.preventDefault();
    console.log(cityValue.value);
    console.log("works");
    city = cityValue.value;
    findLatLong();
    
    addEntry(city);
    
});
openPage();