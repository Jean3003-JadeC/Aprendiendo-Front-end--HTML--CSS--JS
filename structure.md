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
- `index.html`: explicación de qué es HTML + ejemplo de estructura básica.
- `temario.md`: 12 secciones cubriendo desde introducción hasta recursos avanzados.
- `css/style.css`: estilos con breadcrumb naranja, secciones tipo card, bloques de código oscuros, footer y responsive.
- `js/script.js`: cambia el color del título al hacer clic (demostración simple de eventos).

### 🎨 css/
- `index.html`: explicación de qué es CSS + ejemplo de selectores.
- `temario.md`: 17 secciones cubriendo desde sintaxis hasta preprocesadores.
- `css/style.css`: incluye ejemplos de clases utilitarias comentadas, estilos de formularios y tablas.
- `js/script.js`: escala el título al hacer clic (demostración de manipulación de estilos con JS).

### ⚡ js/
- `index.html`: explicación de qué es JS + botón interactivo con contador de clics.
- `temario.md`: 18 secciones cubriendo desde fundamentos hasta frameworks y proyecto final.
- `css/style.css`: tema oscuro para fatiga visual reducida, botón interactivo estilizado.
- `js/script.js`: contador de clics con cambio de color, manipulación del DOM, ejercicios sugeridos.

### 🅱️ bootstrap/
- `index.html`: incluye grid de 3 columnas, botones de todos los colores, card, alerta informativa.
- `temario.md`: 10 secciones cubriendo desde instalación hasta integración con frameworks.
- `css/style.css`: usa variables CSS para personalizar Bootstrap, sin `!important`.
- `js/script.js`: demo que crea y muestra un modal de Bootstrap dinámicamente con la API nativa.

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