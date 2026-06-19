# Temario Completo de CSS

## 1. Introducción a CSS
- 1.1. Qué es CSS y su historia
- 1.2. Cómo se aplica CSS a HTML (inline, interno, externo)
- 1.3. La cascada, específico y herencia
- 1.4. Herramientas de desarrollo y depuración

## 2. Sintaxis Básica
- 2.1. Selectores y bloques de declaraciones
- 2.2. Propiedades y valores
- 2.3. Comentarios en CSS
- 2.4. Unidades de medida: absolutas (px, pt, pc, in, mm, cm) y relativas (%, em, rem, vh, vw, vmin, vmax, ex, ch)

## 3. Selectores
- 3.1. Selector universal (*)
- 3.2. Selector de tipo (etiqueta)
- 3.3. Selector de clase (.)
- 3.4. Selector de ID (#)
- 3.5. Selector de atributo [attr], [attr=value], [attr~=value], [attr|=value], [attr^=value], [attr$=value], [attr*=value]
- 3.6. Selectores de combinación: descendente ( ), hijo (>), hermano adyacente (+), hermano general (~)
- 3.7. Selectores pseudo-clases: :hover, :focus, :active, :visited, :link, :checked, :disabled, :enabled, :nth-child(), :nth-last-child(), :nth-of-type(), :first-child, :last-child, :only-child, :empty, :not(), :lang()
- 3.8. Selectores pseudo-elementos: ::before, ::after, ::first-letter, ::first-line, ::selection, ::placeholder

## 4. Modelo de Caja (Box Model)
- 4.1. Contenido, padding, border, margin
- 4.2. Box-sizing: content-box vs border-box
- 4.3. Colapsado de márgenes
- 4.4. Propiedades individuales: width, height, min-width, max-width, min-height, max-height
- 4.5. Padding y margin en shorthand
- 4.6. Border: width, style, color y shorthand

## 5. Fondos y Bordes
- 5.1. Background-color y background-image
- 5.2. Background-repeat, background-position, background-attachment
- 5.3. Background-size (cover, contain, longitudes)
- 5.4. Background-origin y background-clip
- 5.5. Gradientes: lineales (linear-gradient), radiales (radial-gradient), repetidos
- 5.6. Múltiples fondos
- 5.7. Border-radius para esquinas redondeadas
- 5.8. Border-image (introducción básica)

## 6. Texto y Fuentes
- 6.1. Color y opacity
- 6.2. Direccionalidad: direction y unicode-bidi
- 6.3. Espaciado de letras (letter-spacing) y palabras (word-spacing)
- 6.4. Transformación de texto: text-transform (uppercase, lowercase, capitalize, none)
- 6.5. Decoración de texto: text-decoration (underline, overline, line-through, blink) y estilo
- 6.6. Sombra de texto: text-shadow
- 6.7. Alineación de texto: text-align (left, right, center, justify, start, end)
- 6.8. Indentación de primera línea: text-indent
- 6.9. Interlineado: line-height
- 6.10. Familias de fuentes: font-family, fuentes websafe y @font-face
- 6.11. Peso de fuente: font-weight (normal, bold, bolder, lighter, 100-900)
- 6.12. Estilo de fuente: font-style (normal, italic, oblique)
- 6.13. Variante de fuente: font-variant (small-caps)
- 6.14. Tamaño de fuente: font-size y shorthand font
- 6.15. Estiramiento y ajuste de fuentes (opcional)

## 7. Diseño y Posicionamiento
- 7.1. Propiedad posición: static, relative, absolute, fixed, sticky
- 7.2. Desplazamiento con top, right, bottom, left
- 7.3. Z-index y contexto de apilamiento
- 7.4. Float y clear
- 7.5. Display: block, inline, inline-block, none, contents, table, table-row, table-cell, flex, grid
- 7.6. Overflow: visible, hidden, scroll, auto, y variantes overflow-x/y
- 7.7. Visibility: visible, hidden, collapse
- 7.8. Clip y shape-outside (introducción)

## 8. Flexbox
- 8.1. Conceptos: contenedor flex y elementos flex
- 8.2. Propiedades del contenedor: flex-direction, flex-wrap, flex-flow, justify-content, align-items, align-content, gap
- 8.3. Propiedades de los elementos: order, flex-grow, flex-shrink, flex-basis, flex, align-self
- 8.4. Ejemplos prácticos: barras de navegación, centrado, distribución de espacio, columnas iguales

## 9. Grid Layout
- 9.1. Conceptos: contenedor grid y elementos grid
- 9.2. Definir filas y columnas: grid-template-rows, grid-template-columns, grid-auto-rows, grid-auto-columns
- 9.3. Línea de_grid y nombres de líneas
- 9.4. Áreas de plantilla: grid-template-areas y grid-area
- 9.5. Justificación y alineación: justify-items, align-items, justify-content, align-content, place-items, place-content
- 9.6. Propiedades de los elementos: grid-column-start, grid-column-end, grid-row-start, grid-row-end, grid-column, grid-row, grid-area, justify-self, align-self, place-self
- 9.6. Espaciado: gap, row-gap, column-gap
- 9.7. Grid implícito vs explícito
- 9.8. Diseños responsivos con grid y media queries
- 9.9. Ejemplos: layouts de revista, galerías, formularios alineados

## 10. Diseño Responsivo y Media Queries
- 10.1. Viewport y metaetiqueta viewport
- 10.2. Unidades relativas al viewport (vw, vh, vmin, vmax)
- 10.3. Media queries: sintaxis, tipos de medios (all, print, screen), características (width, height, orientation, resolution, aspect-ratio, etc.)
- 10.4. Breakpoints comunes y enfoque mobile-first
- 10.5. Técnicas: fluido, adaptable, responsive
- 10.6. Uso de picture y srcset para imágenes responsivas
- 10.7. Menús responsivos y off-canvas (introducción)

## 11. Transiciones y Animaciones
- 11.1. Transiciones: transition-property, transition-duration, transition-timing-function, transition-delay, shorthand transition
- 11.2. Funciones de tiempo: linear, ease, ease-in, ease-out, ease-in-out, step, cubic-bezier
- 11.3. Animaciones keyframes: @keyframes, animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state, shorthand animation
- 11.4. Animaciones de carga, hover effects, y ejemplos prácticos

## 12. Transformaciones
- 12.1. Transformaciones 2D: translate, rotate, scale, skew, matrix
- 12.2. Transformaciones 3D: translateZ, rotateX, rotateY, rotateZ, perspective, transform-style, backface-visibility
- 12.3. Propiedad transform-origin
- 12.4. Combinación de transformaciones

## 13. Variables CSS (Custom Properties)
- 13.1. Definición: --nombre: valor
- 13.2. Uso: var(--nombre, fallback)
- 13.3. Alcance y herencia
- 13.4. Manipulación con JavaScript
- 13.5. Temas y diseño de sistemas

## 14. Funciones CSS
- 14.1. Funciones de color: rgb(), rgba(), hsl(), hsla(), hwb(), lab(), lch(), color()
- 14.2. Funciones de forma: circle(), ellipse(), polygon(), inset()
- 14.3. Funciones de posición: url()
- 14.4. Funciones de transformación: perspective()
- 14.5. Funciones de tamaño: min(), max(), clamp()
- 14.6. Otras: attr(), counter(), counters(), etc.

## 15. Gestión de Herramidas y Preprocesadores
- 15.1. Preprocesadores: Sass/SCSS, Less, Stylus (sintaxis básica, variables, nesting, mixins, funciones)
- 15.2. Postprocesadores: Autoprefixer, cssnano
- 15.3. Metodologías: BEM, SMACSS, OOCSS, Atomic Design
- 15.4. CSS en JS (styled-components, emotion) – visión general
- 15.5. Herramientas de linting y formato: stylelint, prettier

## 16. Buenas Prácticas y Optimización
- 16.1. Organización del código: modularidad, komentarios, nomenclatura
- 16.2. Minificación y concatenación
- 16.3. Uso de sprites y fuentes iconográficas (SVG icons, Font Awesome)
- 16.4. Reducción de repentinencia y especificidad excesiva
- 16.5. Accesibilidad en CSS: contraste, foco visible, reducción de movimiento
- 16.6. Pruebas cruzadas de navegadores y polyfills
- 16.7. Optimización de renderizado: will-change, contain, GPU acceleration

## 17. Recursos y Próximos Pasos
- 17.1. MDN Web Docs, CSS-Tricks, W3C specifications
- 17.2. Libros y cursos recomendados
- 17.3. Proyectos de práctica: recrear layouts conocidos, tema personal, animaciones complejas
- 17.4. Cómo continuar con JavaScript y frameworks

---
*Este temario sirve como guía de estudio. Cada tema puede complementarse con ejemplos, ejercicios y referencias adicionales.*