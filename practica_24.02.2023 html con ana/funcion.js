// realizar una funcion que reciba 2 parametros de tipo numero, el segundo parametro es opcional. si se recibe  los 2 parametros 
// debe retonar la suma de los 2 parametros. si se recibe un solo parametro, debe retornar la suma de ese valor mas 10.

const num1 = parseInt(prompt("Ingresa el numero 1"));
const num2 = parseInt(prompt("Ingresa el numero 2"));


const numeros = (num1, num2) => {
    let suma;
    if (num2) {
       suma = num1 + num2;
    } else {
        suma = num1 + 10;
    }
    return suma; 
};

console.log(numeros (num1 , num2));
numeros();