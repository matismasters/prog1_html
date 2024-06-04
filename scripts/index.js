/* 
  DOMContentLoaded es un evento que se dispara cuando el documento HTML ha sido 
  completamente cargado y parseado, sin esperar hojas de estilo, imágenes y 
  subtramas para finalizar la carga.
*/

const SERVICIOS = [
  { id: 25, nombre: "Chivito", precio: 350, img: "images/chivito.webp" },
  { id: 26, nombre: "Hamburguesa", precio: 250, img: "images/hamburguesa.avif" },
  { id: 27, nombre: "Pizza", precio: 150, img: "images/pizza.avif" },
  { id: 28, nombre: "Empanadas", precio: 65, img: "images/empanadas.avif" },
  { id: 29, nombre: "Faina", precio: 200, img: "images/faina.jpg" }
]

let CARRITO = [];

function buscarServicio(idServicio) {
  for (let i = 0; i < SERVICIOS.length; i++) {
    if (SERVICIOS[i].id == idServicio) {
      return SERVICIOS[i];
    }
  }
  return null;
}

function agregarServicio(propiedadesDelServicio) {
  // { id: 21, nombre: "Chivito", precio: 350, img: "images/chivito.webp", categoria: "Comida Casera" }

  let nuevoServicio = propiedadesDelServicio;

  let valido = true;

  if (nuevoServicio.nombre === "") {
    valido = false;
    alert("El nombre no puede estar vacío");
  }

  if (nuevoServicio.precio === "" || isNaN(nuevoServicio.precio)) {
    valido = false;
    alert("El precio no puede estar vacío");
  }

  if (valido) {
    SERVICIOS.push(nuevoServicio);
  }
}

function agregarServicioAlCarrito(servicio) {
  let indice = buscarEnCarrito(servicio);
  console.log(indice);
  if (indice === -1) {
    CARRITO.push({
      servicio: servicio,
      cantidad: 1
    });
  } else {
    CARRITO[indice].cantidad++;
  }
}

function eliminarServicioDelCarrito(servicio) {
  let indice = buscarEnCarrito(servicio);
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

function buscarEnCarrito(servicio) {
  console.log(servicio);
  for (let i = 0; i < CARRITO.length; i++) {
    if (CARRITO[i].servicio.id == servicio.id) {
      return i;
    }
  }
  return -1;
}

function documentOnLoad() {

  let ul = document.getElementById("lista-servicios");
  ul.innerHTML = "";

  for (let i = 0; i < SERVICIOS.length; i++) {
    let li = crearLiServicio(SERVICIOS[i]);
    ul.appendChild(li);
  }

  document.getElementById("botonAgregarServicio").addEventListener("click", onClickBotonAgregarServicio);
}

document.addEventListener('DOMContentLoaded', documentOnLoad);

function crearLiServicio(servicio) {
  let li = document.createElement("li");
  li.dataset.idservicio = servicio.id;
  let span = document.createElement("span");
  span.innerHTML = servicio.nombre;
  let img = document.createElement("img");
  img.src = servicio.img;
  img.alt = servicio.nombre;
  let span2 = document.createElement("span");
  span2.innerHTML = `$${servicio.precio}`;
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
    totalActualDePrecio += lineaCarrito.cantidad * lineaCarrito.servicio.precio;
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
  let servicio = lineaCarrito.servicio;
  let cantidad = lineaCarrito.cantidad;
  let precioTotal = cantidad * servicio.precio;

  let li = document.createElement("li");
  li.dataset.idservicio = servicio.id;

  let img = document.createElement("img");
  img.src = servicio.img;
  img.alt = servicio.nombre;

  let botonEliminar = document.createElement("button");
  botonEliminar.innerHTML = "X";
  botonEliminar.addEventListener("click", onClickBotonEliminar);

  li.appendChild(img);

  let span = document.createElement("span");
  span.innerHTML = `${cantidad}x ${servicio.nombre} - $${servicio.precio} ($${precioTotal})`;

  li.appendChild(span);
  li.appendChild(botonEliminar);
  return li;
}

function onClickBotonEliminar(evento) {
  let li = evento.target.parentElement;
  let ul = li.parentElement;
  let idServicio = li.dataset.idservicio;
  let servicio = buscarServicio(idServicio);

  eliminarServicioDelCarrito(servicio);
  console.log(CARRITO);

  generarCarrito();
}

function onClickBotonComprar(evento) {
  idServicio = evento.target.parentElement.dataset.idservicio;
  let servicio = buscarServicio(idServicio);

  agregarServicioAlCarrito(servicio);
  console.log(CARRITO);

  generarCarrito();
}

function onClickBotonAgregarServicio(evento) {
  let id = document.getElementById("id").value;
  let nombre = document.getElementById("nombre").value;
  let precio = document.getElementById("precio").value;
  let img = document.getElementById("img").value;

  let parametrosServicio = {
    id: id,
    nombre: nombre,
    precio: precio,
    img: img
  };

  agregarServicio(parametrosServicio);
  documentOnLoad();
}
