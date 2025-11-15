// Espera a que cargue el DOM para evitar errores si el script va en <head>
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');
    const menu = document.getElementById('main-menu');

    toggleButton.addEventListener('click', function () {
    menu.classList.toggle('active');
    });
});

let contacto = document.getElementById('contacto');
let listaContacto = document.getElementById('lista-contacto');

 contacto.addEventListener('click', function (){
    if (listaContacto.style.display == 'none' || listaContacto.style.display == ''){
        listaContacto.style.display = 'block'
    }else{
        listaContacto.style.display = 'none'
    }
 })