// Espera a que cargue el DOM para evitar errores si el script va en <head>
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');
    const menu = document.getElementById('main-menu');

    toggleButton.addEventListener('click', function () {
    menu.classList.toggle('active');
    });
});



// Validar el Log in
const email = 'moyaesteban50@gmail.com';
const password = 'E123456789m';
let control = 0

function entrar () {
    const correo = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;

    if (email !== correo || password !== contraseña) {
        Swal.fire('Correo o contraseña incorrecta');
        control++
        if(control >= 4){
            Swal.fire('Te queda un intento, ' + ' Solo es permitido tres intentos fallidos')
        }
    }
    else {
        Swal.fire({
            title: 'Bienvenido',
            text: 'Te has logueado satisfactoriamente',
            icon: 'success',
            confirmButtonText: 'Continuar'
        }).then(()=>{
            window.location.href = 'Nivel_Basico/nivel_basico.html';

        })
    }
}
