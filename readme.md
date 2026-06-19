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
| **html/** | Etiquetas, atributos, formularios, multimedia, semántica, accesibilidad y buenas prácticas. | Estructura de documentos web, uso correcto de elementos, formularios accesibles, SEO básico. |
| **css/** | Selectores, modelo de caja, flexbox, grid, tipografía, fondos, transiciones, animaciones, variables CSS, metodologías (BEM, SMACSS), optimización y temas. | Diseño visual profesional, maquetación responsive, efectos avanzados, mantenimiento escalable de estilos. |
| **js/** | Sintaxis, tipos, control de flujo, funciones, objetos, arrays, DOM, eventos, asincronía (promesas, async/await), APIs web (fetch, storage, geolocation, etc.), módulos, testing, seguridad y visión de frameworks. | Programación lógica, interactividad en el navegador, consumo de APIs, código mantenible y pruebas automatizadas. |
| **bootstrap/** | Instalación, sistema de grid, componentes (alertas, botones, navbar, modales, carrusel, etc.), utilidades API, personalización con Sass y buenas prácticas. | Construcción rápida de interfaces responsivas y modernas con Bootstrap desde CDN. |

## 🚀 Cómo usar este proyecto

1. **Clona o descarga el repositorio**  
   ```bash
   git clone <URL-del-repositorio>
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

## 🛡️ Licencia

Este proyecto es de uso libre para fines educativos. Si lo utilizas o lo compartes, por favor menciona la fuente.

---

*¡Happy coding!* 🚀