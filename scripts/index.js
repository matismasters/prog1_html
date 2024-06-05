const PRODUCTOS = [
  { id: 25, nombre: "Chivito", precio: 350, urlImagen: "images/chivito.webp" },
  { id: 26, nombre: "Hamburguesa", precio: 250, urlImagen: "images/hamburguesa.avif" },
  { id: 27, nombre: "Pizza", precio: 150, urlImagen: "images/pizza.avif" },
  { id: 28, nombre: "Empanadas", precio: 65, urlImagen: "images/empanadas.avif" },
  { id: 29, nombre: "Faina", precio: 200, urlImagen: "images/faina.jpg" }
]

let CARRITO = [];

function buscarProducto(idProducto) {
  for (let i = 0; i < PRODUCTOS.length; i++) {
    if (PRODUCTOS[i].id == idProducto) {
      return PRODUCTOS[i];
    }
  }
  return null;
}

function agregarProductoAlCarrito(producto) {
  let indice = buscarEnCarrito(producto);

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

  for (let i = 0; i < PRODUCTOS.length; i++) {
    let li = crearLiProducto(PRODUCTOS[i]);
    ul.appendChild(li);
  }

}

document.addEventListener('DOMContentLoaded', documentOnLoad);

function crearLiProducto(producto) {
  let li = document.createElement("li");
  li.dataset.idproducto = producto.id;
  let span = document.createElement("span");
  span.innerHTML = producto.nombre;
  let img = document.createElement("img");
  img.src = producto.urlImagen;
  img.alt = producto.nombre;
  let span2 = document.createElement("span");
  span2.innerHTML = `$${producto.precio}`;
  let button = document.createElement("button");
  button.innerHTML = "Comprar";

  button.addEventListener("click", onClickBotonComprar);

  li.appendChild(span);
  li.appendChild(img);
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

  let img = document.createElement("img");
  img.src = producto.urlImagen;
  img.alt = producto.nombre;

  let botonEliminar = document.createElement("button");
  botonEliminar.innerHTML = "X";
  botonEliminar.addEventListener("click", onClickBotonEliminar);

  li.appendChild(img);

  let span = document.createElement("span");
  span.innerHTML = `${cantidad}x ${producto.nombre} - $${producto.precio} ($${precioTotal})`;

  li.appendChild(span);
  li.appendChild(botonEliminar);
  return li;
}

function onClickBotonEliminar(evento) {
  let li = evento.target.parentElement;
  let idProducto = li.dataset.idproducto;
  let producto = buscarProducto(idProducto);

  eliminarProductoDelCarrito(producto);
  generarCarrito();
}

function onClickBotonComprar(evento) {
  idProducto = evento.target.parentElement.dataset.idproducto;
  let producto = buscarProducto(idProducto);

  agregarProductoAlCarrito(producto);
  generarCarrito();
}

function onClickBotonAgregarProducto(evento) {
  let id = document.getElementById("id").value;
  let nombre = document.getElementById("nombre").value;
  let precio = document.getElementById("precio").value;
  let img = document.getElementById("img").value;

  let parametrosProducto = {
    id: id,
    nombre: nombre,
    precio: precio,
    img: img
  };

  agregarProducto(parametrosProducto);
  documentOnLoad();
}
