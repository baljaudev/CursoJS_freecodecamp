//Con el operador rest (...) podemos asignar a una variable, un determinado número de elementos de un array:
let a;
let b;
let restoNum;

//Asignamos a la variable 'arr' desde el elemento en la posición 2 hasta el último elemento. Y los dos primeros elementos a 'a' y 'b':
[a, b, ...restoNum] = [1, 2, 3, 4, 5, 6, 7, 8, 9];


//Otro ejemplo para borrar los 3 primeros elementos de un array:

const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function eliminarTresElem(array) {
    let [ , , , , ...nuevoArr] = array; //declaramos, inicializamos y asignamos a 'nuevoArr' los valores de 'array' excepto las 4 primeras posiciones
    return nuevoArr;
}

const arrayFinal = eliminarTresElem(arrayNum);
console.log(arrayFinal);