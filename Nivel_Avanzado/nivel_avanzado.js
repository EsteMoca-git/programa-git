// Espera a que cargue el DOM para evitar errores si el script va en <head>
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');
    const menu = document.getElementById('main-menu');

    toggleButton.addEventListener('click', function () {
    menu.classList.toggle('active');
    });
});