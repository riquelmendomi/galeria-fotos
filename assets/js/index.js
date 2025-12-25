// Selección de elementos
const imagenPrincipal = document.querySelector('#imagen-principal');
const contenedorPrincipal = document.querySelector('#imagen-principal-container');
const thumbnails = document.querySelectorAll('.thumbnail');

// Agregar eventos a cada thumbnail
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {

        // Obtener datos del thumbnail clickeado
        const nuevaSrc = thumbnail.src;
        const descripcion = thumbnail.alt;

        // Actualizar imagen principal
        imagenPrincipal.src = nuevaSrc;

        // Eliminar pie de foto anterior si existe
        const pieExistente = document.querySelector('#pie-de-foto');
        if (pieExistente) {
            pieExistente.remove();
        }

        // Crear nuevo pie de foto
        const pieDeFoto = document.createElement('p');
        pieDeFoto.id = 'pie-de-foto';
        pieDeFoto.textContent = descripcion;

        // Agregar al DOM
        contenedorPrincipal.appendChild(pieDeFoto);
    });
});
