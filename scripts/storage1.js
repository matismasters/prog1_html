
document.addEventListener('DOMContentLoaded', function () {
  console.log('Storage 1');
  let storageTituloH1 = localStorage.getItem('tituloH1');
  let h1 = document.getElementById('h1Storage1');
  h1.innerHTML = storageTituloH1;

  let input = document.getElementById('inputStorage1');
  input.value = storageTituloH1;

  let boton = document.getElementById('botonStorage1');
  boton.addEventListener('click', guardarTitulo);

  let contador = leerContador();

  let h1Contador = document.getElementById('h1Contador');
  h1Contador.innerHTML = contador;

  let inputContador = document.getElementById('inputContador');
  inputContador.value = contador;
});

function guardarTitulo() {
  let input = document.getElementById('inputStorage1');
  localStorage.setItem('tituloH1', input.value);
  incrementarContador();
}

function incrementarContador() {
  let contador = leerContador();
  contador++;
  localStorage.setItem('contador', contador);
}