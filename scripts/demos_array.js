let alumnos = [
  {
    nombre: "Juan",
    edad: 20,
    curso: "Android",
  },
  {
    nombre: "Pepe",
    edad: 23,
    curso: "Android",
  },
  {
    nombre: "Ana",
    edad: 22,
    curso: "iOS",
  },
];

function buscarAlumnos(curso) {
  let alumnosCurso = [];

  for (let alumno of alumnos) {
    if (alumno.curso === curso) {
      alumnosCurso.push(alumno);
    }
  }

  return alumnosCurso;
}

function buscarAlumnos2(curso) {
  return alumnos.filter((alumno) => alumno.curso === curso);
}

let restulado1 = buscarAlumnos("Android");
console.log(JSON.stringify(restulado1));

let restulado2 = buscarAlumnos2("Android");
console.log(JSON.stringify(restulado2));

let cursos = alumnos.map((alumno) => { return alumno.curso; });
console.log(JSON.stringify(cursos));

let cursos2 = alumnos
  .map((alumno) => { return alumno.curso; })
  .filter((curso) => curso === "Android");

console.log(JSON.stringify(cursos2));

// reduce
let edades = alumnos.map((alumno) => { return alumno.edad; });
let sumaEdades = edades.reduce((acumulador, edad) => { return acumulador + edad; }, 0);

let acumulador = 0;
for (let edad of edades) {
  acumulador += edad;
}

// sort
console.log(JSON.stringify(alumnos));
let alumnosOrdenados = alumnos.sort((alumno1, alumno2) => {
  return alumno1.edad - alumno2.edad;
})

console.log(JSON.stringify(alumnosOrdenados));


