//Número aleatorio entre 0 y 19:
let numAlea = Math.floor(Math.random() * 20);
//'floor' quita el decimal al número aleatorio; y la multiplicación por 20, nos genera ese entero; indicando el límite superior, 20 en este caso

console.log(numAlea);

function generarAlea(limiteSuperior) {
    //Generar número entre 0 y el límite superior, excluyendo éste:
    return Math.floor(Math.random() * limiteSuperior);
}

console.log(generarAlea(5)); //sale un número entre 0 y 4