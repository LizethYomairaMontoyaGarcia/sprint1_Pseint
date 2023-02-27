
const romanosAArabigos = {
    //Objeto de referencia con loas equivalencias de los numeros romanos a arabigos
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};
let resultado = ""

//for in para reconocer propiedades dentro de un objeto
for (const key in romanosAArabigos) {
    while (numero >= romanosAArabigos[key]) {
        resultado += key;
        numero -= romanosAArabigos[key];
    }
    return resultado;
}


const conversion = convertToRomain (25);
console.log(conversion);