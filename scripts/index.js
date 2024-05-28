// El siguiente codigo sirve para que el javascript se ejecute cuando cargue la pagina

document.addEventListener('DOMContentLoaded', function () {
  let botonAtencionCliente =
    document.getElementById('atencion-al-cliente');

  botonAtencionCliente.addEventListener('click', atencionCliente);

  let botonesComprar = document.querySelectorAll('.servicios li button');

  for (let boton of botonesComprar) {
    boton.addEventListener('click', comprar);
  }

  let buscador = document.getElementById('buscador');
  buscador.value;
});

function atencionCliente(evento) {
  alert("Estamos trabajando en ello");
  evento.target.innerHTML = "No moleste";

  let tituloPrincipal = document.getElementById('titulo-principal');

  tituloPrincipal.innerHTML = "Gracias por su paciencia";
}

function comprar(evento) {
  alert("Gracias por su compra");
}