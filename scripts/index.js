/* 
  DOMContentLoaded es un evento que se dispara cuando el documento HTML ha sido 
  completamente cargado y parseado, sin esperar hojas de estilo, imágenes y 
  subtramas para finalizar la carga.
*/

const SERVICIOS = [
  { id: 25, nombre: "Chivito", precio: 350, img: "images/chivito.webp" },
  { id: 26, nombre: "Hamburguesa", precio: 250, img: "images/hamburguesa.avif" },
  { id: 27, nombre: "Pizza", precio: 150, img: "images/pizza.avif" },
  { id: 28, nombre: "Empanadas", precio: 65, img: "images/empanadas.avif" }
]

function documentOnLoad() {

  let ul = document.getElementById("lista-servicios");
  ul.innerHTML = "";

  for (let i = 0; i < SERVICIOS.length; i++) {
    let li = crearLiServicio(SERVICIOS[i]);
    ul.appendChild(li);
  }
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

  button.addEventListener("click", comprar);

  li.appendChild(span);
  li.appendChild(img);
  li.appendChild(span2);
  li.appendChild(button);

  return li;
}

function crearLiCarrito(servicio) {
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.src = servicio.img;
  img.alt = servicio.nombre;
  li.appendChild(img);

  let span = document.createElement("span");
  span.innerHTML = `${servicio.nombre} - $${servicio.precio}`;

  li.appendChild(span);
  return li;
}

function comprar(evento) {
  idServicio = evento.target.parentElement.dataset.idservicio;

  let servicio = buscarServicio(idServicio);

  let carritoTotalUnidades = document.getElementById("carritoTotalUnidades");

  let totalActualDeUnidades = parseInt(carritoTotalUnidades.innerHTML)

  carritoTotalUnidades.innerHTML = totalActualDeUnidades + 1;

  let carritoTotalPrecio = document.getElementById("carritoTotalPrecio");

  let totalActualDePrecio = parseInt(carritoTotalPrecio.innerHTML);

  carritoTotalPrecio.innerHTML = totalActualDePrecio + servicio.precio;

  let ul = document.getElementById("carritoLista");

  let li = crearLiCarrito(servicio);
  ul.appendChild(li);
}

function buscarServicio(idServicio) {
  for (let i = 0; i < SERVICIOS.length; i++) {
    if (SERVICIOS[i].id == idServicio) {
      return SERVICIOS[i];
    }
  }
  return null;
}