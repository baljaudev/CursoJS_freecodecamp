function sumar(num1, num2) {
    var suma = num1 + num2;
    console.log("El resultado de " + num1 + " + " + num2 + " es: " + suma);
}

sumar(4,2); //le asignamos los valores en el orden que aparecen como parámetros en la declaración de la función


//podemos poner como argumentos dos variables:
var a = 5;
var b = 6;
sumar(a,b);


const listaMotos = []; //declaramos de forma global porque necesitaremos usarla dentro y fuera de la función
//Ejemplo con String:
function miMotoFavorita(marca, modelo) { //recoge por parámetro los dos string
    console.log("Mi moto favorita es: " + marca + " " + modelo); //los muestra por pantalla
    listaMotos.push(marca + " " + modelo); //añade los dos string como un elemento al final de un array
}

miMotoFavorita("Honda", "Rebel"); //ejecutamos la función y le indicamos los parámetros
console.log("Listado de motos: " + listaMotos); //mostramos el array con el elemento añadido