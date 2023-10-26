function buscarClima() {
    const apiKey = 'db3d9d3f1f294bbd7fa0c50bc97f4b8f'; 
    const ciudad = document.getElementById('cityInput').value;
    const resultado = document.getElementById('resultContainer');

    // Verificar si se ha ingresado el nombre de la ciudad
    if (ciudad.trim() === '') {
        alert('por favor ingresa el nombre: ');
        return;
    }

    // Realizar la solicitud a la API de OpenWeatherMap
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
        .then(response => response.json())
        .then(datos => {
            // Verificar si la solicitud fue exitosa
            if (datos.cod === '404') {
                alert('City not found. Please enter a valid city name.');
                return;
            }

            // Mostrar la temperatura actual
            const temperatura = datos.main.temp;
            const ciudadNombre = datos.name;
            const temperaturaDescripcion = datos.weather[0].description;

            const resultHTML = `
                <p>el clima en ${ciudadNombre}: ${temperatura}°C</p>
                <p>temperatura: ${temperaturaDescripcion}</p>
            `;

            resultado.innerHTML = resultHTML;
        })
        .catch(error => {
            console.error('error en buscar datos:', error);
            alert('por favor intentalo de nuevo.');
        });
}
