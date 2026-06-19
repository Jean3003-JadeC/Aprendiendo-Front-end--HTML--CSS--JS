// script.js - JavaScript para las lecciones de CSS
// 
// 📖 PROPÓSITO: Añade interactividad a los ejemplos del módulo CSS.
//   Aquí puedes manipular estilos dinámicamente con JavaScript.
//
// 💡 APRENDE: JavaScript puede modificar clases CSS, estilos en línea
//   y animar elementos. ¡Combínalo con CSS para crear experiencias!

document.addEventListener('DOMContentLoaded', function () {
    console.log('🎨 Módulo de CSS cargado correctamente');
    console.log('💡 Tip: Revisa este archivo en: css/js/script.js');
    
    // Ejemplo: toggle de clase para efectos visuales
    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.addEventListener('click', function () {
            this.style.transform = this.style.transform === 'scale(1.05)' 
                ? 'scale(1)' 
                : 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
    }
});

/*
 * 🧪 EJERCICIOS SUGERIDOS:
 * 1. Crea un botón que cambie el tema de claro a oscuro
 * 2. Agrega un contador de clics que se muestre en pantalla
 * 3. Haz que un elemento se desplace suavemente al hacer clic
 */

/* Fin de script.js */
