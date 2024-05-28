# Conceptos basicos del HTML y CSS

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