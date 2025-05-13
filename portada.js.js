// Función para mostrar la página de detalles
function verDetalles() {
    document.getElementById('portada').style.display = 'none';
    document.getElementById('detalles').style.display = 'block';
}

// Función para regresar a la portada
function regresarPortada() {
    document.getElementById('detalles').style.display = 'none';
    document.getElementById('portada').style.display = 'block';
}

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    alert(producto + " ha sido agregado al carrito.");
}
