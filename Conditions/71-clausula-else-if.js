//función para comprobar el resto de un número:
function clasificarNum(num) {
    if (num % 2 == 0) {
        console.log("El número es divisible entre 2.");
    } else if (num % 3 == 0) {
        console.log("El número es divisible entre 3.");
    } else {
        console.log("El número no es divisible ni entre 2 ni entre 3.");
    }
}

clasificarNum(8);  //entra por el "if"
clasificarNum(17); //entra por el "else"
clasificarNum(9);  //entra por el "else if" 