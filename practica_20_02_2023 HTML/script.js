const nombre = "liz";
console.log("liz");

function imprimir() {
    console.log("nombre", nombre);
}

for (let i = 0; i <= 10; i++) {
    console.log("#", i);
}

let i = 3;
while (i <= 10) {
    console.log("# en while", i);
    i++;
}

let Helado = prompt("Que topping deseas?");
function topping(helado) {
    if (helado === "oreo") {
        console.log("El topping de oreo tiene un costo de 1000");
    } else if (helado === "kitkat") {
        console.log("El topping de kitka tiene un costo de 1500");
    } else if (helado === "brownie") {
        console.log("El topping de brownie tiene un costo de 750");
    } else if (helado === "locasitos") {
        console.log("El topping de locasitos tiene un costo de 950");
    } else {
        console.log("no tenemos ese topping, lo sentimos")
    }
}