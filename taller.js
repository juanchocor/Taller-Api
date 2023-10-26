//document.addEventListener("DOMContentLoaded", function () {
    // Realizar la solicitud a la API de JSONPlaceholder
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(fotos => {
            // Filtrar las primeras 10 fotos
            const primeras_10_fotos = fotos.slice(0, 10);

            // Crear elementos HTML para cada foto y agregarlos al cuerpo del documento
            const galeriaFotos = document.body;

            primeras_10_fotos.forEach(foto => {
                const img = document.createElement("img");
                img.src = foto.thumbnailUrl;
                img.alt = foto.title;

                const caption = document.createElement("p");
                caption.textContent = foto.title;

                const photoContainer = document.createElement("div");
                photoContainer.appendChild(img);
                photoContainer.appendChild(caption);

                galeriaFotos.appendChild(photoContainer);
            });
        })
        .catch(error => console.error("Error alcargar fotos:", error));
//});
