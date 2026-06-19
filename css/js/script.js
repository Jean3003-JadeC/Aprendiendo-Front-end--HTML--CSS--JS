// script.js - JavaScript para las lecciones de CSS
// 
// 📖 PROPÓSITO: Controla los playgrounds interactivos de Flexbox y Grid.
//   Modifica propiedades CSS en vivo y genera el código correspondiente.
//
// 💡 APRENDE: JavaScript puede modificar estilos en línea y clases CSS
//   en tiempo real. ¡Así es como funcionan herramientas como CodePen!

document.addEventListener('DOMContentLoaded', function () {
    console.log('🎨 Módulo de CSS cargado correctamente');
    console.log('💡 Tip: Experimenta con los playgrounds de Flexbox y Grid');

    setupFlexboxPlayground();
    setupGridPlayground();
    setupExerciseHints();
    setupCopyButtons();

    // Título clickeable con efecto de escala
    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.addEventListener('click', function () {
            this.style.transform = this.style.transform === 'scale(1.05)' 
                ? 'scale(1)' 
                : 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
    }

    console.log('✅ Playgrounds de CSS listos');
});

// ============================================================
// FLEXBOX PLAYGROUND
// ============================================================
function setupFlexboxPlayground() {
    const viewport = document.getElementById('flexViewport');
    if (!viewport) return;

    const flexState = {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch',
        flexWrap: 'nowrap',
        gap: 8
    };

    // Estado para el orden y crecimiento de cada item
    let flexItems = viewport.querySelectorAll('.flex-item');

    // Control de botones del contenedor
    const flexBtnGroups = document.querySelectorAll('#flexbox-playground .controls-panel > .control-group:not([id]) .btn-group');
    flexBtnGroups.forEach(group => {
        const prop = group.dataset.prop;
        const buttons = group.querySelectorAll('.ctrl-btn');
        
        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                setActiveButton(buttons, this);
                const value = this.dataset.value;
                flexState[prop] = value;
                viewport.style[prop] = value;
                updateFlexCode(flexState);

                // Mostrar/ocultar align-content según flex-wrap
                if (prop === 'flexWrap') {
                    const alignContentGroup = document.getElementById('flexAlignContentGroup');
                    if (alignContentGroup) {
                        alignContentGroup.style.display = (value === 'nowrap') ? 'none' : 'block';
                    }
                }
            });
        });
    });

    // Control de gap (slider)
    const flexGapSlider = document.getElementById('flexGap');
    if (flexGapSlider) {
        flexGapSlider.addEventListener('input', function () {
            const value = parseInt(this.value);
            flexState.gap = value;
            document.getElementById('flexGapValue').textContent = value + 'px';
            viewport.style.gap = value + 'px';
            updateFlexCode(flexState);
        });
    }

    // Controles de items del Flexbox (order y flex-grow)
    setupFlexItemControls(flexItems);

    // Estado inicial
    updateFlexCode(flexState);
}

function setupFlexItemControls(items) {
    // Control de order
    const orderGroup = document.querySelector('#flexbox-playground .btn-group[data-prop="flexOrder"]');
    if (orderGroup) {
        const targetIndex = parseInt(orderGroup.dataset.target);
        const targetItem = items[targetIndex];
        const buttons = orderGroup.querySelectorAll('.ctrl-btn');

        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                setActiveButton(buttons, this);
                if (targetItem) {
                    targetItem.style.order = this.dataset.value;
                }
            });
        });
    }

    // Control de flex-grow
    const growGroup = document.querySelector('#flexbox-playground .btn-group[data-prop="flexGrow"]');
    if (growGroup) {
        const targetIndex = parseInt(growGroup.dataset.target);
        const targetItem = items[targetIndex];
        const buttons = growGroup.querySelectorAll('.ctrl-btn');

        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                setActiveButton(buttons, this);
                if (targetItem) {
                    targetItem.style.flexGrow = this.dataset.value;
                    // Si flex-grow > 0, mostrar visualmente que se expande
                    const val = parseInt(this.dataset.value);
                    targetItem.style.flexBasis = val > 0 ? '0px' : '';
                }
            });
        });
    }
}

function updateFlexCode(state) {
    const display = document.getElementById('flexCodeDisplay');
    if (!display) return;

    let code = `.flex-container {\n    display: flex;\n    flex-direction: ${state.flexDirection};\n    justify-content: ${state.justifyContent};\n    align-items: ${state.alignItems};`;

    if (state.flexWrap !== 'nowrap') {
        code += `\n    flex-wrap: ${state.flexWrap};`;
        code += `\n    align-content: ${state.alignContent};`;
    } else {
        code += `\n    flex-wrap: nowrap;`;
    }

    code += `\n    gap: ${state.gap}px;\n}`;

    display.innerHTML = `<pre><code>${escapeHtml(code)}</code></pre>`;
}

// ============================================================
// GRID PLAYGROUND
// ============================================================
function setupGridPlayground() {
    const viewport = document.getElementById('gridViewport');
    if (!viewport) return;

    const gridState = {
        gridColumns: '1fr 1fr 1fr',
        gridRows: 'auto',
        justifyItems: 'stretch',
        alignItems: 'stretch',
        gap: 8
    };

    let gridItems = viewport.querySelectorAll('.grid-item');

    // Control de botones del contenedor
    const gridBtnGroups = document.querySelectorAll('#grid-playground .controls-panel > .control-group:not([id]) .btn-group');
    gridBtnGroups.forEach(group => {
        const prop = group.dataset.prop;
        const buttons = group.querySelectorAll('.ctrl-btn');
        
        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                setActiveButton(buttons, this);
                const value = this.dataset.value;
                gridState[prop] = value;

                if (prop === 'gridColumns') {
                    viewport.style.gridTemplateColumns = value;
                } else if (prop === 'gridRows') {
                    viewport.style.gridTemplateRows = value;
                } else {
                    viewport.style[prop] = value;
                }

                updateGridCode(gridState);
            });
        });
    });

    // Control de gap (slider)
    const gridGapSlider = document.getElementById('gridGap');
    if (gridGapSlider) {
        gridGapSlider.addEventListener('input', function () {
            const value = parseInt(this.value);
            gridState.gap = value;
            document.getElementById('gridGapValue').textContent = value + 'px';
            viewport.style.gap = value + 'px';
            updateGridCode(gridState);
        });
    }

    // Controles de items del Grid (grid-column y grid-row)
    setupGridItemControls(gridItems);

    // Estado inicial
    updateGridCode(gridState);
}

function setupGridItemControls(items) {
    // Control de grid-column
    const colGroup = document.querySelector('#grid-playground .btn-group[data-prop="gridColumn"]');
    if (colGroup) {
        const targetIndex = parseInt(colGroup.dataset.target);
        const targetItem = items[targetIndex];
        const buttons = colGroup.querySelectorAll('.ctrl-btn');

        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                setActiveButton(buttons, this);
                if (targetItem) {
                    const value = this.dataset.value;
                    if (value === 'auto') {
                        targetItem.style.gridColumn = '';
                        targetItem.style.gridColumnStart = '';
                        targetItem.style.gridColumnEnd = '';
                    } else {
                        targetItem.style.gridColumn = value;
                    }
                }
            });
        });
    }

    // Control de grid-row
    const rowGroup = document.querySelector('#grid-playground .btn-group[data-prop="gridRow"]');
    if (rowGroup) {
        const targetIndex = parseInt(rowGroup.dataset.target);
        const targetItem = items[targetIndex];
        const buttons = rowGroup.querySelectorAll('.ctrl-btn');

        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                setActiveButton(buttons, this);
                if (targetItem) {
                    const value = this.dataset.value;
                    if (value === 'auto') {
                        targetItem.style.gridRow = '';
                        targetItem.style.gridRowStart = '';
                        targetItem.style.gridRowEnd = '';
                    } else {
                        targetItem.style.gridRow = value;
                    }
                }
            });
        });
    }
}

function updateGridCode(state) {
    const display = document.getElementById('gridCodeDisplay');
    if (!display) return;

    const code = `.grid-container {\n    display: grid;\n    grid-template-columns: ${state.gridColumns};\n    grid-template-rows: ${state.gridRows};\n    justify-items: ${state.justifyItems};\n    align-items: ${state.alignItems};\n    gap: ${state.gap}px;\n}`;

    display.innerHTML = `<pre><code>${escapeHtml(code)}</code></pre>`;
}

// ============================================================
// FUNCIONES COMPARTIDAS
// ============================================================

// Activar un botón y desactivar los demás, con ARIA
function setActiveButton(allButtons, activeBtn) {
    allButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
    });
    activeBtn.classList.add('active');
    activeBtn.setAttribute('aria-pressed', 'true');
}

// ============================================================
// PISTAS DE EJERCICIOS
// ============================================================
function setupExerciseHints() {
    const exerciseBtns = document.querySelectorAll('.btn-exercise');
    exerciseBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const exercise = this.dataset.exercise;
            const hint = document.getElementById(`hint-${exercise}`);
            if (hint) {
                const isHidden = hint.hasAttribute('hidden');
                hint.toggleAttribute('hidden');
                this.textContent = isHidden ? 'Ocultar solución' : 'Mostrar solución';
            }
        });
    });
}

// ============================================================
// COPIAR CSS
// ============================================================
function setupCopyButtons() {
    const flexCopyBtn = document.getElementById('flexCopyBtn');
    if (flexCopyBtn) {
        flexCopyBtn.addEventListener('click', function () {
            const code = document.querySelector('#flexCodeDisplay code');
            if (code) copyToClipboard(code.textContent, this);
        });
    }

    const gridCopyBtn = document.getElementById('gridCopyBtn');
    if (gridCopyBtn) {
        gridCopyBtn.addEventListener('click', function () {
            const code = document.querySelector('#gridCodeDisplay code');
            if (code) copyToClipboard(code.textContent, this);
        });
    }
}

function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = '✅ ¡Copiado!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('copied');
        }, 2000);
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        btn.textContent = '✅ ¡Copiado!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = '📋 Copiar CSS';
            btn.classList.remove('copied');
        }, 2000);
    });
}

// ============================================================
// UTILIDADES
// ============================================================
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/*
 * 🧪 EJERCICIOS SUGERIDOS:
 * 1. Agrega un botón "Reset" que restaure todos los valores iniciales
 * 2. Añade control para align-self en un elemento individual
 * 3. Permite cambiar el número de elementos en el playground
 * 4. Agrega una cuadrícula de ejemplos de grid implícito (grid-auto-flow)
 */

/* Fin de script.js */
