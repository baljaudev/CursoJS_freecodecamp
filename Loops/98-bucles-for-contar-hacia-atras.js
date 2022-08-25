for (let i = 15; i >= 10; i--) { //contar hacia atrás restando a i
    console.log(i);
}

for (let i = 15; i >= 10; i -= 2) { //contar hacia atrás restando a i, en este caso de 2 en 2
    console.log(i);
}


//Otro ejemplo:

let miArray = [];

for (let i = 10; i > 0; i--) {
    miArray.push(i);
}

console.log(miArray);