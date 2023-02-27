//alert("Estoy aqui");

// ejercicio 2: Leer 5 notas de un estudiante, calcular el promedio e indicar si está aprobado o suspendido.

//resultado: promedio de notas e indicar si el estudiante aprobo o desaprobo

//los datos que necesitamos para calcular el promedio 

//¿cuantas notas son?
const cantidadDeNotas = 5;
let sumatoriaDeNotas = 0;

for (let index = 0; index < cantidadDeNotas; index++) {
    const notaString = prompt("Por favor ingrese la nota " + (index + 1));
    const nota = parseFloat(notaString)
    //console.log(nota);
    //console.log(typeof nota);
    sumatoriaDeNotas += nota;

}
const promedioDeNotas = (sumatoriaDeNotas / cantidadDeNotas);
//console.log(promedioDeNotas);

if (promedioDeNotas >= 3) {
    alert("el estudiante aprobo la materia");
} else {
    alert("El estudiante desaprobo");
}