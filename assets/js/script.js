//MINIFIED MOMENT VIA HTML - ADDING NODE TO ACCESS MOMENT
// var moment = require('moment'); 
// // require
let today = document.getElementById('currentDay')

today.textContent = moment.defaultFormat

// moment().hour(Number)

let body = document.body;
let hoursInADay = document.createElement("div")
 
//CREATE UNORDERED LIST ELEMENT
let hoursInADayEl = document.createElement ("ul");

//CREATE LIST ITEMS
let eightAM = document.createElement("li");
let nineAM = document.createElement("li");
let tenAM = document.createElement("li");
let elevenAM = document.createElement("li");
let twelevePM = document.createElement("li");
let onePM = document.createElement("li");
let twoPM = document.createElement("li");
let threePM = document.createElement("li");
let fourPM = document.createElement("li");
let fivePM = document.createElement("li");
let sixPM = document.createElement("li");
let sevenPM = document.createElement("li");

//CREATE INPUT IN LIST ITEMS
let taskAtEightAM = document.createElement("input")

hoursInADay.textContent = "Carpe Diem"
//TEXT FOR LIST ITEMS
eightAM.textContent = "8 am"
nineAM.textContent = "9 am";
tenAM.textContent = "10 am";
elevenAM.textContent = "11 am";
twelevePM.textContent = "12 pm";
onePM.textContent = "1 pm";
twoPM.textContent = "2 pm";
threePM.textContent = "3 pm";
fourPM.textContent = "4 pm";
fivePM.textContent = "5 pm";
sixPM.textContent = "6 pm";
sevenPM.textContent = "7 pm";

//INPUT TYPE FOR TIMEFRAME
taskAtEightAM.inputMode ="text"

//APPEND HIERARCHY
body.appendChild(hoursInADay);
hoursInADay.appendChild(hoursInADayEl);

//APPEND LIST
hoursInADayEl.appendChild(eightAM);
hoursInADayEl.appendChild(nineAM);
hoursInADayEl.appendChild(tenAM);
hoursInADayEl.appendChild(elevenAM);
hoursInADayEl.appendChild(twelevePM);
hoursInADayEl.appendChild(onePM);
hoursInADayEl.appendChild(twoPM);
hoursInADayEl.appendChild(threePM);
hoursInADayEl.appendChild(fourPM);
hoursInADayEl.appendChild(fivePM);
hoursInADayEl.appendChild(sixPM);
hoursInADayEl.appendChild(sevenPM);

//APPEND INPUT
eightAM.appendChild(taskAtEightAM)

hoursInADayEl.setAttribute("style", "color:white; background: #333333; padding: 5px; margin-left: 35px;");

moment().format();
