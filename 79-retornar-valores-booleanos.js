function esMenorQue(num1, num2) {
    if (num1 < num2) {
        return true;
    } else {
        return false;
    }
}

//forma abreviada:
function esMenorQueAbreviado(num1, num2) {
    return num1 < num2; //devuelve directamente true o false
}

console.log(esMenorQueAbreviado(3, 6)); //true