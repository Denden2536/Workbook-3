"use strict";

//define your inputs (variables)
var fahrenheitTemperature = 77;

//do the calculation C = (°F - 32) × 5/9
var celsiusTempature = ((fahrenheitTemperature - 32) * 5) / 9;
//print the results
console.log(
  "The fahrenheit temperature of " +
    fahrenheitTemperature +
    " is " +
    celsiusTempature +
    " celsius."
);

function convertFToC(fahrenheitTemperature) {
  var celsiusTempature = ((fahrenheitTemperature - 32) * 5) / 9;
  return celsiusTempature;
}

var fahrenheitTemperature = 77;
convertFToC(fahrenheitTemperature);

console.log(
  "The farenheit teamperature of" +
    fahrenheitTemperature +
    "is" +
    celsiusTempature +
    "celcius,"
);

function subtract(x, y) {
  var difference = x - y;
  return difference;
}
var result = subtract(9,4)
console.log(result)



function add(params) {
  
}
