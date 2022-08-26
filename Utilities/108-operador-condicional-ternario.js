//El operador ternario evalúa 2 opciones

function retornarMinimo(num1, num2) {
    if (num1 > num2) {
        return num2;
    } else {
        return num1;
    }
}

//Con ternario se compacta todo:
function retornarMinimoTernario(num1, num2) {
    return num1 > num2 ? num2 : num1; //pregunta cuál es el que cumple la condición y retorna uno u otro
}


//Otro ejemplo:
let a = 5;
let b = 9;

console.log(a > b ? a*3 : b+1); //es false la condición, entonces retorna b+1
