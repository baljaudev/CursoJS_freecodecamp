//For se usa cuando sabemos cuántas iteraciones van a ser necesarias
let miArray = [];

for (let i = 0; i < 6; i++) { //desde i en 0 mientras sea menor estricto que 6 y yendo de 1 en 1 (i++)
    miArray.push(i); //añadimos i al array
}

console.log(miArray);

//Incrementando i de 2 en 2:
let miOtroArray = [];
for (let i = 0; i < 6; i += 2) { //desde i en 0 mientras sea menor estricto que 6 y yendo de 2 en 2
    miOtroArray.push(i); //añadimos i al array
}

console.log(miOtroArray);