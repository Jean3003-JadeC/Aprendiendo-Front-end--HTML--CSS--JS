# Aprendiendo Front-end

**Un proyecto práctico y progresivo para aprender desarrollo frontend desde cero**, organizado en módulos independientes para HTML, CSS, JavaScript y Bootstrap 5.3.8. Cada módulo contiene su propio temario, ejemplos interactivos, hojas de estilo y scripts, permitiendo estudiar cada tecnología de forma aislada o integrada.

## ✨ Características

- **4 módulos progresivos**: HTML → CSS → JavaScript → Bootstrap
- **Navegación entre módulos**: breadcrumbs y enlaces para moverse fácilmente
- **Ejemplos interactivos**: botones, contadores, modales y demos funcionales
- **Temarios completos**: cada módulo incluye un `temario.md` con todos los temas
- **CSS personalizado por módulo**: cada tecnología tiene su propia paleta de colores y estilo
- **Bootstrap desde CDN**: carga rápida sin necesidad de descargar archivos
- **Diseño responsivo**: funciona en escritorio, tablet y móvil

## 📁 Estructura del proyecto

```
Aprendiendo Front-end/
│
├─ index.html                 # Hub de acceso a los cuatro módulos (rediseñado)
├─ readme.md                  # Este archivo: descripción del proyecto
├─ structure.md               # Diagrama y explicación de la organización
│
├─ html/                      # Módulo de HTML (color: naranja)
│   ├─ index.html             # Página de inicio con ejemplos básicos
│   ├─ temario.md             # Temario completo de HTML
│   ├─ css/
│   │   └─ style.css          # Hoja de estilo para ejemplos de HTML
│   └─ js/
│       └─ script.js          # JavaScript para ejemplos de HTML
│
├─ css/                       # Módulo de CSS (color: azul)
│   ├─ index.html             # Página de inicio con ejemplos básicos
│   ├─ temario.md             # Temario completo de CSS
│   ├─ css/
│   │   └─ style.css          # Hoja de estilo para ejemplos de CSS
│   └─ js/
│       └─ script.js          # JavaScript para ejemplos de CSS
│
├─ js/                        # Módulo de JavaScript (color: amarillo, tema oscuro)
│   ├─ index.html             # Página de inicio con botón interactivo
│   ├─ temario.md             # Temario completo de JavaScript
│   ├─ css/
│   │   └─ style.css          # Hoja de estilo para ejemplos de JavaScript
│   └─ js/
│       └─ script.js          # JavaScript con ejemplos funcionales
│
└─ bootstrap/                 # Módulo de Bootstrap 5.3.8 (color: púrpura)
    ├─ index.html             # Página de inicio con grid y componentes
    ├─ temario.md             # Temario completo de Bootstrap 5.3.8
    ├─ css/
    │   └─ style.css          # Estilos personalizados que extienden Bootstrap
    └─ js/
        └─ script.js          # Demo interactiva con modales de Bootstrap
```

### Descripción de cada módulo

| Módulo | Qué contiene | Qué aprenderás |
|--------|--------------|----------------|
| **html/** | **12 secciones**: Introducción, Sintaxis, Encabezados/Párrafos, Formato de Texto, Enlaces, Multimedia, Listas, Tablas, Formularios, Semántica, Buenas Prácticas, Proyecto Final. | Estructura de documentos web, etiquetas semánticas, formularios con validación nativa, tablas con colspan/rowspan, multimedia (video/audio/iframe), accesibilidad ARIA. |
| **css/** | **14 secciones**: Introducción, Sintaxis, Selectores, Box Model, Fondos/Bordes, Texto/Fuentes, Posicionamiento, Flexbox, Grid, Responsive, Transiciones/Animaciones, Transformaciones, Variables CSS, Proyecto Final. Playground interactivo de Flexbox y Grid. | Diseño visual profesional, maquetación responsive, efectos con transiciones y animaciones, layout con Flexbox y Grid, variables CSS para temas dinámicos. |
| **js/** | **13 secciones**: Introducción, Sintaxis/Fundamentos, Estructuras de Control, Funciones, Objetos, Arrays, Cadenas de Texto, Manejo de Errores, Asincronía/Promesas, DOM/Eventos, BOM/Fetch, Módulos/Buenas Prácticas, Proyecto Final. Demos: objetos, arrays, strings, todo list, fetch API, async serie/paralelo. | Programación lógica con variables, funciones y objetos; interactividad en el DOM con eventos; consumo de APIs con fetch y async/await; buenas prácticas y módulos ES6. |
| **bootstrap/** | **11 secciones**: Introducción, Instalación (CDN/npm/descarga), Grid, Contenido (tipografía, imágenes, tablas), Componentes (botones, badges, alertas, progress, spinners), Navbar, Carrusel, Acordeón/Tabs, Modal, Utilidades (espaciado, color, flex, bordes, texto), Proyecto Final. | Construcción rápida de interfaces responsivas con grid de 12 columnas, componentes preconstruidos (navbar, carrusel, modal, acordeón, tabs), clases de utilidad para espaciado, colores y flex. |

## 🚀 Cómo usar este proyecto

1. **Clona o descarga el repositorio**  
   ```bash
   git clone https://github.com/Jean3003-JadeC/Aprendiendo-Front-end--HTML--CSS--JS
   cd Aprendiendo Front-end
   ```

2. **Abre el hub**  
   Abre `index.html` en tu navegador (Chrome, Firefox, Edge o Safari). Verás tarjetas modernas para acceder a cada módulo.

3. **Navega a un módulo**  
   Haz clic en la tarjeta del tema que deseas estudiar (HTML, CSS, JavaScript o Bootstrap). Cada módulo tiene su propia navegación (breadcrumb) para volver al hub.

4. **Consulta el temario**  
   Dentro de cada carpeta encontrarás el archivo `temario.md`. Ese documento detalla **todos los temas y subtemas** que deberías cubrir para dominar esa tecnología. Úsalo como checklist de estudio.

5. **Edita y experimenta**  
   - Los archivos `css/style.css` y `js/script.js` de cada módulo tienen ejemplos funcionales y comentarios pedagógicos.  
   - Modifica los valores, guarda los cambios y recarga la página para ver el efecto inmediato.  
   - Cada archivo JS incluye ejercicios sugeridos al final (en comentarios).

6. **Sigue el orden recomendado**  
   HTML → CSS → JavaScript → Bootstrap. Cada módulo asume conocimientos del anterior.

## 🎯 Objetivo pedagógico

Este proyecto está diseñado para que **aprendas haciendo**:
- Cada módulo tiene ejemplos que puedes ver y modificar
- Los archivos están llenos de comentarios que explican el "qué", "cómo" y "por qué"
- La estructura de carpetas (cada módulo con sus propios `css/` y `js/`) te ayuda a entender la separación de responsabilidades
- Los ejercicios sugeridos te retan a aplicar lo aprendido

## 📚 Recursos recomendados

- **MDN Web Docs** – https://developer.mozilla.org/
- **W3Schools** – https://www.w3schools.com/
- **Bootstrap Documentation** – https://getbootstrap.com/docs/5.3/
- **YouTube**: canales como *Traversy Media*, *The Net Ninja*, *FreeCodeCamp.org*
- **Libros**: *HTML & CSS: Diseño y construcción de sitios web* (Jon Duckett), *JavaScript: La guía definitiva* (David Flanagan), *CSS Secrets* (Lea Verou)

## 👤 Autor

**Jean Paul Abarca Ccama** — _Jade Core_

## 🛡️ Licencia

Este proyecto es de uso libre para fines educativos. Si lo utilizas o lo compartes, por favor menciona la fuente.

---

*¡Happy coding!* 🚀