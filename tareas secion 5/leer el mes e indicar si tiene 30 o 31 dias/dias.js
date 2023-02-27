// leer el numer del mes e indicar si tiene 30 o 31 dias

let mesIngresado = window.prompt("Hola, por ingrese le numero del mes");

console.log ( "el mes ingresado es  " + mesIngresado);

if (mesIngresado == "1") {
    alert ("El mes de enero tiene 31 dias");
} else if (mesIngresado == "2"){
    alert ( " el mes de febrero tiene 29 dias");
} else if (mesIngresado == "3"){
    alert ( " el mes de marzo tiene 31 dias");
} else if (mesIngresado == "4"){
    alert ( " el mes de abril tiene 30 dias");
} else if (mesIngresado == "5"){
    alert ( " el mes de mayo tiene 31 dias");
} else if (mesIngresado == "6"){
    alert ( " el mes de junio tiene 30 dias");
} else if (mesIngresado == "7"){
    alert ( " el mes de julio tiene 31 dias");
} else if (mesIngresado == "8"){
    alert ( " el mes de agosto tiene 31 dias");
} else if (mesIngresado == "9"){
    alert ( " el mes de septiembre tiene 30 dias");
} else if (mesIngresado == "10"){
    alert ( " el mes de octubre tiene 31 dias");
} else if (mesIngresado == "11"){
    alert ( " el mes de noviembre tiene 30 dias");
} else if (mesIngresado == "12"){
    alert ( " el mes de diciembre tiene 31 dias");
} else {
    alert ( "Error, el numero de mes ingresado " + mesIngresado + "no existe");
}


