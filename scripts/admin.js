document.addEventListener("DOMContentLoaded", documentOnLoad);

const PRODUCTOS = [
  { id: 25, nombre: "Chivito", precio: 350, url_imagen: "images/chivito.webp", tipo: "Casera" },
  { id: 26, nombre: "Hamburguesa", precio: 250, url_imagen: "images/hamburguesa.avif", tipo: "Casera" },
  { id: 27, nombre: "Pizza", precio: 150, url_imagen: "images/pizza.avif", tipo: "Pizzería" },
  { id: 28, nombre: "Empanadas", precio: 65, url_imagen: "images/empanadas.avif", tipo: "Casera" },
  { id: 29, nombre: "Faina", precio: 200, url_imagen: "images/faina.jpg", tipo: "Pizzería" }
]

function agregarProducto(producto) {
  producto.id = ultimoIdProducto() + 1;
  PRODUCTOS.push(producto);
}

function buscarProducto(idProducto) {
  for (let i = 0; i < PRODUCTOS.length; i++) {
    if (PRODUCTOS[i].id == idProducto) {
      return PRODUCTOS[i];
    }
  }
  return null;
}

function buscarIndiceProducto(idProducto) {
  for (let i = 0; i < PRODUCTOS.length; i++) {
    if (PRODUCTOS[i].id == idProducto) {
      return i;
    }
  }
  return -1;
}

function eliminarProducto(idProducto) {
  let indice = buscarIndiceProducto(idProducto);
  if (indice !== -1) {
    PRODUCTOS.splice(indice, 1);
  }
}

function ultimoIdProducto() {
  let ultimoId = -1;
  for (let producto of PRODUCTOS) {
    if (producto.id > ultimoId) {
      ultimoId = producto.id;
    }
  }

  return ultimoId;
}

function renderizarProducto(producto) {
  fila = document.createElement("tr");
  fila.dataset.idproducto = producto.id;

  celdaUrlImagen = document.createElement("td");
  imgImagen = document.createElement("img");
  imgImagen.src = "../" + producto.url_imagen;
  imgImagen.alt = producto.nombre;
  celdaUrlImagen.appendChild(imgImagen);
  fila.appendChild(celdaUrlImagen);

  celdaNombre = document.createElement("td");
  celdaNombre.innerText = producto.nombre;
  fila.appendChild(celdaNombre);

  celdaPrecio = document.createElement("td");
  celdaPrecio.innerText = producto.precio;
  fila.appendChild(celdaPrecio);

  celdaTipo = document.createElement("td");
  celdaTipo.innerText = producto.tipo;
  fila.appendChild(celdaTipo);

  celdaAcciones = document.createElement("td");

  botonEditar = document.createElement("button");
  botonEditar.classList.add("pure-button");
  botonEditar.classList.add("button-secondary");
  botonEditar.innerText = "Editar";
  celdaAcciones.appendChild(botonEditar);

  botonEliminar = document.createElement("button");
  botonEliminar.classList.add("pure-button");
  botonEliminar.classList.add("button-warning");
  botonEliminar.innerText = "Eliminar";
  botonEliminar.addEventListener("click", onClickBotonEliminar);
  celdaAcciones.appendChild(botonEliminar);

  fila.appendChild(celdaAcciones);
  return fila;
}

function renderizarProductos() {
  const tablaProductos = document.getElementById("tablaProductos");
  tablaProductos.innerHTML = "";
  let fila;

  for (let producto of PRODUCTOS) {
    fila = renderizarProducto(producto);
    tablaProductos.appendChild(fila);
  }
}

function documentOnLoad() {
  console.log("El DOM ha sido cargado");
  document.getElementById("mostrarOcultarFormulario")
    .addEventListener("click", onClickMostrarOcultarFormulario);
  document.getElementById("botonCancelar")
    .addEventListener("click", onClickBotonCancelar);
  document.getElementById("botonAgregar")
    .addEventListener("click", onClickBotonAgregar);
  
  renderizarProductos();
}

function onClickMostrarOcultarFormulario() {
  let button = document.getElementById("mostrarOcultarFormulario");
  let fieldset = button.parentElement.querySelector("fieldset");
  if (button.dataset.formVisible === undefined || button.dataset.formVisible === "false") {
    button.dataset.formVisible = "true";
    fieldset.classList.remove("oculto");
    button.classList.add("oculto");
  } else {
    button.dataset.formVisible = "false";
    fieldset.classList.add("oculto");
    button.classList.remove("oculto");
  }
}

function onClickBotonCancelar() {
  onClickMostrarOcultarFormulario();
}

function onClickBotonAgregar() {
  const inputNombre = document.getElementById("nombre");
  const inputPrecio = document.getElementById("precio");
  const inputUrlImagen = document.getElementById("urlImagen");
  const selectTipo = document.getElementById("tipo");

  const nombre = inputNombre.value;
  const precio = inputPrecio.value;
  const urlImagen = inputUrlImagen.value;
  const tipo = selectTipo.value;

  if (nombre === "" || precio === "" || urlImagen === "" || tipo === "") {
    alert("Todos los campos son requeridos");
    return;
  }

  agregarProducto({ nombre, precio, urlImagen, tipo });
  onClickMostrarOcultarFormulario();
  renderizarProductos();
}

function onClickBotonEliminar(evento) {
  let fila = evento.target.parentElement.parentElement;
  let idProducto = fila.dataset.idproducto;
  eliminarProducto(idProducto);
  renderizarProductos();
}

function onClickBotonEditar(evento) {
  let fila = evento.target.parentElement.parentElement;
  let idProducto = fila.dataset.idproducto;
  let producto = buscarProducto(idProducto);

  document.getElementById("idProductoParaEditar").value = producto.id;
  document.getElementById("nombre").value = producto.nombre;
  document.getElementById("precio").value = producto.precio;
  document.getElementById("urlImagen").value = producto.url_imagen;
  document.getElementById("tipo").value = producto.tipo;

  onClickMostrarOcultarFormulario();
}

