const convertToCelsius = function() {
  let faren = arguments[0];
  celsius = ((faren-32)*5)/9;
  return Math.round(celsius*10)/10;
};

const convertToFahrenheit = function() {
   let celsius = arguments[0];
   faren = (celsius*1.8)+32;
   return Math.round(faren*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
