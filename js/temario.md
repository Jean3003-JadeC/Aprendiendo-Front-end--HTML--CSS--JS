# Temario Completo de JavaScript

## 1. Introducción a JavaScript
- 1.1. Qué es JavaScript y su historia
- 1.2. ECMAScript y versiones (ES5, ES6/ES2015, ES2016+)
- 1.3. Cómo se ejecuta JavaScript: motor V8, SpiderMonkey, etc.
- 1.4. Herramientas de desarrollo: consola, depurador, linter (ESLint), formateadores (Prettier)

## 2. Sintaxis y Fundamentos
- 2.1. Comentarios (//, /* */)
- 2.2. Sentencias y expresiones
- 2.3. Variables: var, let, const – alcances y hoisting
- 2.4. Tipos de datos primitivos: String, Number, Boolean, Null, Undefined, Symbol, BigInt
- 2.5. Tipos de datos complejos: Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet
- 2.6. Conversión de tipos y coerción
- 2.7. Operadores: aritméticos, de asignación, comparativos, lógicos, bit a bit, ternario, de propagación (...), de coalescencia nula (??), opcional encadenado (?.)

## 3. Estructuras de Control
- 3.1. Condicionales: if, else if, else, switch
- 3.2. Bucles: for, for...in, for...of, while, do...while
- 3.3. Sentencias de salto: break, continue, return, throw, try...catch...finally
- 3.4. Etiquetas de sentencia (labelled statements)

## 4. Funciones
- 4.1. Declaración de funciones (function nombre() { })
- 4.2. Expresiones de función y funciones anónimas
- 4.3. Parámetros y argumentos: valores por defecto, rest parameters (...args)
- 4.4. Retorno de valores
- 4.5. Ámbito léxico y closures
- 4.6. Funciones flecha (arrow functions) y diferencias con function
- 4.7. Funciones generadoras (function*)
- 4.8. Métodos de funciones: call, apply, bind
- 4.9. Funciones de orden superior y callbacks
- 4.10. Funciones puras y efectos colaterales

## 5. Objetos
- 5.1. Creación de objetos: literal {}, new Object(), constructor, Object.create()
- 5.2. Propiedades: enumerables, configurables, writables, getters y setters
- 5.3. Prototypes y herencia prototípica
- 5.4. Propiedades y métodos estáticos
- 5.5. Destructuración de objetos
- 5.6. Métodos útiles: Object.keys, Object.values, Object.entries, Object.assign, Object.freeze, Object.seal, Object.is
- 5.7. Clases ES6: sintaxis, herencia (extends), super, getters/setters, campos estáticos

## 6. Arrays
- 6.1. Creación: literal [], new Array(), Array.of, Array.from
- 6.2. Longitud y índices
- 6.3. Métodos de transformación (no mutadores): slice, concat, join, includes, indexOf, lastIndexOf, filter, map, reduce, reduceRight, flat, flatMap
- 6.4. Métodos mutadores: push, pop, shift, unshift, splice, sort, reverse, copyWithin, fill
- 6.5. Métodos de búsqueda y pruebas: every, some, find, findIndex
- 6.6. Iteración: forEach, entries, keys, values
- 6.7. Arrays tipados (TypedArrays) y buffers (ArrayBuffer, DataView) – introducción básica

## 7. Cadenas de Texto
- 7.1. Creación: literales, comillas simples, dobles, backticks (template literals)
- 7.2. Propiedad length
- 7.3. Acceso a caracteres: charAt, charCodeAt, [], codePointAt
- 7.4. Métodos de búsqueda: indexOf, lastIndexOf, includes, startsWith, endsWith
- 7.5. Métodos de extracción: slice, substring, substr
- 7.6. Métodos de transformación: toLowerCase, toUpperCase, trim, trimStart, trimEnd, padStart, padEnd, repeat
- 7.7. Plantillas literales: interpolación ${}, etiquetadas (tagged templates)
- 7.8. Expressions regulares: sintaxis básica, métodos (test, exec, match, matchAll, replace, search, split), flags

## 8. Manejo de Errores
- 8.1. Tipos de errores: Error, TypeError, ReferenceError, SyntaxError, RangeError, URIError, etc.
- 8.2. Lanzar errores: throw
- 8.3. Capturar errores: try...catch...finally
- 8.4. Errores asíncronos y manejo en promesas
- 8.5. Depuración: console.error, trace, breakpoints

## 9. Asincronía
- 9.1. Modelo de concurrency basado en event loop
- 9.2. Callbacks tradicionales y problemas del "callback hell"
- 9.3. Promesas: creación (new Promise), estados (pending, fulfilled, rejected), métodos: then, catch, finally, all, race, allSettled, any
- 9.4. Async/await: sintaxis, manejo de errores con try/catch
- 9.5. Generadores y async iterators (for await...of)
- 9.6. Trabajadores web (Web Workers) – introducción básica
- 9.7. Temporizadores: setTimeout, setInterval, clearTimeout, clearInterval, requestAnimationFrame

## 10. Document Object Model (DOM)
- 10.1. Qué es el DOM y su representación en árbol
- 10.2. Acceso al documento: document, window
- 10.3. Selección de elementos: getElementById, getElementsByClassName, getElementsByTagName, getElementsByName, querySelector, querySelectorAll
- 10.4. Navegación entre nodos: parentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling, children
- 10.5. Creación y clonación de nodos: createElement, createTextNode, createDocumentFragment, cloneNode
- 10.6. Inserción y eliminación: appendChild, insertBefore, replaceChild, removeChild, prepend, append, before, after, replaceWith, remove
- 10.7. Manipulación de atributos: getAttribute, setAttribute, hasAttribute, removeAttribute, atributos properties (className, id, src, href, etc.)
- 10.8. Clases CSS: classList (add, remove, toggle, contains, replace)
- 10.9. Estilos en línea: style property y cssText
- 10.10. Eventos: modelo de propagación (captura, objetivo, burbujeo), addEventListener, removeEventListener, objeto Event, tipos comunes (click, keydown, keyup, input, change, submit, load, DOMContentLoaded, resize, scroll, focus, blur, mouseover, mouseout, etc.)
- 10.11. Delegación de eventos
- 10.12. Formularios y validación: HTML5 constraint validation API, eventos submit y reset
- 10.13. Drag and Drop API – introducción básica
- 10.14. Canvas API – dibujo básico 2D
- 10.15. SVG manipulation mediante DOM

## 11. BOM (Browser Object Model) y APIs Web
- 11.1. Window: propiedades (innerWidth, innerHeight, devicePixelRatio, location, history, navigator, screen)
- 11.2. Location: href, protocol, host, hostname, pathname, search, hash, métodos reload, replace, assign
- 11.3. History: pushState, replaceState, popstate event
- 11.4. Navigator: userAgent, language, geolocation, mediaDevices, clipboard, serviceWorker, etc.
- 11.5. Screen
- 11.6. Timers ya vistos
- 11.7. Modalidades: alert, prompt, confirm
- 11.8. Cookies: document.cookie
- 11.9. Web Storage: localStorage y sessionStorage (setItem, getItem, removeItem, clear, key, length)
- 11.10. IndexedDB – introducción básica (abrir base de datos, object stores, transacciones)
- 11.11. Cache API y Service Workers – fundamentos para PWAs
- 11.12. Fetch API: petición GET, POST, manejo de respuesta, headers, blob, json
- 11.13. XMLHttpRequest (XHR) – legado pero útil comprender
- 11.14. WebSockets – introducción básica
- 11.15. Geolocalización API
- 11.16. Notificaciones API
- 11.17. Vibration API
- 11.18. Fullscreen API
- 11.19. Page Visibility API
- 11.20. Encoding API (TextEncoder, TextDecoder)
- 11.21. Internationalization API (Intl) para formatos de número, fecha, hora, relativa

## 12. Módulos y Organización del Código
- 12.1. Scripts tradicionales vs módulos ES6 (type="module")
- 12.2. Export e import: nombrados, default, renombrado
- 12.3. Carga dinámica de módulos: import()
- 12.4. Bundlers y herramientas: Webpack, Rollup, Parcel, Vite, esbuild
- 12.5. Organ朝和结构: características vs capas, patrones de diseño módulo revelador, factory, etc.
- 12.6. Código universal/isomorfo (Node.js y browser) – visión general

## 13. Programación Asíncrona Avanzada
- 13.1. Colas de microtareas vs macrotareas
- 13.2. Promise.allSettled, Promise.any, Promise.race
- 13.3. Pros y contras de async/await vs raw promises
- 13.4. Iteradores asíncronos y generadores asíncronos
- 13.5. Canales y comunicaciones (por ejemplo, usando MessageChannel, BroadcastChannel) – introducción
- 13.6. Límite de concurrencia: piscinas de promesas, p-limit

## 14. Manejo de Datos y Algoritmos
- 14.1. Estructuras de datos: pilas, colas, listas enlazadas, árboles (introducción básica), grafos
- 14.2. Algoritmos de ordenamiento: burbuja, selección, inserción, merge, quicksort, timsort (básico)
- 14.3. Algoritmos de búsqueda: lineal, binaria
- 14.4. Recursión y optimizacion de cola (tail call) – notas sobre limitaciones en JavaScript
- 14.5. Programación funcional: map, filter, reduce, composición, currying, pure functions, inmutabilidad
- 14.6. Librerías utilitarias: Lodash/Ramda (visión general)

## 15. Pruebas y Depuración
- 15.1.Tipos de pruebas: unitarias, de integración, end-to-end
- 15.2.Marcos de prueba: Jest, Mocha, Jasmine, Vitest
- 15.Aserciones y mocks
- 15.4.Cobertura de prueba
- 15.5.Test-driven development (TDD) y behavior-driven development (BDD)
- 15.6.Depuración en Chrome DevTools: puntos de interrupción, watch expressions, call stack, ámbito, perfil de rendimiento
- 15.7.Performance profiling y memoria
- 15.8.Linters y formateadores: ESLint, Prettier
- 15.9.TypeScript – visión geral como superset tipado
- 15.10.Source maps

## 16. Seguridad y Buenas Prácticas
- 16.1. Inyección de código (XSS): escapado de contenido, uso de textContent vs innerHTML
- 16.2. CSRF y tokens
- 16.3. Política de mismo origen (SOP) y CORS
- 16.4. Política de seguridad de contenido (CSP)
- 16.5. Subrecursos integridad (SRI)
- 16.6. Evitar eval y similares
- 16.7. Gestión segura de secrets y variables de entorno (enビルド)
- 16.8. Ataques de fuerza bruta y limitación de tasa (rate limiting) – visión para frontend
- 16.9. Privacidad y huella digital: fingerprinting, cookies de terceros, almacenamiento

## 17. Frameworks y Librerías Populares (Visión General)
- 17.1. Frameworks UI: React, Vue, Angular, Svelte – conceptos básicos y cuándo usar cada uno
- 17.2. Librerías de utilidad: lodash, date-fns, axios
- 17.3. Animaciones: GSAP, Framer Motion, Anime.js
- 17.4. Estado global: Redux, MobX, Zustand, Zustand, Recoil
- 17.5. Enrutamiento: React Router, Vue Router
- 17.6. Formularios: Formik, React Hook Form, Yup
- 17.7. Testing: React Testing Library, Cypress, Playwright
- 17.8. Build tools y metaprogramas: Babel, SWC, TypeScript

## 18. Proyecto Final y Próximos Pasos
- 18.1. Ideas de proyectos: lista de tareas, clima, chat en tiempo real, tablero Kanban, juego sencillo
- 18.2. Mejores prácticas de arquitectura: separación de preocupaciones, capas de presentación y datos
- 18.3. Integration with APIs REST y GraphQL
- 18.4. Despliegue: Netlify, Vercel, GitHub Pages, Firebase Hosting
- 18.5. Aprendizaje continuo: seguir especificación ECMAScript, seguir blogs, participar en comunidades

---
*Este temario sirve como guía de estudio. Cada tema incluye teoría, ejemplos de código y ejercicios sugeridos para practicar.*