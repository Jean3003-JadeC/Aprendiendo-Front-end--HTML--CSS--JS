// script.js - JavaScript para las lecciones de Bootstrap
// 
// 📖 PROPÓSITO: Bootstrap incluye sus propios plugins JS (modales, carrusel, tooltips, etc.).
//   Este archivo es para añadir scripts personalizados adicionales y demostrar
//   cómo inicializar componentes de Bootstrap manualmente.
//
// 💡 APRENDE: En Bootstrap 5, algunos componentes (tooltips, popovers)
//   requieren inicialización manual con JavaScript.

document.addEventListener('DOMContentLoaded', function () {
    console.log('🅱️ Módulo de Bootstrap 5.3.8 cargado correctamente');
    console.log('💡 Bootstrap está funcionando desde CDN');

    // ============================================================
    // Inicializar Tooltips (requieren JS en Bootstrap 5)
    // ============================================================
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    if (tooltipTriggerList.length > 0) {
        const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
        console.log(`🔧 ${tooltipList.length} tooltip(s) inicializado(s)`);
    }

    // ============================================================
    // Demo: Modal creado dinámicamente con JavaScript
    // ============================================================
    const modalBtn = document.getElementById('demo-modal-btn');
    if (modalBtn) {
        modalBtn.addEventListener('click', function () {
            let demoModal = document.getElementById('demo-modal');

            if (!demoModal) {
                demoModal = document.createElement('div');
                demoModal.className = 'modal fade';
                demoModal.id = 'demo-modal';
                demoModal.tabIndex = -1;
                demoModal.setAttribute('aria-labelledby', 'demo-modal-label');
                demoModal.setAttribute('aria-hidden', 'true');
                demoModal.innerHTML = `
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="demo-modal-label">🎉 Bootstrap está funcionando</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h6>✅ CDN activo</h6>
                                        <p class="text-muted small">Bootstrap 5.3.8 cargado desde jsDelivr</p>
                                    </div>
                                    <div class="col-md-6">
                                        <h6>🅱️ Versión</h6>
                                        <p class="text-muted small">5.3.8 (jsDelivr CDN)</p>
                                    </div>
                                </div>
                                <hr>
                                <p class="mb-0">Este modal se creó dinámicamente con <code>document.createElement()</code> y la API de Bootstrap JS. Usa componentes Bootstrap con confianza — todo funciona.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-primary" id="modal-surprise" data-bs-dismiss="modal">😮 ¡Sorpresa!</button>
                            </div>
                        </div>
                    </div>
                `;
                document.body.appendChild(demoModal);

                // Evento en el botón sorpresa dentro del modal
                demoModal.querySelector('#modal-surprise')?.addEventListener('click', function () {
                    alert('🎉 ¡Has descubierto el botón sorpresa! Bootstrap + JS = poder.');
                });
            }

            const modal = new bootstrap.Modal(demoModal);
            modal.show();
        });

        console.log('✅ Demo de modal dinámico lista');
    }

    // ============================================================
    // Ejercicios: Botones de pista
    // ============================================================
    const exerciseBtns = document.querySelectorAll('.btn-exercise');
    exerciseBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const exercise = this.dataset.exercise;
            const hint = document.getElementById(`hint-${exercise}`);
            if (hint) {
                const isHidden = hint.hasAttribute('hidden');
                hint.toggleAttribute('hidden');
                this.textContent = isHidden ? 'Ocultar pista' : 'Mostrar pista';
            }
        });
    });

    console.log('✅ Todos los componentes de Bootstrap inicializados');
});

/* 
 * 🧪 EJERCICIOS SUGERIDOS:
 * 1. Agrega un Toast de Bootstrap que aparezca al cargar la página
 * 2. Inicializa un Popover en un botón con texto personalizado
 * 3. Crea un Offcanvas que se abra desde un botón en la navbar
 * 4. Agrega un Spinner animado que se muestre al hacer clic en un botón
 */

/* Fin de script.js */
