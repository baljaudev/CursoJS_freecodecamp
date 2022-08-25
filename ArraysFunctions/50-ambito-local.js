//Variables que definimos dentro de una función y solo pueden usarse ahí
function miFuncion() {
    var num1 = 5;
    console.log(num1);
}

miFuncion();

console.log(num1); //da error, porque ha sido declarada dentro de la función