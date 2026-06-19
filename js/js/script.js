// script.js - JavaScript personalizado para el módulo de JavaScript
// 
// 📖 PROPÓSITO: Demostraciones interactivas de variables, funciones,
//   objetos, arrays, strings, DOM, Fetch API y Promesas.
//
// 💡 APRENDE: Cada sección demuestra un concepto fundamental de JS.
//   Abre la consola (F12) para ver los mensajes de depuración.

document.addEventListener('DOMContentLoaded', function () {
    console.log('⚡ Módulo de JavaScript cargado correctamente');
    console.log('💡 Abre la consola (F12 > Console) para ver mensajes');

    setupExerciseHints();
    setupObjectDemo();
    setupArrayDemo();
    setupStringDemo();
    setupTodoList();
    setupEventDelegation();
    setupFetchApi();
    setupAsyncDemo();

    console.log('✅ Todos los módulos cargados. ¡Experimenta!');
});

// ============================================================
// UTILIDADES
// ============================================================
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ============================================================
// EJERCICIOS: MOSTRAR PISTAS
// ============================================================
function setupExerciseHints() {
    document.querySelectorAll('.btn-exercise').forEach(btn => {
        btn.addEventListener('click', function () {
            const exercise = this.dataset.exercise;
            const hint = document.getElementById('hint-' + exercise);
            if (hint) {
                hint.hidden = !hint.hidden;
                this.textContent = hint.hidden ? 'Mostrar pista' : 'Ocultar pista';
            }
        });
    });
}

// ============================================================
// DEMO 1: OBJETOS - GENERADOR DE PERSONAS
// ============================================================
function setupObjectDemo() {
    const btn = document.getElementById('objectDemoBtn');
    const output = document.getElementById('objectDemoOutput');
    if (!btn || !output) return;

    const nombres = ["Ana", "Carlos", "María", "Luis", "Sofía", "Pedro", "Elena", "Diego"];
    const ciudades = ["Madrid", "Buenos Aires", "México DF", "Bogotá", "Lima", "Santiago", "Quito"];
    const profesiones = ["Desarrolladora", "Diseñadora", "Ingeniera", "Docente", "Arquitecta", "Médica"];

    btn.addEventListener('click', function () {
        const persona = {
            nombre: nombres[Math.floor(Math.random() * nombres.length)],
            edad: Math.floor(Math.random() * 40) + 18,
            ciudad: ciudades[Math.floor(Math.random() * ciudades.length)],
            profesion: profesiones[Math.floor(Math.random() * profesiones.length)],
            saludar: function () {
                return `¡Hola! Soy ${this.nombre}, ${this.profesion} de ${this.ciudad}.`;
            }
        };

        // Destructuración
        const { nombre, edad, profesion } = persona;

        output.innerHTML = `🧑 ${nombre}, ${edad} años — ${profesion}\n🔍 Objeto completo:\n${JSON.stringify(persona, null, 2)}\n💬 ${persona.saludar()}`;

        console.log('🎲 Objeto generado:', persona);
        console.log('💬', persona.saludar());
    });
}

// ============================================================
// DEMO 2: ARRAYS - MAP / FILTER / REDUCE
// ============================================================
function setupArrayDemo() {
    const display = document.getElementById('arrayDisplay');
    const mapBtn = document.getElementById('arrayMapBtn');
    const filterBtn = document.getElementById('arrayFilterBtn');
    const reduceBtn = document.getElementById('arrayReduceBtn');
    const resetBtn = document.getElementById('arrayResetBtn');
    if (!display) return;

    const numerosOriginales = [1, 2, 3, 4, 5];
    let numerosActuales = [...numerosOriginales];

    function actualizarDisplay(arr, etiqueta) {
        display.textContent = `📊 ${etiqueta}: [${arr.join(', ')}]`;
    }

    function resetArray() {
        numerosActuales = [...numerosOriginales];
        actualizarDisplay(numerosActuales, 'Original');
    }

    if (mapBtn) {
        mapBtn.addEventListener('click', function () {
            const dobles = numerosActuales.map(n => n * 2);
            actualizarDisplay(dobles, 'map(x2)');
            console.log('✨ Array doblado:', dobles);
        });
    }

    if (filterBtn) {
        filterBtn.addEventListener('click', function () {
            const pares = numerosActuales.filter(n => n % 2 === 0);
            actualizarDisplay(pares, 'filter(pares)');
            console.log('🔢 Números pares:', pares);
        });
    }

    if (reduceBtn) {
        reduceBtn.addEventListener('click', function () {
            const suma = numerosActuales.reduce((acc, n) => acc + n, 0);
            display.textContent = `➕ reduce(suma): ${suma}`;
            console.log('➕ Suma total:', suma);
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', resetArray);
    }

    resetArray();
}

// ============================================================
// DEMO 3: STRINGS - TRANSFORMADOR DE TEXTO
// ============================================================
function setupStringDemo() {
    const input = document.getElementById('stringInput');
    const output = document.getElementById('stringOutput');
    const upperBtn = document.getElementById('stringUpperBtn');
    const lowerBtn = document.getElementById('stringLowerBtn');
    const countBtn = document.getElementById('stringCountBtn');
    const reverseBtn = document.getElementById('stringReverseBtn');
    if (!input || !output) return;

    function getTexto() {
        return input.value || '(vacío)';
    }

    if (upperBtn) {
        upperBtn.addEventListener('click', function () {
            const texto = getTexto();
            output.textContent = `🔠 MAYÚSCULAS: ${texto.toUpperCase()}`;
        });
    }

    if (lowerBtn) {
        lowerBtn.addEventListener('click', function () {
            const texto = getTexto();
            output.textContent = `🔡 minúsculas: ${texto.toLowerCase()}`;
        });
    }

    if (countBtn) {
        countBtn.addEventListener('click', function () {
            const texto = getTexto();
            output.textContent = `🔢 Longitud: ${texto.length} caracteres | Sin espacios: ${texto.replace(/\s/g, '').length} caracteres`;
        });
    }

    if (reverseBtn) {
        reverseBtn.addEventListener('click', function () {
            const texto = getTexto();
            const invertido = texto.split('').reverse().join('');
            output.textContent = `🔄 Invertido: ${invertido}`;
        });
    }
}

// ============================================================
// DEMO: TO-DO LIST (DOM)
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
// DEMO: EVENT DELEGATION
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
            📌 ${text}\n
            Categoría: ${categoryEmojis[category] || '📁'} ${category}\n
            Dificultad: ${difficultyStars[difficulty] || '❓'} ${difficulty}
        `;

        console.log(`🖱️ Clic en: "${text}" | Categoría: ${category} | Dificultad: ${difficulty}`);
    });
}

// ============================================================
// DEMO: FETCH API - RANDOM USER GENERATOR
// ============================================================
function setupFetchApi() {
    const btn = document.getElementById('fetchUserBtn');
    const loading = document.getElementById('fetchLoading');
    const errorEl = document.getElementById('fetchError');
    const result = document.getElementById('fetchResult');
    const codeDisplay = document.getElementById('fetchCodeDisplay');

    if (!btn || !loading || !errorEl || !result) return;

    btn.addEventListener('click', async function () {
        btn.disabled = true;
        btn.textContent = '⏳ Cargando...';
        result.hidden = true;
        errorEl.hidden = true;
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
            errorEl.hidden = false;
            errorEl.textContent = `❌ Error: ${err.message}. ¿Tienes conexión a internet?`;
        } finally {
            btn.disabled = false;
            btn.textContent = '🎲 Generar usuario';
        }
    });
}

// ============================================================
// DEMO: PROMESAS Y ASYNC - SIMULACIÓN VISUAL
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
        result.textContent = '▶️ Serie: (1s + 2s + 1.5s = ~4.5s total)';
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
        result.textContent = '⏩ Paralelo: todas a la vez (~2s total)';
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
        result.textContent = '💡 Elige un modo de ejecución';
        result.style.borderLeftColor = '#f7df1e';
    });
}

/*
 * 🧪 EJERCICIOS AVANZADOS SUGERIDOS:
 * 1. Agrega persistencia al To-Do List usando localStorage
 * 2. Modifica la demo de Fetch para traer 5 usuarios con Promise.all
 * 3. Crea tu propia demo de objetos con propiedades calculadas
 */

/* Fin de script.js */
