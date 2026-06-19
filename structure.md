# Estructura del Proyecto (Actualizada)

Este proyecto está organizado en módulos independientes para cada tecnología frontal. Cada módulo contiene su propio temario, ejemplos, hojas de estilo y scripts, lo que permite estudiar cada tema de forma aislada o integrada mediante el hub central.

```
Aprendiendo Front-end/
│
├─ index.html                 # Hub de acceso a los cuatro módulos
├─ readme.md                  # Descripción detallada del proyecto (GitHub)
├─ structure.md               # Este archivo: explicación de la organización
│
├─ html/                      # Módulo de HTML
│   ├─ index.html             # Página de inicio del módulo HTML
│   ├─ temario.md             # Temario completo de HTML
│   ├─ css/
│   │   └─ style.css          # Hoja de estilo para ejemplos de HTML
│   └─ js/
│       └─ script.js          # JavaScript para ejemplos de HTML
│
├─ css/                       # Módulo de CSS
│   ├─ index.html             # Página de inicio del módulo CSS
│   ├─ temario.md             # Temario completo de CSS
│   ├─ css/
│   │   └─ style.css          # Hoja de estilo para ejemplos de CSS
│   └─ js/
│       └─ script.js          # JavaScript para ejemplos de CSS
│
├─ js/                        # Módulo de JavaScript
│   ├─ index.html             # Página de inicio del módulo JavaScript
│   ├─ temario.md             # Temario completo de JavaScript
│   ├─ css/
│   │   └─ style.css          # Hoja de estilo para ejemplos de JavaScript
│   └─ js/
│       └─ script.js          # JavaScript para ejemplos de JavaScript
│
└─ bootstrap/                 # Módulo de Bootstrap 5.3.8
    ├─ index.html             # Página de inicio del módulo Bootstrap
    ├─ temario.md             # Temario completo de Bootstrap 5.3.8
    ├─ css/
    │   └─ style.css          # Hoja de estilo para ejemplos de Bootstrap
    └─ js/
        └─ script.js          # JavaScript para ejemplos de Bootstrap
```

### Detalle de cada módulo

- **html/**
  - `index.html`: bienvenida al módulo HTML con breve descripción.
  - `temario.md`: lista exhaustiva de temas (etiquetas, formularios, multimedia, semántica, accesibilidad, buenas prácticas).
  - `css/style.css`: hoja de estilo vacía/comentada para añadir estilos particulares de los ejemplos HTML.
  - `js/script.js`: script vacío/comentado para añadir interacciones de ejemplo.

- **css/**
  - `index.html`: bienvenida al módulo CSS.
  - `temario.md`: temario completo (selectores, modelo de caja, flexbox, grid, tipografía, fondos, transiciones, animaciones, variables, metodologías, optimización).
  - `css/style.css`: estilos para los ejemplos de CSS.
  - `js/script.js`: scripts para manipular ejemplos (por ejemplo, toggles de clases).

- **js/**
  - `index.html`: bienvenida al módulo JavaScript.
  - `temario.md`: temario completo (sintaxis, DOM, asincronía, APIs web, módulos, testing, seguridad, visión de frameworks).
  - `css/style.css`: estilos para visualizar resultados de ejemplos JS.
  - `js/script.js`: scripts de ejemplo y ejercicios.

- **bootstrap/**
  - `index.html`: bienvenida al módulo Bootstrap.
  - `temario.md`: temario completo de Bootstrap 5.3.8 (instalación, rejilla, componentes, utilidades API, personalización, buenas prácticas).
  - `css/style.css`: estilos personalizados que sobrescriban o extiendan Bootstrap.
  - `js/script.js`: scripts para inicializar componentes o demostrar el uso de los plugins JS.

Cada módulo está pensado para ser una unidad de aprendizaje autónoma; puedes abrir cualquiera de los `index.html` directamente en el navegador y comenzar a experimentar.

---
*Esta estructura facilita el aprendizaje progresivo: comienza con HTML, continúa con CSS, luego JavaScript y finalmente Bootstrap para ver cómo se integran todas las tecnologías en proyectos reales.*