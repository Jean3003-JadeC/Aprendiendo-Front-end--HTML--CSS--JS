// script.js - JavaScript personalizado para el proyecto Frontend desde Cero

/* Este archivo contiene ejemplos de JavaScript que puedes ejecutar
   para ver cómo interactúa con el HTML y el CSS. */

/* Espera a que el DOM esté completamente cargado antes de manipularlo */
document.addEventListener('DOMContentLoaded', function () {
    console.log('¡El DOM está listo!');

    /* Ejemplo 1: Cambiar el texto de un encabezado al hacer clic */
    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.style.cursor = 'pointer';
        titulo.addEventListener('click', function () {
            this.textContent = this.textContent === 'Ejemplos de HTML y su uso'
                ? 'Has hecho clic en el título'
                : 'Ejemplos de HTML y su uso';
        });
    }

    /* Ejemplo 2: Mostrar una alerta al enviar el formulario */
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Evita el envío real del formulario
            const nombre = document.getElementById('nombre').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();
            if (nombre && mensaje) {
                alert(`¡Hola ${nombre}! Tu mensaje ha sido recibido:\n "${mensaje}"`);
                form.reset(); // Limpia el formulario
            } else {
                alert('Por favor completa ambos campos.');
            }
        });
    }

    /* Ejemplo 3: Cambiar dinámicamente una clase para aplicar estilos */
    const resaltado = document.createElement('p');
    resaltado.textContent = 'Este párrafo se agregó mediante JavaScript.';
    resaltado.classList.add('important', 'text-center', 'mt-4');
    document.querySelector('.container').appendChild(resaltado);

    /* Ejemplo 4: Uso de setInterval para cambiar colores cada 2 segundos */
    let colorIndex = 0;
    const colors = ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#6f42c1'];
    const dynamicElement = document.querySelector('h2');
    if (dynamicElement) {
        setInterval(() => {
            dynamicElement.style.color = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        }, 2000);
    }

    console.log('Ejecutando ejemplos de JavaScript...');
});

/* Fin de script.js */