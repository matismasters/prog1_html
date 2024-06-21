document.addEventListener('DOMContentLoaded', function () {
  console.log('Storage 2');
  let storageTituloH1 = localStorage.getItem('tituloH1');
  let h1 = document.getElementById('h1Storage2');
  h1.innerHTML = storageTituloH1;

  let contador = leerContador();

  let h1Contador = document.getElementById('h1Contador');
  h1Contador.innerHTML = contador;
});
