function convertTemperature() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;
    document.getElementById("result").innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2) + "°F, Kelvin: " + kelvin.toFixed(2) + "K";
}
