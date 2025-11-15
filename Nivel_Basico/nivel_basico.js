// Espera a que cargue el DOM para evitar errores si el script va en <head>
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');
    const menu = document.getElementById('main-menu');

    toggleButton.addEventListener('click', function () {
    menu.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function (){

    // Selección de los enlaces con el Data-Seccion
    const enlaces = document.querySelectorAll('.container a');
    const areaContenido = document.querySelectorAll('.interactuar');

    // Contenido por sesión
    const contenidos = {
        gramatica: `
        <h2>Gramática</h2>
        <p>Aqí aprendes los tiempos verbales, articulos preposiciones, etc. </p>`,

        vocabulario: `<h2>Vocabulario</h2>
        <p>Aquí aprende nuevas palabras y expresiones comunes.</p>`,

        ejercicios: `<h2>Ejercicios</h2>
        <p>Practicas interactivas y ejercicios para reforzar tu aprendizaje. </p>`,

        contacto: `<h1>Contacto</h2>
        <p>¿Tienes dudas? Contactanos por nuestras redes sociales.</p>`
    };

    // Agregando evento a cada enlace.
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click', function(e){
            e.preventDefault(); // Evita redireccionar
            const Seccion = this.getAttribute('data-seccion');
            
            areaContenido.innerHTML = contenidos[Seccion] || "<p> Contenido no disponible</p>"
        });
    });
});