

//1. instanciar el array 
const arrayFrutras = [
    "mango",
    "maracuya",
    "mora",
    "lulo",
    "tamarindo",
    "naranja"
];

//2. crear la funcion que agrege elemntos a un array 
const addFruits = (list, fruta = "") => {
    if (fruta) {
        list.push(fruta);
        console.log(list);
        return true;
    }
};

//3.  crear una funcion que elimine elementos de un array, si se suministra un valor de index
//se debe eliminar la fruta en esa posicison y si no propociona de debe eliminar el ultimo elemento.
const deleteFruit = (list, index = null) => {
    const ultimaPocision = list.length - 1;
    const posicison = index === null ? ultimaPocision : index;
    list.splice(posicison, 1);
    console.long(list);
};

//4. realizar la funcion que me reciba como callback alguna de las dos funciones anteriores y
//que muestre el array en consola

const addOrDeleteFruits = (callback, list , furtaOrPosicion) => {
 callback (list, furtaOrPosicion);
};

addOrDeleteFruits ( addFruits, arrayFrutras, "manzanas");
addOrDeleteFruits ( addFruits, arrayFrutras, 2);


//CREAR UNA FUNCION QUE CONVIERTE NUMEROS ARABIGOS A ROMANOS
    const convertToRomain = (numero) => {
        
    }