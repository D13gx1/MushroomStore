$("#btn-cargar").click(function (event) {
    event.preventDefault();

    var apiKey = '46da1b5e-1249-11ef-bcc1-0242ac130004-46da1c12-1249-11ef-bcc1-0242ac130004'; // Reemplaza 'TU_CLAVE_DE_API' con tu propia clave de API de OpenWeatherMap
    var ciudad = $("#ciudad").val(); // Obtén el valor del input de ciudad

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var temperatura = data.main.temp;
            var descripcion = data.weather[0].description;
            var icono = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            var $info = $("<div></div>");
            $info.append(`<p>Temperatura: ${temperatura}°C</p>`);
            $info.append(`<p>Descripción: ${descripcion}</p>`);
            $info.append(`<img src="${icono}" alt="Icono de clima">`);

            $("#weather-info").html($info);
        })
        .catch(error => console.error(error));
});
