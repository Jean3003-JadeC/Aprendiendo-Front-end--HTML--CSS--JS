# Estructura del Proyecto (Optimizada)

Este proyecto está organizado en módulos independientes para cada tecnología frontend. Cada módulo contiene su propio temario, ejemplos interactivos, hojas de estilo y scripts, permitiendo estudiar cada tema de forma aislada o integrada mediante el hub central.

## Árbol de directorios

```
Aprendiendo Front-end/
│
├─ index.html                 # Hub de acceso (rediseñado con hero + cards + stats)
├─ readme.md                  # Descripción detallada del proyecto
├─ structure.md               # Este archivo: explicación de la organización
│
├─ html/                      # Módulo de HTML (tema: naranja)
│   ├─ index.html             # Bienvenida + ejemplo básico de estructura HTML
│   ├─ temario.md             # Temario completo de HTML
│   ├─ css/
│   │   └─ style.css          # Estilos con breadcrumb, secciones, código, responsive
│   └─ js/
│       └─ script.js          # Demo interactiva: clic en título cambia color
│
├─ css/                       # Módulo de CSS (tema: azul)
│   ├─ index.html             # Bienvenida + ejemplo básico de selectores CSS
│   ├─ temario.md             # Temario completo de CSS
│   ├─ css/
│   │   └─ style.css          # Estilos con ejemplos de clases utilitarias
│   └─ js/
│       └─ script.js          # Demo interactiva: clic en título escala elemento
│
├─ js/                        # Módulo de JavaScript (tema: amarillo, fondo oscuro)
│   ├─ index.html             # Bienvenida + botón contador de clics interactivo
│   ├─ temario.md             # Temario completo de JavaScript
│   ├─ css/
│   │   └─ style.css          # Estilos en tema oscuro para mejor contraste
│   └─ js/
│       └─ script.js          # Múltiples demos: botón contador, manipulación DOM
│
└─ bootstrap/                 # Módulo de Bootstrap 5.3.8 (tema: púrpura)
    ├─ index.html             # Bienvenida + grid + botones + card + modal demo
    ├─ temario.md             # Temario completo de Bootstrap 5.3.8
    ├─ css/
    │   └─ style.css          # Estilos personalizados que extienden Bootstrap
    └─ js/
        └─ script.js          # Demo interactiva: modal creado dinámicamente con JS
```

## Detalle de cada módulo

### 📄 html/
- `index.html`: **12 secciones** en orden progresivo: Introducción, Sintaxis, Encabezados/Párrafos, Formato de Texto, Enlaces, Multimedia, Listas, Tablas, Formularios, Semántica, Buenas Prácticas, Proyecto Final.
- `temario.md`: 12 secciones cubriendo desde introducción hasta recursos avanzados.
- `css/style.css`: estilos con breadcrumb naranja, secciones tipo card, bloques de código oscuros, footer y responsive.
- `js/script.js`: ejercicios interactivos con pistas toggleables, validación de formularios, galería de imágenes.

### 🎨 css/
- `index.html`: **14 secciones** en orden progresivo: Introducción, Sintaxis, Selectores, Box Model, Fondos/Bordes, Texto/Fuentes, Posicionamiento, Flexbox, Grid, Responsive, Transiciones/Animaciones, Transformaciones, Variables CSS, Proyecto Final. Incluye playgrounds interactivos de Flexbox y Grid.
- `temario.md`: 17 secciones cubriendo desde sintaxis hasta preprocesadores.
- `css/style.css`: estilos para playgrounds, controles con botones y sliders, paneles de código, animaciones @keyframes.
- `js/script.js`: playground Flexbox y Grid interactivos con controles en vivo, CSS generado dinámicamente, botón copiar al portapapeles.

### ⚡ js/
- `index.html`: **13 secciones** en orden progresivo: Introducción, Sintaxis/Fundamentos, Estructuras de Control, Funciones, Objetos, Arrays, Cadenas de Texto, Manejo de Errores, Asincronía/Promesas, DOM/Eventos, BOM/Fetch, Módulos/Buenas Prácticas, Proyecto Final. Incluye To-Do List, Event Delegation, Fetch API y Async Serie/Paralelo.
- `temario.md`: 18 secciones cubriendo desde fundamentos hasta frameworks y proyecto final.
- `css/style.css`: tema oscuro, estilos para todo list, delegación de eventos, fetch API, tracks de progreso asíncrono, demos de objetos/arrays/strings.
- `js/script.js`: demos interactivas de objetos (generador de personas), arrays (map/filter/reduce), strings (transformador de texto), To-Do List, Event Delegation, Fetch API (randomuser.me), Async Serie/Paralelo/Race.

### 🅱️ bootstrap/
- `index.html`: **11 secciones** en orden progresivo: Introducción, Instalación, Grid, Contenido (tipografía/imágenes/tablas), Componentes (botones/badges/alertas/progress/spinners), Navbar, Carrusel, Acordeón/Tabs, Modal, Utilidades (espaciado/color/flex/bordes/texto), Proyecto Final. Navbar sticky-top funcional con dropdown.
- `temario.md`: 10 secciones cubriendo desde instalación hasta integración con frameworks.
- `css/style.css`: estilos para bloques de código oscuros, toggles de código, ejercicios, scroll-margin-top para anclas.
- `js/script.js`: modal dinámico con JS, tooltips Bootstrap, spinner interactivo, botones de pista para ejercicios.

## Mejoras implementadas (v2.0)

| Aspecto | Antes | Ahora |
|---------|-------|-------|
| **Hub** | CSS inline básico | Hero con gradiente, tarjetas con iconos y etiquetas, stats |
| **Navegación** | Solo enlace desde hub | Breadcrumbs en todos los módulos + footer con volver |
| **Contenido** | Placeholders vacíos | Explicaciones + ejemplos de código + demos interactivas |
| **Bootstrap** | CDN comentado, sin estilos | CDN activo, grid funcional, componentes visibles |
| **Archivos** | Faltaban 2 archivos en bootstrap | Todos los archivos creados y funcionales |
| **CSS/JS** | Código mínimo/comentado | Código completo con comentarios pedagógicos y ejercicios |
| **Documentación** | Desactualizada | Actualizada con nueva estructura y características |

## Flujo de aprendizaje recomendado

```
HTML → CSS → JavaScript → Bootstrap
  │       │          │            │
  │       │          │            └─ Integración de todo lo anterior
  │       │          └─ Interactividad y lógica
  │       └─ Diseño y estilo visual
  └─ Estructura y semántica
```

Cada módulo está pensado para ser una unidad de aprendizaje autónoma; puedes abrir cualquiera de los `index.html` directamente en el navegador. Sin embargo, se recomienda seguir el orden de arriba para una comprensión progresiva.

---
*Esta estructura facilita el aprendizaje progresivo: comienza con HTML para la estructura, continúa con CSS para el diseño, luego JavaScript para la interactividad y finalmente Bootstrap como herramienta de productividad.*

**Autor:** Jean Paul Abarca Ccama — _Jade Core_