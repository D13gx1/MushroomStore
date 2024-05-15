// URL de la API de APOD
const APOD_API_URL = 'https://api.nasa.gov/planetary/apod';

// Clave de la API de la NASA (reemplaza 'TU_CLAVE_DE_API' con tu propia clave)
const API_KEY = 'gScOSLLsRy4QC5LKnpgL7IblLe5ndVnDFk8UQqgw';

// Construir la URL de la solicitud con la clave de la API
const url = `${APOD_API_URL}?api_key=${API_KEY}`;

// Función para cargar la imagen astronómica del día
function cargarAPOD() {
    // Realizar solicitud GET a la API de APOD
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error de red al cargar la imagen astronómica del día');
            }
            return response.json();
        })
        .then(data => {
            // Verificar si la respuesta es una imagen o un video
            if (data.media_type === 'image') {
                // Mostrar la imagen en el contenedor
                const imageContainer = document.getElementById('apod-container');
                imageContainer.innerHTML = `<img src="${data.url}" alt="${data.title}" class="apod-image">`;
            } else if (data.media_type === 'video') {
                // Si es un video, mostrar un enlace al video
                const videoContainer = document.getElementById('apod-container');
                videoContainer.innerHTML = `
                    <iframe width="560" height="315" src="${data.url}" frameborder="0" allowfullscreen></iframe>
                `;
            }
            // Mostrar título y explicación
            document.title = data.title;
            document.getElementById('apod-container').innerHTML += `
                <h2>${data.title}</h2>
                <p>${data.explanation}</p>
            `;
        })
        .catch(error => {
            console.error('Error al cargar la imagen astronómica del día:', error.message);
        });
}

// Cargar la imagen astronómica del día al cargar la página
window.addEventListener('load', cargarAPOD);
