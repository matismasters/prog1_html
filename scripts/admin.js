document.addEventListener("DOMContentLoaded", documentOnLoad);

const PRECARGA_PRODUCTOS = [
  { id: 25, nombre: "Chivito", precio: 350, urlImagen: "images/chivito.webp", tipo: "Casera" },
  { id: 26, nombre: "Hamburguesa", precio: 250, urlImagen: "images/hamburguesa.avif", tipo: "Casera" },
  { id: 27, nombre: "Pizza", precio: 150, urlImagen: "images/pizza.avif", tipo: "Pizzería" },
  { id: 28, nombre: "Empanadas", precio: 65, urlImagen: "images/empanadas.avif", tipo: "Casera" },
  { id: 29, nombre: "Faina", precio: 200, urlImagen: "images/faina.jpg", tipo: "Pizzería" }
]

const PRODUCTOS = [];

function storageGuardarProductos() {
  localStorage.setItem("productos", JSON.stringify(PRODUCTOS));
}

function storageLeerProductos() {
  return JSON.parse(localStorage.getItem("productos")) || [];
}


function cargarProductos(productos) {
  for (let producto of productos) {
    agregarProducto(producto);
  }
}

function agregarProducto(producto) {
  producto.id = ultimoIdProducto() + 1;
  PRODUCTOS.push(producto);
  storageGuardarProductos();
}

function modificarProducto(producto) {
  let indice = buscarIndiceProducto(producto.id);
  if (indice !== -1) {
    PRODUCTOS[indice] = producto;
    storageGuardarProductos();
  }
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
    storageGuardarProductos();
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
  if (producto.urlImagen.startsWith("http")) {
    imgImagen.src = producto.urlImagen;
  } else {
    imgImagen.src = "../" + producto.urlImagen;
  }
  imgImagen.alt = producto.nombre;
  celdaUrlImagen.appendChild(imgImagen);

  fila.appendChild(celdaUrlImagen);

  celdaNombre = document.createElement("td");
  celdaNombre.innerText = producto.nombre;
  fila.appendChild(celdaNombre);

  celdaPrecio = document.createElement("td");
  celdaPrecio.innerText = `$${producto.precio}`;
  fila.appendChild(celdaPrecio);

  celdaTipo = document.createElement("td");
  celdaTipo.innerText = producto.tipo;
  fila.appendChild(celdaTipo);

  celdaAcciones = document.createElement("td");
  divBtnGroup = document.createElement("div");
  divBtnGroup.classList.add("btn-group");

  botonEditar = document.createElement("button");
  botonEditar.classList.add("btn");
  botonEditar.classList.add("btn-secondary");
  botonEditar.innerText = "Editar";
  botonEditar.addEventListener("click", onClickBotonEditar);
  divBtnGroup.appendChild(botonEditar);

  botonEliminar = document.createElement("button");
  botonEliminar.classList.add("btn");
  botonEliminar.classList.add("btn-danger");
  botonEliminar.innerText = "Eliminar";
  botonEliminar.addEventListener("click", onClickBotonEliminar);
  divBtnGroup.appendChild(botonEliminar);

  celdaAcciones.appendChild(divBtnGroup);

  fila.appendChild(celdaAcciones);
  return fila;
}

function renderizarProductos() {
  let tablaProductos = document.getElementById("tablaProductos");
  tablaProductos.innerHTML = "";
  let fila;

  for (let producto of PRODUCTOS) {
    fila = renderizarProducto(producto);
    tablaProductos.appendChild(fila);
  }

  document.getElementById("cardTotalProductos").innerText = PRODUCTOS.length;
}

function cambiarAFormularioAgregar() {
  let leyendaFormulario = document.getElementById("leyendaFormulario");
  let botonAgregarFormulario = document.getElementById("botonAgregar");

  leyendaFormulario.innerText = "Agregar Producto";
  botonAgregarFormulario.innerText = "Agregar";
}

function cambiarAFormularioEditar() {
  let leyendaFormulario = document.getElementById("leyendaFormulario");
  let botonAgregarFormulario = document.getElementById("botonAgregar");

  leyendaFormulario.innerText = "Editar Producto";
  botonAgregarFormulario.innerText = "Editar";
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("urlImagen").value = "";
  document.getElementById("tipo").value = "Casera";
  document.getElementById("idProductoParaEditar").value = "-1";
}

function documentOnLoad() {
  console.log("El DOM ha sido cargado");
  document.getElementById("mostrarOcultarFormulario")
    .addEventListener("click", onClickMostrarOcultarFormulario);
  document.getElementById("botonCancelar")
    .addEventListener("click", onClickBotonCancelar);
  document.getElementById("botonAgregar")
    .addEventListener("click", onClickBotonAgregar);

  let productosDeStorage = storageLeerProductos();

  if (productosDeStorage.length === 0) {
    cargarProductos(PRECARGA_PRODUCTOS);
    storageGuardarProductos();
  } else {
    cargarProductos(productosDeStorage);
  }

  renderizarProductos();
}

function onClickBotonEditar(evento) {
  let botonAgregarProducto = document.getElementById("mostrarOcultarFormulario");
  let estaVisibleElForm = botonAgregarProducto.dataset.formVisible === "true";

  if (estaVisibleElForm === false) {
    onClickMostrarOcultarFormulario();
  }

  cambiarAFormularioEditar();

  let fila = evento.target.parentElement.parentElement.parentElement;
  let idProducto = fila.dataset.idproducto;
  let producto = buscarProducto(idProducto);

  document.getElementById("idProductoParaEditar").value = producto.id;
  document.getElementById("nombre").value = producto.nombre;
  document.getElementById("precio").value = producto.precio;
  document.getElementById("urlImagen").value = producto.urlImagen;
  document.getElementById("tipo").value = producto.tipo;
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
  cambiarAFormularioAgregar();
  limpiarFormulario();
}

function onClickBotonAgregar() {
  let inputNombre = document.getElementById("nombre");
  let inputPrecio = document.getElementById("precio");
  let inputUrlImagen = document.getElementById("urlImagen");
  let selectTipo = document.getElementById("tipo");
  let idProductoParaEditar = document.getElementById("idProductoParaEditar");

  let id = idProductoParaEditar.value;
  let nombre = inputNombre.value;
  let precio = inputPrecio.value;
  let urlImagen = inputUrlImagen.value;
  let tipo = selectTipo.value;

  if (nombre === "" || precio === "" || urlImagen === "" || tipo === "") {
    alert("Todos los campos son requeridos");
    return;
  }

  if (id === "-1") {
    agregarProducto({ nombre, precio, urlImagen, tipo });
  } else {
    modificarProducto({ id, nombre, precio, urlImagen, tipo });
  }

  limpiarFormulario();
  onClickMostrarOcultarFormulario();
  renderizarProductos();
  cambiarAFormularioAgregar();
}

function onClickBotonEliminar(evento) {
  let fila = evento.target.parentElement.parentElement.parentElement;
  let idProducto = fila.dataset.idproducto;
  eliminarProducto(idProducto);
  renderizarProductos();
}

// function onClickBotonEditar(evento) {
//   let fila = evento.target.parentElement.parentElement.parentElement;
//   let idProducto = fila.dataset.idproducto;
//   let producto = buscarProducto(idProducto);

//   document.getElementById("idProductoParaEditar").value = producto.id;
//   document.getElementById("nombre").value = producto.nombre;
//   document.getElementById("precio").value = producto.precio;
//   document.getElementById("urlImagen").value = producto.url_imagen;
//   document.getElementById("tipo").value = producto.tipo;

//   onClickMostrarOcultarFormulario();
// }

