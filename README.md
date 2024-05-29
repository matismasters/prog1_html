# Conceptos basicos del HTML/CSS/JavaScript

## ¿Qué es HTML?

HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la sigla que corresponde a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto. Es un estándar que sirve de referencia del software que conecta con la elaboración de páginas web en sus diferentes versiones, define una estructura básica y un código (denominado código HTML) para la definición de contenido de una página web, como texto, imágenes, videos, juegos, entre otros.

Vamos a entender por `documento HTML` o `página` a un archivo que contiene código HTML. Este código es interpretado por un navegador web, que se encarga de mostrar el contenido de la página al usuario.

## ¿Qué es una etiqueta?

Las etiquetas son fragmentos de código que se utilizan para *estructurar* un documento HTML. Estos elementos se utilizan para definir el contenido y dar formato a los documentos HTML. Se componen de un nombre que se encierra entre corchetes angulares `<etiqueta>`, y que se coloca al principio y al final de la parte del texto a la que se quiere aplicar la etiqueta.

```html
<nombreEtiqueta atributo="valor">Contenido</nombreEtiqueta>
```

## ¿Qué es CSS?

CSS es un lenguaje usado para definir la presentación de un documento estructurado escrito en HTML. Esto incluye aspectos como el diseño, la presentación, los colores y las fuentes del documento.

## Tags básicos de HTML

- `<!DOCTYPE html>`: Define el tipo de documento y la versión de HTML.
- `<html>`: Define el documento HTML. Todo el contenido de la página va dentro de este elemento.
- `<head>`: Contiene información sobre el documento. No se muestra en la página. 
- `<title>`: Define el título del documento. Aparece en la pestaña del navegador.
- `<script>`: Define un script de JavaScript.
- `<link>`: Define la relación entre el documento actual y un recurso externo.
- `<body>`: Contiene todo el contenido que se muestra en la página web.
- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`: Definen los títulos y subtítulos de la página.
- `<p>`: Define un párrafo.
- `<a href='/direccion/a/otra/pagina.html'>Texto</a>`: Define un enlace. El atributo `href` indica la dirección a la que se dirige el enlace.
- `<img src='direccion/de/la/imagen.jpg'>`: Inserta una imagen. El atributo `src` indica la dirección de la imagen.
- `<ul>`, `<ol>`, `<li>`: Definen listas sin ordenar (`<ul>`), listas ordenadas (`<ol>`) y elementos de la lista (`<li>`).
- `<table>`, `<tr>`, `<td>`: Definen una tabla, una fila y una celda, respectivamente.
- `<div>`: Define una división o sección en un documento HTML. Se utiliza para agrupar elementos en bloques.
- `<span>`: Define una sección en línea en un documento HTML. Se utiliza para aplicar estilos a partes del texto.

## ¿Qué es un selector de CSS?

Para poder asignar estilos a los elementos de un documento HTML, el navegador debe saber a qué elementos se aplicarán dichos estilos. Para ello, se utilizan los selectores de CSS, que son patrones que se utilizan para seleccionar los elementos a los que se les aplicarán los estilos. Existen diferentes tipos de selectores, como los selectores de tipo, los selectores de clase, los selectores de ID, los selectores de atributo, entre otros. Un selector puede *seleccionar* uno o varios elementos de un documento HTML.

## Propiedades de CSS

Las propiedades de CSS son los atributos que se utilizan para definir los estilos de los elementos de un documento HTML. Cada propiedad tiene un valor que indica cómo se aplicará el estilo. Algunas propiedades comunes son:

- `color`: Define el color del texto.
- `background-color`: Define el color de fondo de un elemento.
- `font-family`: Define la fuente del texto.
- `font-size`: Define el tamaño de la fuente.
- `text-align`: Define la alineación del texto.
- `border`: Define el borde de un elemento.
- `padding`: Define el espacio entre el contenido y el borde de un elemento.
- `margin`: Define el espacio entre los elementos.
- `width`: Define el ancho de un elemento.
- `height`: Define la altura de un elemento.
- `display`: Define cómo se muestra un elemento.
- `position`: Define la posición de un elemento.
- `float`: Define la posición de un elemento respecto a otros elementos.
- `z-index`: Define el orden de apilamiento de los elementos.
- `opacity`: Define la opacidad de un elemento.
- `transform`: Define una transformación en un elemento.

## Ejemplos de selectores de CSS

- Selector por nombre de etiqueta: `p { color: red; }`
- Selector por clase: `.clase { color: blue; }`
- Selector por ID: `#id { color: green; }`
- Selector por atributo: `input[type='text'] { background-color: yellow; }`

## Clases e IDs en HTML

Las clases y los IDs son atributos de las etiquetas html que se utilizan para facilitar la selección de los elementos mediante selectores. Estos selectores se utilizan tanto en CSS como en JavaScript para aplicar estilos o comportamientos a los elementos de la página. 

La diferencia entre una clase y un ID es que una clase puede ser utilizada por varios elementos, mientras que un ID debe ser único en la página. Una etiqueta puede tener multiples clases, pero solo un ID.

```html
<p class="clase">Este párrafo tiene la clase "clase".</p>

<p id="nombrePersona">Este párrafo tiene el ID "nombrePersona".</p>

<p id="nombrePersona" class="clase">Este párrafo tiene el ID "nombrePersona" y la clase "clase".</p>
```

## Flexbox

Flexbox es un modelo de diseño que permite crear diseños complejos y alineaciones de elementos de forma rapida y flexible. Se basa en contenedores flexibles y elementos flexibles. Los contenedores flexibles se crean con la propiedad `display: flex`, y los elementos flexibles se crean con la propiedad `flex`.

Hay varias formas de alinear elementos con Flexbox, como `justify-content` y `align-items`. Por ejemplo, para centrar elementos horizontal y verticalmente en un contenedor, se puede utilizar el siguiente código:

```css
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
}

.elemento {
  flex: 1;
}
```

Para alinear elementos en una sola linea, se puede utilizar la propiedad `flex-direction`. Por ejemplo, para alinear elementos de forma horizontal, se puede utilizar el siguiente código:

```css
.contenedor {
  display: flex;
  flex-direction: row;
}

.elemento {
  flex: 1;
}
```

Para alinear elementos de forma vertical, se puede utilizar el siguiente código:

```css
.contenedor {
  display: flex;
  flex-direction: column;
}

.elemento {
  flex: 1;
}
```
Para más información sobre Flexbox, se puede consultar la [documentación oficial de CSS](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Conceptos_Basicos_de_Flexbox) o [Como funciona flexbox por Victor Roble](https://victorroblesweb.es/2022/09/27/como-funciona-flexbox-en-css/).

## JavaScript en el navegador

Hasta ahora hemos aprendido a escribir código JavaScript y ejecutarlo principalmente en nuestra consola de `Node.js`. 

En la consola de `Node.js` utilizamos `console.log` para imprimir mensajes, `prompt-sync` para pedirle al usuario que ingrese datos, y el código se ejecutaba de forma secuencial, desde la primer línea hasta la última y luego terminaba el programa.

```javascript
// Comienza el programa
const prompt = require('prompt-sync')();

let nombre = prompt('Ingrese su nombre: ');
console.log(`Hola, ${nombre}!`);
// Termina el programa
```

### El navegador es un entorno de desarrollo diferente:

#### Consola del navegador

Tiene su propia consola, que se puede abrir con `F12` o `Ctrl+Shift+I`, o `click derecho > Inspect`. Sin embargo, no se cuenta con que el usuario interactúe con la consola en ningún momento, por lo que si bien podemos imprimir mensajes con `console.log`, no podemos pedirle al usuario que ingrese datos.

1. Abre la consola del navegador utilizando alguno de los métodos mencionados.
2. Escribe el siguiente código en la consola y presiona Enter.

```javascript

let nombre = prompt('Ingrese su nombre: ');
let estaSeguro = confirm(`Estás seguro de que tu nombre es ${nombre}?`);
console.log(`Hola, ${nombre}!`);
```

3. Observa que el código se detiene en la línea 2, y no se ejecuta la línea 3 hasta que el usuario ingresa un nombre y presiona Enter.
4. Observa que el código se detiene en la línea 3, y no se ejecuta la línea 4 hasta que el usuario presiona "Aceptar" o "Cancelar" en la ventana emergente.
5. Escribe en la consola lo siguiente:

```javascript

alert(estaSeguro);
```

Como ves, la variable y su valor quedaron guardados y estarán disponibles hasta que recargues la página.
Cualquier cambio que hagas en la consola, se mantendrá hasta que recargues la página.

#### Objetos globales

Tenemos acceso a objetos como `document`, `window`, `navigator`, `location`, `history`, `localStorage`, `sessionStorage`, entre otros, que nos permiten interactuar con las interfaces programáticas (API) del navegador. 

1. Abre la consola del navegador utilizando alguno de los métodos mencionados.
2. Escribe el siguiente código en la consola y presiona Enter.

```javascript

console.log(document);
```
3. Observa que se imprime un objeto con información sobre el documento HTML actual. Este objeto nos permite acceder a los elementos de la página, modificar su contenido, estilos, eventos, etc. Le llamamos el DOM (Document Object Model).

4. Escribe en la consola lo siguiente:

```javascript

console.log(window);
console.log(window.height);
console.log(window.width)

```

5. Observa que se imprime un objeto con información sobre la ventana del navegador. Este objeto nos permite acceder a las propiedades y métodos del navegador, como el tamaño de la ventana, la URL actual, etc.
6. Escribe en la consola lo siguiente:

```javascript

console.log(navigator);
```

7. Observa que se imprime un objeto con información sobre el navegador. Este objeto nos permite acceder a las propiedades y métodos del navegador, como el nombre del navegador, la versión, etc.
8. Escribe en la consola lo siguiente

```javascript

console.log(location);
```

9. Observa que se imprime un objeto con información sobre la URL actual. Este objeto nos permite acceder a las propiedades y métodos de la URL, como el protocolo, el host, el pathname, etc.
10. Escribe en la consola lo siguiente:

```javascript

console.log(localStorage);
```

11. Observa que se imprime un objeto con información sobre el almacenamiento local. Este objeto nos permite almacenar datos en el navegador de forma persistente, es decir, que los datos se mantienen incluso después de cerrar la ventana del navegador.

## Eventos

El objetivo del navegador es interpretar código HTML y mostrarselo al usuario, por lo que el código JavaScript se ejecuta una vez mientras el navegador va cargando todos los recursos de la página(scripts, imágenes, estilos, etc). Una vez que el navegador termina de cargar la página, el código JavaScript se detiene y no se ejecuta más.

Históricamente, HTML y el protocolo HTTP fueron diseñados para ser estáticos, es decir, que no cambian una vez que se cargan en el navegador. 

```
+------------+           +--------------+          +-------------+
|            |   HTTP    |              |  HTTP    |             |
|  Cliente   |  ------>  |  Servidor    |  ----->  |  Servidor   |
| (Navegador)|  <------  |  Web (Nginx, |  <-----  | de Archivos |
|            |   HTML,   |  Apache)     |  HTML,   | (HTML, CSS, |
|            |  CSS, JS  |              |  CSS, JS |  JS, etc)   |
+------------+           +--------------+          +-------------+
```

---

**Ejercicio:**
- Crea los siguientes 3 archivos HTML dentro de la misma carpeta:
  - `index.html`
  - `pagina1.html`
  - `pagina2.html`

Escribe este código HTML en el archivo `index.html`:
```html

<!DOCTYPE html>
<html>
<head>
  <title>Index</title>
</head>
<body>
  <h1>Index</h1>
  <a href="pagina1.html">Página 1</a>
  <a href="pagina2.html">Página 2</a>
</body>
</html>

```

Escribe este código HTML en el archivo `pagina1.html`, y para la página 2, escribe algo similar pero con el título `Página 2` y un enlace para volver al `Index`:

```html

<!DOCTYPE html>
<html>
<head>
  <title>Página 1</title>
</head>
<body>
  <h1>Página 1</h1>
  <a href="index.html">Volver al Index</a>
</body>
</html>

```

**Ejercicio 2:**
- Crea los siguientes archivos html dentro de la misma carpeta:
  - `index.html`
  - `respuestaForm.html`

Escribe este código HTML en el archivo `index.html`:

```html 

<!DOCTYPE html>
<html>
<head>
  <title>Formulario</title>
</head>
<body>
  <h1>Formulario</h1>
  <form action="respuestaForm.html" method="GET">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
    <input type="submit" value="Enviar">
  </form>
</body>
</html>

```

Escribe este código HTML en el archivo `respuestaForm.html`:

```html

<!DOCTYPE html>
<html>
<head>
  <title>Respuesta</title>
</head>
<body>
  <h1>Respuesta</h1>
  <p>Gracias por enviar el formulario</p>
  <p>Mira la URL para ver los datos que enviaste</p>
</body>
</html>

```

### ¿Qué es un evento?

Un evento es una acción que ocurre dentro del navegador, provocada por el usuario —como hacer clic en un botón o presionar una tecla— o por procesos automáticos del navegador, como la carga de una página o cambios en el tamaño de una ventana. Estos eventos pueden ser capturados y gestionados por el código JavaScript.

### Trabajar con eventos

Cuando un evento se `dispara`, el navegador envía una señal a JavaScript con información sobre el evento. Mediante el uso de `listeners` o `escuchadores`, podemos `reaccionar` a estos eventos y ejecutar funciones específicas.

### Listeners o Escuchadores

Los `listeners` o `escuchadores` son funciones que se encargan de `escuchar` los eventos que ocurren en el navegador. Estos `escuchadores` se encargan de `reaccionar` a los eventos y `ejecutar` una función específica en respuesta a ellos.

Para definir un `escuchador`, utilizamos el método `addEventListener` sobre un elemento del DOM. Este método recibe dos argumentos: el nombre del evento que queremos escuchar y la función que se ejecutará cuando el evento ocurra.

```javascript

function elementoOnClick(evento) {
  console.log(`Se hizo clic en el elemento ${evento.target.innerText}`);
}

let elemento = document.getElementById('elemento');

elemento.addEventListener('click', elementoOnClick);
```

Si queremos `reaccionar` a eventos de cualquier elemento del DOM, podemos utilizar el objeto `document` para `escuchar` los eventos. Por ejemplo, si queremos `reaccionar` a un clic en cualquier parte de la página, podemos hacer lo siguiente:

```javascript

function documentoOnClick(evento) {
  console.log(`Se hizo clic en el documento`);
}

document.addEventListener('click', documentoOnClick);
```

### Eventos que nadie escucha

Aunque el navegador dispara eventos constantemente, si no existe código JavaScript configurado para capturar estos eventos, no tendrán un efecto observable. Sin embargo, algunos eventos sí tienen acciones predeterminadas en el navegador, como la inserción de texto en un campo o el envío de un formulario al hacer clic en un botón dentro de este. Si bien estos eventos se procesan automáticamente, nuestro código puede personalizar o anular estas acciones predeterminadas.

### Eventos del mouse ratón

Algunos de los eventos del mouse más comunes son:

- `click`: Se dispara cuando el usuario hace clic en un elemento.
- `dblclick`: Se dispara cuando el usuario hace doble clic en un elemento.
- `mouseover`: Se dispara cuando el usuario mueve el mouse sobre un elemento.
- `mouseout`: Se dispara cuando el usuario mueve el mouse fuera de un elemento.
- `mousedown`: Se dispara cuando el usuario presiona un botón del mouse.
- `mouseup`: Se dispara cuando el usuario suelta un botón del mouse.

### Eventos de teclado

Algunos de los eventos de teclado más comunes son:

- `keydown`: Se dispara cuando el usuario presiona una tecla.
- `keypress`: Se dispara cuando el usuario presiona una tecla que produce un carácter.
- `keyup`: Se dispara cuando el usuario suelta una tecla.

### Eventos de formulario

Algunos de los eventos de formulario más comunes son:

- `submit`: Se dispara cuando el usuario envía un formulario.
- `change`: Se dispara cuando el valor de un elemento cambia.
- `focus`: Se dispara cuando un elemento recibe el foco.
- `blur`: Se dispara cuando un elemento pierde el foco.

### Eventos de ventana

Algunos de los eventos de ventana más comunes son:

- `load`: Se dispara cuando la página ha terminado de cargar.
- `resize`: Se dispara cuando la ventana cambia de tamaño.
- `scroll`: Se dispara cuando el usuario desplaza la página.




