/**************weather**************/
var lat;
var lng;
/*var part = "minutely,hourly,daily,alerts";*/
var part = "current,minutely,hourly,alerts";
var override = false;
/***************geocode************/
var butts = []

var citySearch = [];
var city;
var cityValue = document.getElementById("city");
var placeName = document.getElementById("cityButton");
var left = document.getElementById("leftSide");
var right = document.getElementById("rightSide");
var bottom = document.getElementById("bottomSide");
var cityPrev = document.getElementById("newCityButton");
var numberZero = document.getElementById("newCityButton0");
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
beginButton = false;

/**********************************/
function runData(){
    console.log(right.childNodes.length);
    console.log(topPart);
    if(topPart === false){
        while(right.firstChild){
            right.removeChild(right.firstChild);
            weatherInfo = {
                infoCity :[],
                infoDate :[],
                infoTemp :[],
                infoHumid :[],
                infoUv :[],
                wind:[],
                description:[],
                icon:[]
               };
        }
        while(bottom.firstChild){
            bottom.removeChild(bottom.firstChild);
            
        }

    topPart = true;
    console.log(topPart);
    }

    console.log(cityValue.value);
    console.log("works");
    if(override === false){
    city = cityValue.value;

}else{

    override = false;
    console.log("override");
}
    findLatLong(city);
    
    
    /*addEntry(city);*/
    
}/**************************************/

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
    /*console.log(existingEntries.length);*/
};

function openPage(){
    butts = [];
    console.log("hello");
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
if(existingEntries != null) {
    console.log("hello2");
    if(openedPage === true && existingEntries.length > 0){
        openedPage = false;
        
    for(var i = 0; i < existingEntries.length; i++){
        
        var cityBlock = document.createElement("button");
        
        cityBlock.setAttribute("type", "click");
        /*var string =("newCityButton" + i);
        cityBlock.setAttribute("id", string);*/
        cityBlock.textContent = existingEntries[i];
        left.appendChild(cityBlock);
        butts.push(cityBlock);
            
            if(i === 0){
                butts[i].addEventListener("click", function(event){
                    event.preventDefault();
                    console.log("hello from button 0");
                    city = butts[0].textContent;
                    city = city.replace(/(^"|"$)/g, '');
                    console.log(city);
                    topPart = false;
                    override = true;
                    runData();});
                    }
                    
            else if(i === 1){
                butts[i].addEventListener("click", function(event){
                    event.preventDefault();
                    console.log("hello from button 1")
                    city = butts[1].textContent;
                    city = city.replace(/(^"|"$)/g, '');
                    console.log(city);
                    topPart = false;
                    override = true;
                    runData();});
                    }

                    else if(i === 2){
                butts[i].addEventListener("click", function(event){
                    event.preventDefault();
                    console.log("hello from button 2");
                    city = butts[2].textContent;
                    city = city.replace(/(^"|"$)/g, '');
                    console.log(city);
                    topPart = false;
                    override = true;
                    runData();});
                    }

                    else if(i === 3){
                        butts[i].addEventListener("click", function(event){
                            event.preventDefault();
                            console.log("hello from button 3");
                            city = butts[3].textContent;
                            city = city.replace(/(^"|"$)/g, '');
                            console.log(city);
                            topPart = false;
                            override = true;
                            runData();});
                            }

                            else if(i === 4){
                        butts[i].addEventListener("click", function(event){
                            event.preventDefault();
                            console.log("hello from button 4");
                            city = butts[4].textContent;
                            city = city.replace(/(^"|"$)/g, '');
                            console.log(city);
                            topPart = false;
                            override = true;
                            runData();});
                            }

                            else if(i === 5){
                        butts[i].addEventListener("click", function(event){
                            event.preventDefault();
                            console.log("hello from button 5");
                            city = butts[5].textContent;
                            city = city.replace(/(^"|"$)/g, '');
                            console.log(city);
                            topPart = false;
                            override = true;
                            runData();});
                            }

                            else if(i === 6){
                                butts[i].addEventListener("click", function(event){
                                    event.preventDefault();
                                    console.log("hello from button 6");
                                    city = butts[6].textContent;
                                    city = city.replace(/(^"|"$)/g, '');
                                    console.log(city);
                                    topPart = false;
                                    override = true;
                                    runData();});
                                    }

                                    else if(i === 7){
                                butts[i].addEventListener("click", function(event){
                                    event.preventDefault();
                                    console.log("hello from button 7");
                                    city = butts[7].textContent;
                                    city = city.replace(/(^"|"$)/g, '');
                                    console.log(city);
                                    topPart = false;
                                    override = true;
                                    runData();});
                                    }

                                    else if(i === 8){
                                butts[i].addEventListener("click", function(event){
                                    event.preventDefault();
                                    console.log("hello from button 8");
                                    city = butts[8].textContent;
                                    city = city.replace(/(^"|"$)/g, '');
                                    console.log(city);
                                    topPart = false;
                                    override = true;
                                    runData();});
                                    }
                                    else if(i === 9){
                                        butts[9].addEventListener("click", function(event){
                                            event.preventDefault();
                                            console.log("hello from button 9");
                                            city = butts[9].textContent;
                                            city = city.replace(/(^"|"$)/g, '');
                                            console.log(city);
                                            topPart = false;
                                            override = true;
                                            runData();});
                                            }
                                    
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
            console.log(element.uvi);*/
            /*console.log(element.weather[0].description);*/
            /*console.log("----------------")*/
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
               console.log(topPart);
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
            infoColor = document.createElement("p");
            if( weatherInfo.infoUv < 3){
            infoUvDiv.setAttribute("class", "uv ")
            infoColor.setAttribute("class", " uvL");}
            else if( weatherInfo.infoUv < 6 && weatherInfo.infoUv >= 3){
                infoUvDiv.setAttribute("class", "uv ")
                infoColor.setAttribute("class", " uvM");} 
                else if( weatherInfo.infoUv < 8  && weatherInfo.infoUv >= 6){
                    infoUvDiv.setAttribute("class", "uv ")
                    infoColor.setAttribute("class", " uvH");} 
                    else if( weatherInfo.infoUv < 11 && weatherInfo.infoUv >= 8){
                        infoUvDiv.setAttribute("class", "uv ")
                        infoColor.setAttribute("class", " uvVh");} 
                        else if( weatherInfo.infoUv >= 11){
                            infoUvDiv.setAttribute("class", "uv ")
                            infoColor.setAttribute("class", " uvE");} 

            infoUvDiv.textContent = "UV Index:";
            infoColor.textContent = weatherInfo.infoUv;
            uvDiv = document.createElement("div");
            uvDiv.setAttribute("class", "columns divUv");
            uvDiv.appendChild(infoUvDiv);
            uvDiv.appendChild(infoColor);
            right.appendChild(uvDiv);
            topPart = false;
           }
           else{
            i++;
            //console.log("here");
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
            infoWindDiv = document.createElement("p");
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
function findLatLong(city){
fetch("https://api.opencagedata.com/geocode/v1/json?q=" + city + "&key=67683203830344f580da2a2de469cf57")
    .then(function(response){
        return response.json()
})
    .then(function (data){
        console.log(data.results[0].geometry);
        lat = data.results[0].geometry.lat;
        lng = data.results[0].geometry.lng;
        addEntry(city);
        findWeather();
        
})
    .catch(function() {
        console.log("error");
        alert("You must enter a real location!");
        
});
}


/*cityPrev.addEventListener("click", function(event){
    event.preventDefault();
    console.log(right.childNodes.length);
    console.log(topPart);
    if(topPart === false){
        while(right.firstChild){
            right.removeChild(right.firstChild);
            weatherInfo = {
                infoCity :[],
                infoDate :[],
                infoTemp :[],
                infoHumid :[],
                infoUv :[],
                wind:[],
                description:[],
                icon:[]
               };
        }
        while(bottom.firstChild){
            bottom.removeChild(bottom.firstChild);
            
        }

    topPart = true;
    console.log(topPart);
    }

    console.log(cityValue.value);
    console.log("works");
    city = cityValue.value;
    findLatLong(city);
    
    
    /*addEntry(city);*/
    
/*});*/
/****************************/

placeName.addEventListener("click", function(event){
    event.preventDefault();
    runData();
});

openPage();