let misMotos = [
    "Honda Rebel",
    "Ducati 998",
    "Triumph Bobber",
    "Suzuki Hayabusa"
];

console.log("Mis motos son: ");
for (let i = 0; i < misMotos.length; i++) { //itera por la longitud del array
    console.log(misMotos[i].toUpperCase()); //saca cada elemento por pantalla, en mayúsculas
}

//Ejemplo con números:
let misNumeros = [8, 15, 20, 7, 18];
let total = 0;

for (let i = 0; i < misNumeros.length; i++) {
    console.log("Iteración: " + i);
    console.log("Elemento: " + misNumeros[i]);
    total += misNumeros[i]; //va sumando en 'total' cada elemento del array
}
console.log("La suma de todos los elementos es: " + total);


//Ejemplo dentro de una función:
let totalPares = 0;
let totalImpares = 0;
function contarPares(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            totalPares++;
        } else {
            totalImpares++;
        }
    }
}

contarPares([2, 3, 4]);
console.log("El total de pares es: " + totalPares);
console.log("El total de impares es: " + totalImpares);