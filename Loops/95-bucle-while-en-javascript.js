//While se usa cuando no conocemos el número específico de iteraciones, pero sí conocemos la condición
let i = 0; //variable que usaremos en la condición

while (i <= 3) { //mientras i sea menor o igual a 3...
    console.log("Hola Mundo");
    i++; //si no vamos incrementando i, creamos un bucle infinito
}

//Ejemplo de añadir elementos a un array:
let miArray = [];
let j = 0;

while (j < 10) {//mientras i sea menor estricto a 10...
    miArray.push(j); //añadimos i al array
    j++;
}

console.log(miArray);


//Ejemplo para eliminar elementos de un array usando su longitud:
let numeros = [12, 22, 35, 47, 25, 66, 97, 18];

while (numeros.length > 4) { //mientras haya más de 4 elementos en el array 'numeros'...
    numeros.pop(); //elimina el último elemento
}

console.log(numeros);