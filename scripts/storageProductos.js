
function leerContador() {
  return localStorage.getItem('contador') || 0;
}

class StorageProductos {
  // { id: 1, nombre: 'Producto 10', precio: 100 }

  static todos() {
    return JSON.parse(localStorage.getItem("productos2")) || [];
  }

  static buscarPorId(id) {
    let productos = StorageProductos.todos();

    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id == id) {
        return productos[i];
      }
    }

    return null;
  }

  static buscarIndicePorId(id) {
    let productos = StorageProductos.todos();

    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id == id) {
        return i;
      }
    }

    return -1;
  }

  static guardar(producto) {
    let productos = StorageProductos.todos();
    producto.id = Math.max(...productos.map(p => p.id), 0) + 1;
    productos.push(producto);
    localStorage.setItem("productos2", JSON.stringify(productos));
  }

  static modificar(producto) {
    let productos = StorageProductos.todos();
    let indice = StorageProductos.buscarIndicePorId(producto.id);
    productos[indice] = producto;
    localStorage.setItem("productos2", JSON.stringify(productos));
  }

  static eliminar(id) {
    let productos = StorageProductos.todos();
    let indice = StorageProductos.buscarIndicePorId(id);
    productos.splice(indice, 1);
    localStorage.setItem("productos2", JSON.stringify(productos));
  }
}
