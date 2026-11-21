# La ciencia que no se ve: IA en la gestión del CONICET

Proyecto integrador final de Prácticas Profesionalizantes (HTML5 y CSS, ISFT N.º 130) y propuesta interactiva de Ciencia, Tecnología y Sociedad (Etapa 2 de la carpeta digital).

Integrantes: Attadia, Agustín; Villalva, Ernesto; Wilwert, Facundo; Wilwert, Leandro.

## Descripción

Sitio multimedia que explica cómo el CONICET usa inteligencia artificial para recomendar especialistas que evalúan becas e ingresos a la carrera de investigador, y lo analiza desde Ciencia, Tecnología y Sociedad. Público: estudiantes y público general.

## Estructura

```
la-ciencia-que-no-se-ve/
├── index.html              Inicio
├── linea-de-tiempo.html    Cuatro hitos desplegables
├── mapa-conceptual.html    Actores, tecnologías, impactos y conceptos CTS
├── infografia.html         Cinco pasos desplegables
├── podcast.html            Reproductor y transcripción
├── blog.html               Cuatro entradas
├── reflexion.html          Preguntas abiertas, cuestionario y formulario
├── fuentes.html            Fuentes con filtro por tipo
├── acerca.html             Equipo, recursos y declaración de uso de IA
├── 404.html                Página de error
├── css/estilos.css
├── js/sitio.js
├── img/                    Ilustraciones SVG propias, logo, favicon y og-portada.png
└── audio/                  Audio del podcast
```

## Cómo verlo en la computadora

No necesita servidor: abrir `index.html` con doble clic funciona, porque el sitio no usa `fetch`. Si se prefiere, se puede abrir la carpeta en Visual Studio Code con la extensión Live Server.

## Publicación en GitHub Pages (opcional)

1. Crear un repositorio público, por ejemplo `la-ciencia-que-no-se-ve`.
2. Subir todo el contenido de esta carpeta, con `index.html` en la raíz del repositorio.
3. En Settings, sección Pages, elegir publicar desde la rama principal (`main`), carpeta raíz. La interfaz puede cambiar: seguir la documentación oficial de GitHub Pages.
4. Abrir `https://TU-USUARIO.github.io/la-ciencia-que-no-se-ve/` y probar enlaces, formularios y la página 404.

## Dónde se cumple cada requisito del enunciado

| Requisito | Dónde |
|---|---|
| 5 o más páginas conectadas, menú consistente | 9 páginas más la 404; mismo menú en todas, con `aria-current` |
| HTML5 semántico y metadatos | `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`; `title` único, `description`, `viewport`, `canonical` y Open Graph en cada página |
| CSS externo organizado | `css/estilos.css`, en 8 bloques numerados, con variables |
| Flexbox y Grid | Flexbox en cabecera, menú, filtros y pie; Grid en portada, tarjetas y mapa |
| Responsive | Media queries a 800 px y 480 px; unidades flexibles y `min()` |
| Imágenes y recursos | SVG propios con `alt` descriptivo; inventario en `acerca.html` |
| Formularios | `reflexion.html`: cuestionario y formulario de comentarios, con labels, tipos, ayudas y validaciones; se aclara que no hay backend |
| Multimedia | Audio del podcast con transcripción |
| Accesibilidad | Enlace para saltar al contenido, foco visible, contraste verificado, labels y `alt`, información no dependiente solo del color |
| Buenas prácticas | Rutas relativas, nombres sin espacios, código indentado y comentado |
| Error y publicación | `404.html` y esta guía |

## Pruebas realizadas

- Estructura de las nueve páginas y la 404: un solo `h1`, identificadores sin repetir, todas las imágenes con `alt`, títulos únicos y ningún enlace interno roto.
- Contraste de los colores principales calculado con la fórmula de WCAG: todos superan 4,5:1 para texto.
- Sintaxis de `sitio.js` revisada con Node.

**Pendientes del equipo:** recorrer el sitio solo con el teclado, probarlo en un celular real y en más de un navegador, y correr los validadores HTML y CSS del W3C.
