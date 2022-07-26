function sumar(num1, num2) {
    var suma = num1 + num2;
    console.log("El resultado de " + num1 + " + " + num2 + " es: " + suma);
}

sumar(4,2); //le asignamos los valores en el orden que aparecen como parámetros en la declaración de la función


//podemos poner como argumentos dos variables:
var a = 5;
var b = 6;
sumar(a,b);


//Ejemplo con String:
function concatenarDosCadenas(frase1, frase2) {
    console.log(frase1 + " " + frase2);
}

concatenarDosCadenas("Estoy aprendiendo", "JavaScript");