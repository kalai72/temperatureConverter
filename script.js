function convertTemperature() {
    const celsiusInput = document.getElementById('celsius').value;

    if (celsiusInput === '') {
        alert('Please enter a temperature in Celsius.');
        return;
    }

    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (9 / 5) * celsius + 32;

    document.getElementById('result').textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
}
