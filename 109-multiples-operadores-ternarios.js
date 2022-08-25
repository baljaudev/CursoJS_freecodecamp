function compararNumeros(a, b) {
    if (a == b) {
        return "a y b son iguales";
    } else if (a > b) {
        return "a es mayor que b";
    } else {
        return "a es menor que b";
    }
}

//Remplazar con ternario:
function compararNumTern(a, b) {
    return a == b ? "a y b son iguales" //si la condición es true, retorna
        : a > b ? "a es mayor que b" //si no, comprueba esta y si es true, retorna
        : "a es menor que b"; //si ninguna de las anteriores es true, retorna esta
}

console.log(compararNumTern(11, 27)) //a es menor que b