// Función para abrir el modal
function openModal() {
    var modal = document.getElementById('modal');
    var image = document.querySelector('.enlargeButton').getAttribute('data-image');
    var modalImage = document.getElementById('modal-image');

    // Cambiar la imagen dentro del modal
    modalImage.src = image;

    // Mostrar el modal
    modal.style.display = 'flex';
}

// Cerrar el modal cuando se haga clic fuera de él (opcional)
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
