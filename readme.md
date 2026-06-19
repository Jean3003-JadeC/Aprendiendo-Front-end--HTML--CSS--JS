# Aprendiendo Front-end

**Un proyecto práctico y progresivo para aprender desarrollo frontend desde cero**, organizado en módulos independientes para HTML, CSS, JavaScript y Bootstrap 5.3.8. Cada módulo contiene su propio temario, ejemplos, hojas de estilo y scripts, permitiendo estudias cada tecnología de forma aislada o integrada.

## 📁 Estructura del proyecto

```
Aprendiendo Front-end/
│
├─ index.html                 # Hub de acceso a los cuatro módulos
├─ readme.md                  # Este archivo: descripción del proyecto
├─ structure.md               # Diagrama y explicación de la organización
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

### Descripción de cada módulo

| Módulo | Qué contiene | Qué aprenderás |
|--------|--------------|----------------|
| **html/** | Etiquetas, atributos, formularios, multimedia, semántica, accesibilidad y buenas prácticas. | Estructura de documentos web, uso correcto de elementos, formularios accesibles, SEO básico. |
| **css/** | Selectores, modelo de caja, flexbox, grid, tipografía, fondos, transiciones, animaciones, variables CSS, metodologías (BEM, SMACSS), optimización y temas. | Diseño visual profesional, maquetación responsive, efectos avanzados, mantenimiento escalable de estilos. |
| **js/** | Sintaxis, tipos, control de flujo, funciones, objetos, arrays, DOM, eventos, asincronía (promesas, async/await), APIs web (fetch, storage, geolocation, etc.), módulos, testing, seguridad y visión de frameworks. | Programación lógica, interactividad en el navegador, consumo de APIs, código mantenible y pruebas automatizadas. |
| **bootstrap/** | Instalación, sistema de rejilla, componentes (alertas, botones, navbar, modales, carrusel, etc.), utilidades API, personalización con Sass y buenas prácticas. | Construcción rápida de interfaces responsivas y modernas sin escribir CSS desde cero. |

## 🚀 Cómo usar este proyecto

1. **Clona o descarga el repositorio**  
   ```bash
   git clone <URL-del-repositorio>
   cd Aprendiendo Front-end
   ```

2. **Abre el hub**  
   Abre `index.html` en tu navegador (Chrome, Firefox, Edge o Safari). Verás tarjetas para acceder a cada módulo.

3. **Navega a un módulo**  
   Haz clic en la tarjeta del tema que deseas estudiar (HTML, CSS, JavaScript o Bootstrap). Se abrirá su `index.html` con una breve introducción.

4. **Consulta el temario**  
   Dentro de cada carpeta de tema encontrarás el archivo `temario.md`. Ese documento detalla **todos los temas y subtemas** que deberías cubrir para dominar esa tecnología. Úsalo como checklist de estudio.

5. **Edita y experimenta**  
   - Los archivos `css/style.css` y `js/script.js` de cada módulo están listos para que añadas tus propios estilos y lógica.  
   - Guarda los cambios y recarga la página para ver el efecto inmediato.  
   - Puedes crear más archivos (por ejemplo, ejemplos específicos) dentro de las subcarpetas `css/` y `js/` de cada módulo siguiendo la misma convención.

6. **Bootstrap desde CDN (opcional)**  
   Los enlaces a Bootstrap en los archivos `index.html` de los módulos apuntan a la CDN oficial (https://cdn.jsdelivr.net/npm/bootstrap@5.3.8). Si prefieres usar una copia local, descarga Bootstrap 5.3.8 y coloca los archivos en:
   - `bootstrap/css/bootstrap.min.css`
   - `bootstrap/js/bootstrap.bundle.min.js`  
   Luego actualiza los enlaces en los `index.html` correspondientes.

## 📚 Recursos recomendados

- **MDN Web Docs** – https://developer.mozilla.org/
- **W3Schools** – https://www.w3schools.com/
- **Bootstrap Documentation** – https://getbootstrap.com/docs/5.3/
- **YouTube**: canales como *Traversy Media*, *The Net Ninja*, *FreeCodeCamp.org*.
- **Libros**: *HTML & CSS: Diseño y construcción de sitios web* (Jon Duckett), *JavaScript: La guía definitiva* (David Flanagan), *CSS Secrets* (Lea Verou).

## 🛡️ Licencia

Este proyecto es de uso libre para fines educativos. Si lo utilizas o lo compartes, por favor menciona la fuente.

---

*¡Happy coding!*  