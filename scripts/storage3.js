document.addEventListener('DOMContentLoaded', function () {
  tituloContador();
  cargarProductos();

  let boton = document.getElementById('botonAgregar');
  boton.addEventListener('click', guardarProducto);

  let botonModificar = document.getElementById('botonModificar');
  botonModificar.addEventListener('click', modificarProducto);

  let select = document.getElementById('selectProductos');
  select.addEventListener('change', productoDesdeSelect);
});

function modificarProducto() {
  let producto = productoDesdeElForm();
  StorageProductos.modificar(producto);
  cargarProductos();
}

function productoDesdeSelect() {
  let id = document.getElementById('selectProductos').value;
  let producto = StorageProductos.buscarPorId(id);

  cargarProductoEnFormulario(producto);
}

function cargarProductoEnFormulario(producto) {
  document.getElementById('inputId').value = producto.id;
  document.getElementById('inputNombre').value = producto.nombre;
  document.getElementById('inputPrecio').value = producto.precio;
}

function guardarProducto() {
  let producto = productoDesdeElForm();
  StorageProductos.guardar(producto);
  cargarProductos();
}

function productoDesdeElForm() {
  let id = document.getElementById('inputId').value;
  let nombre = document.getElementById('inputNombre').value;
  let precio = document.getElementById('inputPrecio').value;

  return { id: id, nombre: nombre, precio: precio };
}

function cargarProductos() {
  let productos = StorageProductos.todos();
  let select = document.getElementById('selectProductos');
  select.innerHTML = '';
  for (producto of productos) {
    let option = document.createElement('option');
    option.value = producto.id;
    option.innerHTML = `${producto.nombre} ${producto.precio}`;
    select.appendChild(option);
  }
}

function tituloContador() {
  console.log('Storage 3');
  let storageTituloH1 = localStorage.getItem('tituloH1');
  let h1 = document.getElementById('h1Storage3');
  h1.innerHTML = storageTituloH1;

  let contador = leerContador();

  let h1Contador = document.getElementById('h1Contador');
  h1Contador.innerHTML = contador;
}
