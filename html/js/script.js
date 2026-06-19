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

    // ============================================================
    // DEMO 1: Título clickeable
    // ============================================================
    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.style.cursor = 'pointer';
        titulo.addEventListener('click', function () {
            this.style.color = this.style.color === 'rgb(227, 79, 38)' 
                ? '#0d6efd' 
                : '#e34f26';
        });
    }

    // ============================================================
    // DEMO 2: Botones de pista para ejercicios
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

    // ============================================================
    // DEMO 3: Envío del formulario con validación y feedback
    // ============================================================
    const form = document.getElementById('demoForm');
    const feedback = document.getElementById('formFeedback');

    if (form && feedback) {
        // Validación en tiempo real mientras el usuario escribe
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', function () {
                validateField(this);
            });
            input.addEventListener('input', function () {
                // Ocultar error mientras escribe si ya es válido
                if (this.validity.valid) {
                    const error = this.closest('.form-group')?.querySelector('.form-error');
                    if (error) error.classList.remove('visible');
                    this.style.borderColor = '#198754';
                } else {
                    this.style.borderColor = '#dc3545';
                }
            });
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validar todos los campos
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });

            if (isValid) {
                // Recoger datos del formulario
                const formData = new FormData(form);
                let dataSummary = '';
                // FormData.entries() devuelve cada checkbox individualmente
                for (const [key, value] of formData.entries()) {
                    dataSummary += `• ${key}: ${value}\n`;
                }

                feedback.className = 'form-feedback success';
                feedback.innerHTML = `
                    <strong>✅ ¡Formulario enviado con éxito!</strong>
                    <pre class="feedback-data">${dataSummary}</pre>
                    <p class="feedback-note">🔍 Revisa la consola (F12) para ver los datos completos.</p>
                `;
                feedback.hidden = false;
                console.log('📝 Datos del formulario:', Object.fromEntries(formData.entries()));
            } else {
                feedback.className = 'form-feedback error';
                feedback.innerHTML = '❌ Corrige los campos marcados en rojo antes de enviar.';
                feedback.hidden = false;

                // Enfocar el primer campo con error
                const firstError = form.querySelector('.form-error.visible');
                if (firstError) {
                    const input = firstError.closest('.form-group')?.querySelector('input, textarea, select');
                    if (input) input.focus();
                }
            }
        });

        form.addEventListener('reset', function () {
            feedback.hidden = true;
            feedback.className = 'form-feedback';
            inputs.forEach(input => {
                const error = input.closest('.form-group')?.querySelector('.form-error');
                if (error) error.classList.remove('visible');
                input.style.borderColor = '';
            });
        });
    }

    // Función de validación de campo individual
    function validateField(input) {
        const group = input.closest('.form-group');
        const error = group?.querySelector('.form-error');

        if (!input.validity.valid) {
            if (error) error.classList.add('visible');
            input.style.borderColor = '#dc3545';
            return false;
        } else {
            if (error) error.classList.remove('visible');
            input.style.borderColor = '#198754';
            return true;
        }
    }

    // ============================================================
    // DEMO 4: Contador de elementos HTML en la página
    // ============================================================
    setTimeout(() => {
        const stats = {
            totalElements: document.querySelectorAll('*').length,
            totalSections: document.querySelectorAll('.content-section').length,
            totalImages: document.querySelectorAll('img').length,
            totalTables: document.querySelectorAll('table').length,
            totalInputs: document.querySelectorAll('input').length,
        };
        console.log('📊 Estadísticas de la página:', stats);
    }, 500);

    console.log('✅ Todas las demos de HTML cargadas');
});

/* 
 * 🧪 EJERCICIOS SUGERIDOS:
 * 1. Agrega un botón que añada una nueva fila a la tabla de horarios
 * 2. Haz que al seleccionar un checkbox se muestre un mensaje personalizado
 * 3. Crea un contador que muestre cuántos caracteres lleva escritos el textarea
 * 4. Agrega un botón para cambiar entre tema claro/oscuro en la página
 */

/* Fin de script.js */
