// script.js - JavaScript para las lecciones de Bootstrap
// 
// 📖 PROPÓSITO: Bootstrap incluye sus propios plugins JS (modales, carrusel, tooltips, etc.).
//   Este archivo es para añadir scripts personalizados adicionales y demostrar
//   cómo inicializar componentes de Bootstrap manualmente.
//
// 💡 APRENDE: En Bootstrap 5, algunos componentes (tooltips, popovers, toasts)
//   requieren inicialización manual con JavaScript.

document.addEventListener('DOMContentLoaded', function () {
    console.log('🅱️ Módulo de Bootstrap 5.3.8 cargado correctamente');
    console.log('💡 Bootstrap está funcionando desde CDN');

    // Demo interactiva: Inicializar tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    if (tooltipTriggerList.length > 0) {
        const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
        console.log(`🔧 ${tooltipList.length} tooltip(s) inicializado(s)`);
    }

    // Demo interactiva: Botón que muestra/oculta un modal programáticamente
    const modalBtn = document.getElementById('demo-modal-btn');
    if (modalBtn) {
        modalBtn.addEventListener('click', function () {
            // Buscar o crear un modal de demostración
            let demoModal = document.getElementById('demo-modal');

            if (!demoModal) {
                // Crear modal si no existe
                demoModal = document.createElement('div');
                demoModal.className = 'modal fade';
                demoModal.id = 'demo-modal';
                demoModal.tabIndex = -1;
                demoModal.setAttribute('aria-labelledby', 'demo-modal-label');
                demoModal.setAttribute('aria-hidden', 'true');
                demoModal.innerHTML = `
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="demo-modal-label">¡Bootstrap funciona! 🎉</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                            </div>
                            <div class="modal-body">
                                <p>Este modal se creó dinámicamente con JavaScript y Bootstrap.</p>
                                <p>Bootstrap 5.3.8 está cargado desde CDN y funcionando correctamente.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                `;
                document.body.appendChild(demoModal);
            }

            // Mostrar el modal usando la API de Bootstrap
            const modal = new bootstrap.Modal(demoModal);
            modal.show();
        });

        console.log('✅ Demo interactiva de Bootstrap lista');
    }
});

/* 
 * 🧪 EJERCICIOS SUGERIDOS:
 * 1. Agrega un tooltip a un elemento de la página y personaliza su texto
 * 2. Crea un carrusel de imágenes con Bootstrap y JavaScript
 * 3. Inicializa un Toast de Bootstrap al hacer clic en un botón
 * 4. Crea un acordeón con datos dinámicos desde un array
 */

/* Fin de script.js */
