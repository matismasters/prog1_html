/* 
  DOMContentLoaded es un evento que se dispara cuando el documento HTML ha sido 
  completamente cargado y parseado, sin esperar hojas de estilo, imágenes y 
  subtramas para finalizar la carga.
*/

const SERVICIOS = [
  { id: 25, nombre: "Chivito", precio: 350, urlImagen: "images/chivito.webp" },
  { id: 26, nombre: "Hamburguesa", precio: 250, urlImagen: "images/hamburguesa.avif" },
  { id: 27, nombre: "Pizza", precio: 150, urlImagen: "images/pizza.avif" },
  { id: 28, nombre: "Empanadas", precio: 65, urlImagen: "images/empanadas.avif" },
  { id: 29, nombre: "Faina", precio: 200, urlImagen: "images/faina.jpg" }
]

function buscarProducto(idProducto) {
  for (let i = 0; i < SERVICIOS.length; i++) {
    if (SERVICIOS[i].id == idProducto) {
      return SERVICIOS[i];
    }
  }
  return null;
}

let CARRITO = [];

function agregarProductoAlCarrito(producto) {
  let indice = buscarEnCarrito(producto);
  console.log(indice);
  if (indice === -1) {
    CARRITO.push({
      producto: producto,
      cantidad: 1
    });
  } else {
    CARRITO[indice].cantidad++;
  }
}

function eliminarProductoDelCarrito(producto) {
  let indice = buscarEnCarrito(producto);
  if (indice !== -1) {
    let nuevoCarrito = [];
    for (let i = 0; i < CARRITO.length; i++) {
      if (i !== indice) {
        nuevoCarrito.push(CARRITO[i]);
      }
    }
    CARRITO = nuevoCarrito;
  }
}

function buscarEnCarrito(producto) {
  console.log(producto);
  for (let i = 0; i < CARRITO.length; i++) {
    if (CARRITO[i].producto.id == producto.id) {
      return i;
    }
  }
  return -1;
}

function documentOnLoad() {

  let ul = document.getElementById("lista-productos");
  ul.innerHTML = "";

  for (let i = 0; i < SERVICIOS.length; i++) {
    let li = crearLiProducto(SERVICIOS[i]);
    ul.appendChild(li);
  }
}

document.addEventListener('DOMContentLoaded', documentOnLoad);

function crearLiProducto(producto) {
  let li = document.createElement("li");
  li.dataset.idproducto = producto.id;
  let span = document.createElement("span");
  span.innerHTML = producto.nombre;
  let urlImagen = document.createElement("urlImagen");
  urlImagen.src = producto.urlImagen;
  urlImagen.alt = producto.nombre;
  let span2 = document.createElement("span");
  span2.innerHTML = `$${producto.precio}`;
  let button = document.createElement("button");
  button.innerHTML = "Comprar";

  button.addEventListener("click", onClickBotonComprar);

  li.appendChild(span);
  li.appendChild(urlImagen);
  li.appendChild(span2);
  li.appendChild(button);

  return li;
}

function cambiarTotalUnidadesCarrito() {
  let carritoTotalUnidades = document.getElementById("carritoTotalUnidades");

  let totalActualDeUnidades = 0;
  for (let lineaCarrito of CARRITO) {
    totalActualDeUnidades += lineaCarrito.cantidad;
  }
  carritoTotalUnidades.innerHTML = totalActualDeUnidades;
}

function cambiarTotalPrecioCarrito() {
  let carritoTotalPrecio = document.getElementById("carritoTotalPrecio");
  let totalActualDePrecio = 0;
  for (let lineaCarrito of CARRITO) {
    totalActualDePrecio += lineaCarrito.cantidad * lineaCarrito.producto.precio;
  }
  carritoTotalPrecio.innerHTML = totalActualDePrecio;
}

function generarCarrito() {
  let carritoLista = document.getElementById("carritoLista");
  carritoLista.innerHTML = "";

  for (let i = 0; i < CARRITO.length; i++) {
    let li = crearLiCarrito(CARRITO[i]);
    carritoLista.appendChild(li);
  }

  cambiarTotalUnidadesCarrito();
  cambiarTotalPrecioCarrito();
}

function crearLiCarrito(lineaCarrito) {
  let producto = lineaCarrito.producto;
  let cantidad = lineaCarrito.cantidad;
  let precioTotal = cantidad * producto.precio;

  let li = document.createElement("li");
  li.dataset.idproducto = producto.id;

  let urlImagen = document.createElement("urlImagen");
  urlImagen.src = producto.urlImagen;
  urlImagen.alt = producto.nombre;

  let botonEliminar = document.createElement("button");
  botonEliminar.innerHTML = "X";
  botonEliminar.addEventListener("click", onClickBotonEliminar);

  li.appendChild(urlImagen);

  let span = document.createElement("span");
  span.innerHTML = `${cantidad}x ${producto.nombre} - $${producto.precio} ($${precioTotal})`;

  li.appendChild(span);
  li.appendChild(botonEliminar);
  return li;
}

function onClickBotonEliminar(evento) {
  let li = evento.target.parentElement;
  let ul = li.parentElement;
  let idProducto = li.dataset.idproducto;
  let producto = buscarProducto(idProducto);

  eliminarProductoDelCarrito(producto);
  console.log(CARRITO);

  generarCarrito();
}

function onClickBotonComprar(evento) {
  idProducto = evento.target.parentElement.dataset.idproducto;
  let producto = buscarProducto(idProducto);

  agregarProductoAlCarrito(producto);
  console.log(CARRITO);

  generarCarrito();
}
