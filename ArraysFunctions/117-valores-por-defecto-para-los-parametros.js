//Si al usuario no pasa por parámetro uno de los valores requeridos, podemos, previamente, establecer un valor por defecto:

//Opción 1:
function incrementarUno(num1, num2 = 1) {
    return num1 + num2;
}

console.log("Opción 1: " + incrementarUno(6)); //al no haber añadido el segundo, nos aplica el por defecto
console.log("Opción 1: " + incrementarUno(6, 8));


//Opción 2:
const incrementarDos = (num1, num2 = 1) => num1 + num2;

console.log("Opción 2: " + incrementarUno(7));
console.log("Opción 2: " + incrementarUno(7, 3));


//Opción 3:
const incrementarTres = function(num1, num2 = 1) {
    return num1 + num2;
}

console.log("Opción 3: " + incrementarUno(5));
console.log("Opción 3: " + incrementarUno(3, 6));