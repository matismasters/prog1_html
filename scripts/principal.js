const PRODUCTOS = [];

let CARRITO = [];

function storageLeerProductos() {
  return JSON.parse(localStorage.getItem("productos")) || [];
}

function cargarProductos(productos) {
  for (let producto of productos) {
    PRODUCTOS.push(producto);
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

function renderizarProductos(productos) {
  let ul = document.getElementById("lista-productos");
  ul.innerHTML = "";

  for (let i = 0; i < productos.length; i++) {
    let li = crearLiProducto(productos[i]);
    ul.appendChild(li);
  }
}

function documentOnLoad() {
  if (PRODUCTOS.length === 0) {
    let productosEnStorage = storageLeerProductos();
    cargarProductos(productosEnStorage)
  }

  document.getElementById("buscar").addEventListener("input", onKeyPressInputBuscar);

  renderizarProductos(PRODUCTOS);
}

function onKeyPressInputBuscar(evento) {
  let texto = evento.target.value;

  if (texto === "") {
    renderizarProductos(PRODUCTOS);
    return;
  }

  let productosFiltrados = PRODUCTOS.filter((producto) => {
    return producto.nombre.toLowerCase().includes(texto.toLowerCase());
  });

  renderizarProductos(productosFiltrados)
}

document.addEventListener('DOMContentLoaded', documentOnLoad);

function crearLiProducto(producto) {
  let li = document.createElement("li");
  li.dataset.idproducto = producto.id;
  let span = document.createElement("span");
  span.innerHTML = producto.nombre;
  let spanTipo = document.createElement("span");
  span.innerHTML = producto.tipo;
  let img = document.createElement("img");
  if (producto.urlImagen.startsWith("http")) {
    img.src = producto.urlImagen;
  } else {
    img.src = "../" + producto.urlImagen;
  }
  img.alt = producto.nombre;
  let span2 = document.createElement("span");
  span2.innerHTML = `$${producto.precio}`;
  let button = document.createElement("button");
  button.classList.add("btn");
  button.classList.add("btn-primary");
  button.classList.add("btn-sm");
  button.innerHTML = "Comprar";

  button.addEventListener("click", onClickBotonComprar);

  li.appendChild(span);
  li.appendChild(img);
  li.appendChild(spanTipo);
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
  if (producto.urlImagen.startsWith("http")) {
    img.src = producto.urlImagen;
  } else {
    img.src = "../" + producto.urlImagen;
  }
  img.alt = producto.nombre;

  let botonEliminar = document.createElement("button");
  botonEliminar.classList.add("btn");
  botonEliminar.classList.add("btn-danger");
  botonEliminar.classList.add("btn-sm");
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
