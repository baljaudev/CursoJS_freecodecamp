const sumarTres = function(x) {
    return x + 3;
}

//Equivalente en función flecha, con un parámetro
const sumarOtrosTres = (x) => x + 3;


//Más de un parámetro:
const concatenar = function(arr1, arr2) {
    return arr1.concat(arr2); //concat, une 2 elementos
}

const concatenarDos = (arr1,arr2) => arr1.concat(arr2);


//Ahora, si la función tiene más de una línea, hay que mantener las llaves en la función flecha:
const sumarANum = (a, b) => {
    let num = 5;
    return a + b + num;
}