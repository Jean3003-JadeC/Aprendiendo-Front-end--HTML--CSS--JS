// script.js - JavaScript para las lecciones de HTML
// 
// 📖 PROPÓSITO: Añade interactividad a los ejemplos del módulo HTML.
//   Experimenta modificando este código para ver los efectos.
//
// 💡 APRENDE: El DOM (Document Object Model) permite a JavaScript
//   interactuar con los elementos HTML de la página.

document.addEventListener('DOMContentLoaded', function () {
    console.log('📄 Módulo de HTML cargado correctamente');
    console.log('💡 Tip: Revisa este archivo en: html/js/script.js');

    // Ejemplo: interactividad básica para demostrar manipulación del DOM
    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.style.cursor = 'pointer';
        titulo.addEventListener('click', function () {
            this.style.color = this.style.color === 'rgb(227, 79, 38)' 
                ? '#0d6efd' 
                : '#e34f26';
        });
    }
});

/* 
 * 🧪 EJERCICIOS SUGERIDOS:
 * 1. Cambia el texto del subtítulo cuando se hace clic en un botón
 * 2. Cuenta cuántas etiquetas <section> hay en la página
 * 3. Agrega un nuevo elemento a la lista de navegación
 */

/* Fin de script.js */
