// script.js - JavaScript personalizado para el módulo de JavaScript
// 
// 📖 PROPÓSITO: Este archivo contiene ejemplos interactivos de JavaScript.
//   Modifica el código, guarda y recarga para ver los cambios.
//
// 💡 APRENDE: El código se ejecuta después de que el DOM se carga.
//   Observa cómo interactúa con los elementos HTML y CSS.

/* Espera a que el DOM esté completamente cargado */
document.addEventListener('DOMContentLoaded', function () {
    console.log('⚡ Módulo de JavaScript cargado correctamente');
    console.log('💡 Abre la consola (F12 > Console) para ver mensajes');
    console.log('📁 Este código está en: js/js/script.js');

    /* === Demo 1: Botón interactivo === */
    const demoBtn = document.getElementById('demo-btn');
    let clickCount = 0;

    if (demoBtn) {
        // Crear contador de clics
        const counter = document.createElement('p');
        counter.className = 'output';
        counter.textContent = '🖱️ Haz clic en el botón para empezar';
        demoBtn.parentNode.insertBefore(counter, demoBtn.nextSibling);

        demoBtn.addEventListener('click', function () {
            clickCount++;
            this.textContent = `Clics: ${clickCount}`;
            counter.textContent = `✅ Has hecho ${clickCount} clic${clickCount !== 1 ? 's' : ''}`;
            
            // Cambiar color según el número de clics
            const colors = ['#f7df1e', '#0d6efd', '#198754', '#dc3545', '#6f42c1'];
            this.style.backgroundColor = colors[clickCount % colors.length];
        });
    }

    /* === Demo 2: Ejemplo de manipulación del DOM === */
    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.style.cursor = 'pointer';
        titulo.addEventListener('click', function () {
            this.textContent = this.textContent === 'Lecciones de JavaScript'
                ? '⚡ ¡Has hecho clic en el título!'
                : 'Lecciones de JavaScript';
        });
    }

    /* === Demo 3: Reloj en tiempo real (opcional) === */
    // Ejercicio: Descomenta el código de abajo para ver un reloj en vivo
    // function updateClock() {
    //     const clock = document.getElementById('clock');
    //     if (clock) {
    //         clock.textContent = new Date().toLocaleTimeString();
    //     }
    // }
    // setInterval(updateClock, 1000);

    console.log('✅ Ejemplos cargados. ¡Experimenta con el código!');
});

/*
 * 🧪 EJERCICIOS SUGERIDOS:
 * 1. Agrega un botón que cambie el fondo de la página
 * 2. Crea una lista de tareas (todo list) básica
 * 3. Muestra la hora actual en la página usando `new Date()`
 * 4. Haz una petición fetch a una API y muestra los resultados
 * 5. Crea un contador con botones de + y -
 */

/* Fin de script.js */
