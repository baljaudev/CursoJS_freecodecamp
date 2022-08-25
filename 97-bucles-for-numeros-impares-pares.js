let numerosImpares = [];
//Guardar números impares hasta 19 en un array:
for (let i = 0; i <= 19; i++) {
    if (i % 2 != 0) {
        numerosImpares.push(i);
    }
}
console.log(numerosImpares);


//Forma más óptima de hacerlo:
let otrosNumerosImpares = [];
for (let i =1; i <= 19; i += 2) { //empezamos con i en 1 y la incrementamos de 2 en 2 (siempre será impar)
    otrosNumerosImpares.push(i);
}
console.log(otrosNumerosImpares);


//Añadir números pares a un array:
let numerosPares = [];

for (let i = 0; i <= 26; i += 2) {
    numerosPares.push(i);
}
console.log(numerosPares);