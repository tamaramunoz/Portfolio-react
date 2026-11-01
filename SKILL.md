# SKILL: Guía de Arquitectura y Estándares para el Portafolio de React

## 1. Contexto y Propósito del Proyecto
Este repositorio (`portfolio-tamara-munoz`) es un portafolio web personal enfocado en mostrar proyectos de desarrollo frontend (aplicaciones en React, herramientas interactivas, interfaces responsivas y mini-apps)[cite: 7]. El objetivo al modificar o añadir código es mantener la limpieza, la accesibilidad visual, la legibilidad y la consistencia con el ecosistema actual.

## 2. Stack Tecnológico & Dependencias Clave
- **Core:** React 16.13.1 (usando Componentes Funcionales y React Hooks)[cite: 6, 7].
- **Enrutamiento:** `react-router-dom` (^5.1.2) para la navegación multipágina dentro de la SPA[cite: 6].
- **Estilos:** CSS3 puro utilizando **Flexbox** (sin frameworks de CSS pesados como Tailwind o Bootstrap a menos que se indique lo contrario)[cite: 7].
- **Herramientas de Build / Scripts:** `react-scripts` (Create React App clásico)[cite: 6].
- **Testing:** `@testing-library/react` y `@testing-library/jest-dom`[cite: 6].

## 3. Estructura y Reglas de Desarrollo
- **Enfoque de Componentes:** Priorizar componentes funcionales limpios y modulares apoyados por Hooks (`useState`, `useEffect`, etc.).
- **Estilos modulares:** Mantener la consistencia con el diseño visual actual (interfaces coloridas, intuitivas y orientadas a la experiencia de usuario, inspiradas en los proyectos expuestos como Tetris, Burger Queen y apps inclusivas)[cite: 7].
- **Compatibilidad:** Respetar la configuración de navegadores definida en el `browserslist` del proyecto para producción y desarrollo[cite: 6].

## 4. Instrucciones para la IA antes de Modificar Código
1. **Analiza el entorno:** Revisa siempre las importaciones existentes y la versión de React (16.x), evitando utilizar características exclusivas de versiones muy modernas (como React 18/19 Server Components) que no apliquen a este entorno.
2. **Respeta los estilos:** No introduzcas librerías externas de CSS o UI a menos que se solicite explícitamente; mantén los estilos basados en CSS/Flexbox[cite: 7].
3. **Optimización:** Asegúrate de que cualquier componente nuevo mantenga la aplicación ligera y funcional tanto para web de escritorio como para visualización móvil.