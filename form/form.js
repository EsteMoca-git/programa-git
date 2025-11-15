//  Referencias a los campos del formulario
const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const tipoI = document.getElementById('tipoI');
const numeroI = document.getElementById('numeroI');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmar = document.getElementById('confirmar');

//  Expresiones Regulares
const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
const regexCorreo = /^[\w\.-]+@[\w\.-]+\.\w{2,}$/;
const regexTelefono = /^\+?\d{7,15}$/;
const regexPassword = /^[A-Za-z\d]{6,}$/;
const regexIdentificacion = /^\d{6,12}$/;

//  Mensajes de error
const mensajes = {
    nombre: " Nombre inválido. Usa solo letras y espacios.",
    correo: " Correo inválido. Usa un formato como ejemplo@dominio.com.",
    telefono: " Teléfono inválido. Debe tener entre 7 y 15 dígitos.",
    identificacion: " Número de identificación inválido. Ingresa entre 6 y 12 dígitos numéricos.",
    password: " Contraseña inválida. Debe tener al menos 6 caracteres con letras y números.",
    confirmacion: " Las contraseñas no coinciden.",
    tipoID: " Debes seleccionar un tipo de identificación."
};

//  Validación individual
function validarCampo(regexp, input, mensaje) {
    const valor = input.value.trim();
    const esValido = regexp.test(valor);
    if (!esValido) {
    mostrarAlerta(mensaje);
        input.classList.add('error');
        return false;
    } else {
    input.classList.remove('error');
        return true;
    }
}

//  Validación especial para tipo de identificación
function validarTipoIdentificacion() {
    if (tipoI.value === '') {
    mostrarAlerta(mensajes.tipoID);
        tipoI.classList.add('error');
    return false;
    }
    tipoI.classList.remove('error');
    return true;
}

//  Validación de confirmación de contraseña
function validarConfirmacion() {
    if (confirmar.value.trim() !== password.value.trim()) {
    mostrarAlerta(mensajes.confirmacion);
    confirmar.classList.add('error');
    return false;
    }
    confirmar.classList.remove('error');
    return true;
}

// Mostrar alerta
function mostrarAlerta(mensaje) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: mensaje,
        confirmButtonText: 'Entendido'
    });
}

//  Validación global del formulario
function enviarFormulario() {
    const nombreOk = validarCampo(regexNombre, nombre, mensajes.nombre);
    const tipoOk = validarTipoIdentificacion();
    const idOk = validarCampo(regexIdentificacion, numeroI, mensajes.identificacion);
    const telOk = validarCampo(regexTelefono, tel, mensajes.telefono);
    const correoOk = validarCampo(regexCorreo, email, mensajes.correo);
    const passOk = validarCampo(regexPassword, password, mensajes.password);
    const confirmacionOk = validarConfirmacion();

    if (nombreOk && tipoOk && idOk && telOk && correoOk && passOk && confirmacionOk) {
    Swal.fire({
        icon: 'success',
        title: '¡Formulario enviado!',
        text: 'Tu información ha sido enviada correctamente.',
        confirmButtonText: 'Continuar'
    }).then(()=>{
        window.location.href="../main/main.html"
    })
    

    
    }
}

// Activador del envío
document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', e => {
    e.preventDefault();
    enviarFormulario();
});
});
