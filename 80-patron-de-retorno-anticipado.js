function prueba() {
    console.log("Hola");
    return "Mundo";
    console.log("Adiós"); //como va después del return, nunca se ejecutará. Las funciones se detienen al detectar el return (por eso se pone en gris)
}


function raizCuadrada(num) {
    if (num < 0) { //los números negativos no tienen raíz cuadrada
        return undefined; //indefinido será el valor que le demos cuando no queramos poner nada, simplemente detener la función
    }

    return Math.sqrt(num); //método para raíz cuadrada
}

console.log(raizCuadrada(25)); //5
console.log(raizCuadrada(-5)); //Como el número es negativo, entra en el if y devuelve el indefinido del return