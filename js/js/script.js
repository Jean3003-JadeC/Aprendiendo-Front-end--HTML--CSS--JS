// script.js - JavaScript personalizado para el módulo de JavaScript
// 
// 📖 PROPÓSITO: Demostraciones interactivas de DOM, Fetch API, Promesas
//   y delegación de eventos. ¡Modifica el código y experimenta!
//
// 💡 APRENDE: Cada sección demuestra un concepto fundamental de JS.
//   Abre la consola (F12) para ver los mensajes de depuración.

document.addEventListener('DOMContentLoaded', function () {
    console.log('⚡ Módulo de JavaScript cargado correctamente');
    console.log('💡 Abre la consola (F12 > Console) para ver mensajes');

    setupTodoList();
    setupEventDelegation();
    setupFetchApi();
    setupAsyncDemo();
    setupLegacyDemo();

    console.log('✅ Todos los módulos cargados. ¡Experimenta!');
});

// ============================================================
// DEMO 1: TO-DO LIST
// ============================================================
function setupTodoList() {
    const input = document.getElementById('todoInput');
    const addBtn = document.getElementById('todoAddBtn');
    const list = document.getElementById('todoList');
    const count = document.getElementById('todoCount');
    const clearBtn = document.getElementById('todoClearBtn');

    if (!input || !addBtn || !list) return;

    addBtn.addEventListener('click', () => addTodo());
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addTodo();
    });

    function addTodo() {
        const text = input.value.trim();
        if (!text) {
            input.style.borderColor = '#dc3545';
            setTimeout(() => { input.style.borderColor = ''; }, 1000);
            return;
        }

        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${escapeHtml(text)}</span>
            <button class="todo-delete" aria-label="Eliminar">✕</button>
        `;
        list.appendChild(li);
        input.value = '';
        input.focus();
        updateTodoCount();

        li.style.animation = 'none';
        li.offsetHeight;
        li.style.animation = 'slideIn 0.25s ease';
    }

    list.addEventListener('click', function (e) {
        const deleteBtn = e.target.closest('.todo-delete');
        if (deleteBtn) {
            const item = deleteBtn.closest('.todo-item');
            if (item) {
                item.style.opacity = '0';
                item.style.transform = 'translateX(20px)';
                setTimeout(() => {
                    item.remove();
                    updateTodoCount();
                }, 200);
            }
        }
    });

    if (clearBtn) {
        clearBtn.addEventListener('click', function () {
            if (list.children.length === 0) return;
            list.innerHTML = '';
            updateTodoCount();
        });
    }

    function updateTodoCount() {
        const total = list.querySelectorAll('.todo-item').length;
        if (total === 0) {
            count.innerHTML = '<span class="empty-message">✨ No hay tareas. ¡Agrega una!</span>';
        } else {
            count.textContent = `${total} tarea${total !== 1 ? 's' : ''}`;
        }
    }

    updateTodoCount();
}

// ============================================================
// DEMO 2: EVENT DELEGATION
// ============================================================
function setupEventDelegation() {
    const list = document.getElementById('delegationList');
    const output = document.getElementById('delegationOutput');
    if (!list || !output) return;

    list.addEventListener('click', function (e) {
        const item = e.target.closest('li');
        if (!item) return;

        list.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
        item.classList.add('selected');

        const text = item.textContent.trim();
        const category = item.dataset.category;
        const difficulty = item.dataset.difficulty;

        const categoryEmojis = { frontend: '🎨', backend: '🖥️', database: '🗄️' };
        const difficultyStars = { facil: '⭐', medio: '⭐⭐', dificil: '⭐⭐⭐' };

        output.innerHTML = `
            <strong>📌 ${text}</strong><br>
            Categoría: ${categoryEmojis[category] || '📁'} ${category}<br>
            Dificultad: ${difficultyStars[difficulty] || '❓'} ${difficulty}
        `;

        console.log(`🖱️ Clic en: "${text}" | Categoría: ${category} | Dificultad: ${difficulty}`);
    });
}

// ============================================================
// DEMO 3: FETCH API - RANDOM USER GENERATOR
// ============================================================
function setupFetchApi() {
    const btn = document.getElementById('fetchUserBtn');
    const loading = document.getElementById('fetchLoading');
    const error = document.getElementById('fetchError');
    const result = document.getElementById('fetchResult');
    const codeDisplay = document.getElementById('fetchCodeDisplay');

    if (!btn || !loading || !error || !result) return;

    btn.addEventListener('click', async function () {
        btn.disabled = true;
        btn.textContent = '⏳ Cargando...';
        result.hidden = true;
        error.hidden = true;
        loading.hidden = false;

        try {
            const response = await fetch('https://randomuser.me/api/');

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data = await response.json();
            const user = data.results[0];

            console.log('✅ Usuario obtenido:', user.name.first, user.name.last);

            document.getElementById('userAvatar').src = user.picture.large;
            document.getElementById('userName').textContent = `${user.name.title}. ${user.name.first} ${user.name.last}`;
            document.getElementById('userEmail').textContent = `✉️ ${user.email}`;
            document.getElementById('userLocation').textContent = `📍 ${user.location.city}, ${user.location.country}`;
            document.getElementById('userPhone').textContent = `📞 ${user.phone}`;

            loading.hidden = true;
            result.hidden = false;

            // Mostrar solo código de ejemplo + confirmación
            if (codeDisplay) {
                codeDisplay.innerHTML = `<pre><code>async function obtenerUsuario() {
    try {
        const res = await fetch('https://randomuser.me/api/');
        if (!res.ok) throw new Error('Error HTTP');
        const data = await res.json();
        return data.results[0];
    } catch (error) {
        console.error('Error:', error);
    }
}

// ✅ Último usuario: ${user.name.first} ${user.name.last}</code></pre>`;
            }

        } catch (err) {
            console.error('❌ Error en fetch:', err.message);
            loading.hidden = true;
            error.hidden = false;
            error.textContent = `❌ Error: ${err.message}. ¿Tienes conexión a internet?`;
        } finally {
            btn.disabled = false;
            btn.textContent = '🎲 Generar usuario';
        }
    });
}

// ============================================================
// DEMO 4: PROMESAS Y ASYNC - SIMULACIÓN VISUAL
// ============================================================
function setupAsyncDemo() {
    const seriesBtn = document.getElementById('asyncSeriesBtn');
    const parallelBtn = document.getElementById('asyncParallelBtn');
    const raceBtn = document.getElementById('asyncRaceBtn');
    const resetBtn = document.getElementById('asyncResetBtn');
    const result = document.getElementById('asyncResult');

    if (!seriesBtn || !parallelBtn || !raceBtn || !resetBtn || !result) return;

    const activeIntervals = new Map();

    function simularOperacion(id, tiempo, nombre) {
        if (activeIntervals.has(id)) {
            clearInterval(activeIntervals.get(id));
            activeIntervals.delete(id);
        }

        return new Promise((resolve) => {
            const fill = document.getElementById(`track${id}`);
            const status = document.getElementById(`status${id}`);

            if (!fill || !status) { resolve(nombre); return; }

            fill.style.width = '0%';
            status.textContent = '⏳ En progreso...';
            status.className = 'track-status';

            const startTime = Date.now();

            const timer = setInterval(() => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min((elapsed / (tiempo * 1000)) * 100, 100);
                fill.style.width = `${progress}%`;

                if (progress >= 100) {
                    clearInterval(timer);
                    activeIntervals.delete(id);
                    fill.style.width = '100%';
                    status.textContent = `✅ ${nombre} completado`;
                    status.className = 'track-status done';
                    resolve(nombre);
                }
            }, 50);

            activeIntervals.set(id, timer);
        });
    }

    function resetTracks() {
        for (const [id, timer] of activeIntervals) {
            clearInterval(timer);
        }
        activeIntervals.clear();

        for (let i = 1; i <= 3; i++) {
            const fill = document.getElementById(`track${i}`);
            const status = document.getElementById(`status${i}`);
            if (fill) fill.style.width = '0%';
            if (status) {
                status.textContent = '⏳ Esperando...';
                status.className = 'track-status';
            }
        }
    }

    seriesBtn.addEventListener('click', async function () {
        resetTracks();
        result.textContent = '⏳ Ejecutando en serie... (1s + 2s + 1.5s = ~4.5s total)';
        result.style.borderLeftColor = '#f7df1e';

        const start = Date.now();
        await simularOperacion(1, 1, 'Op1');
        await simularOperacion(2, 2, 'Op2');
        await simularOperacion(3, 1.5, 'Op3');
        const total = ((Date.now() - start) / 1000).toFixed(1);

        result.textContent = `✅ Serie completada en ${total}s`;
        result.style.borderLeftColor = '#198754';
        console.log(`⏱️ Serie: ${total}s`);
    });

    parallelBtn.addEventListener('click', async function () {
        resetTracks();
        result.textContent = '⏩ Ejecutando en paralelo... (≈ 2s total)';
        result.style.borderLeftColor = '#0d6efd';

        const start = Date.now();
        await Promise.all([
            simularOperacion(1, 1, 'Op1'),
            simularOperacion(2, 2, 'Op2'),
            simularOperacion(3, 1.5, 'Op3')
        ]);
        const total = ((Date.now() - start) / 1000).toFixed(1);

        result.textContent = `✅ Paralelo completado en ${total}s`;
        result.style.borderLeftColor = '#198754';
        console.log(`⏱️ Paralelo: ${total}s`);
    });

    raceBtn.addEventListener('click', async function () {
        resetTracks();
        result.textContent = '🏁 Corriendo... la primera en terminar gana';
        result.style.borderLeftColor = '#dc3545';

        const start = Date.now();
        const winner = await Promise.race([
            simularOperacion(1, 1, 'Op1'),
            simularOperacion(2, 2, 'Op2'),
            simularOperacion(3, 1.5, 'Op3')
        ]);
        const total = ((Date.now() - start) / 1000).toFixed(1);

        result.textContent = `🏆 ¡${winner} ganó en ${total}s!`;
        result.style.borderLeftColor = '#dc3545';
        console.log(`🏁 Ganador: ${winner} (${total}s)`);
    });

    resetBtn.addEventListener('click', function () {
        resetTracks();
        result.textContent = '💡 Elige un modo de ejecución para comenzar';
        result.style.borderLeftColor = '#f7df1e';
    });
}

// ============================================================
// DEMO 5: Botón de clics (legacy)
// ============================================================
function setupLegacyDemo() {
    const demoBtn = document.getElementById('demo-btn');
    let clickCount = 0;

    if (demoBtn) {
        const counter = document.createElement('p');
        counter.className = 'output';
        counter.textContent = '🖱️ Haz clic en el botón para empezar';
        demoBtn.parentNode.insertBefore(counter, demoBtn.nextSibling);

        demoBtn.addEventListener('click', function () {
            clickCount++;
            this.textContent = `Clics: ${clickCount}`;
            counter.textContent = `✅ Has hecho ${clickCount} clic${clickCount !== 1 ? 's' : ''}`;
            const colors = ['#f7df1e', '#0d6efd', '#198754', '#dc3545', '#6f42c1'];
            this.style.backgroundColor = colors[clickCount % colors.length];
        });
    }

    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.style.cursor = 'pointer';
        titulo.addEventListener('click', function () {
            this.textContent = this.textContent === 'Lecciones de JavaScript'
                ? '⚡ ¡Has hecho clic en el título!'
                : 'Lecciones de JavaScript';
        });
    }
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
 * 🧪 EJERCICIOS AVANZADOS SUGERIDOS:
 * 1. Agrega persistencia al To-Do List usando localStorage
 * 2. Modifica la demo de Fetch para traer 5 usuarios y mostrarlos en cards
 * 3. Agrega un control para cancelar una promesa en medio de la ejecución
 * 4. Crea un filtro visual para la delegación de eventos (mostrar solo ciertas categorías)
 * 5. Implementa una barra de progreso que se llene mientras se cargan múltiples fetch
 */

/* Fin de script.js */
