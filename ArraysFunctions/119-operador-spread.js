//Hace lo contrario que el operador rest (...).
//Coge un array y lo descompone en elementos individuales

const numeros = [1, 3, 5];

function sumar(a, b, c) {
    return a + b + c;
}

console.log(sumar(numeros)); //como no podemos pasarle directamente el array, porque sería solo 1 argumento y tenemos que indicar 3, según la función...
console.log(sumar(...numeros)); //...Necesitamos indicárselo así. Así descompone el array en elementos