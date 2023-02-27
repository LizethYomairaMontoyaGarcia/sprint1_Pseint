//leer la marca de un auto, si es ford el descuento es de 10%, si es toyota el descuento es de 5%. indicar el 
//valor mas el total con el descuento

let marcaAuto = window.prompt("Hola, por ingresa la marca del auto si es Toyota o Ford");
console.log("hola");

let toyota = 500000;
let ford = 100000;
let desToyota = 10;
let desFord = 5;

let resultToyota = toyota - (desToyota/ 100 * toyota);
console.log("toyota " + resultToyota);
let resultFord = ford - (desFord/ 100 * ford);
console.log("ford " + resultFord);

if (marcaAuto == "Toyota"){
    alert ("Tiene un 10% de descuento, el auto cuesta " + toyota + " El valos total a pagar con el descuento es " + resultToyota);
} else if (marcaAuto == "Ford"){
    alert ("Tiene un 5% de descuento");
} else {
    alert ("No tenemos esa marca de autos");
}


