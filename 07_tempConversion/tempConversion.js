const convertToCelsius = function(tempF) {
  celsius = 0;
  celsius = (tempF-32)*(5/9)
  roundedCelsius = celsius.toFixed(1);
  return Number(roundedCelsius);
};

const convertToFahrenheit = function(tempC) {
  fahrenheit = 0;
  fahrenheit = (tempC*(9/5)+32)
  roundedFahrenheit = fahrenheit.toFixed(1);
  return Number(roundedFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
