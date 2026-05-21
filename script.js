function convertTemperature() {
    const input = document.getElementById("tempInput").value;
    const unit = document.getElementById("unitSelect").value;
    const resultDiv = document.getElementById("result");

    if (input === "" || isNaN(input)) {
        resultDiv.innerText = "❌ Please enter a valid number.";
        return;
    }

    const temp = parseFloat(input);
    let celsius, fahrenheit, kelvin;

    if (unit === "Celsius") {
        celsius = temp;
        fahrenheit = (temp * 9 / 5) + 32;
        kelvin = temp + 273.15;
    } else if (unit === "Fahrenheit") {
        celsius = (temp - 32) * 5 / 9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;
    } else if (unit === "Kelvin") {
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    resultDiv.innerHTML = `
        <p>🌡️ Celsius: <strong>${celsius.toFixed(2)} °C</strong></p>
        <p>🔥 Fahrenheit: <strong>${fahrenheit.toFixed(2)} °F</strong></p>
        <p>❄️ Kelvin: <strong>${kelvin.toFixed(2)} K</strong></p>
      `;
}