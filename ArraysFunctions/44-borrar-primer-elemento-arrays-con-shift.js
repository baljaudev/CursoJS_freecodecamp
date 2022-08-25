var verduras = ["Piña", "Calabaza", "Guisante", "Pimiento"];
var fruta;

//Utilizamos el método shift que elimina el primer elemento de un array; como siempre será el primero, no necesitamos pasarle nada por parámetro:
verduras.shift();

//También podemos retornar shift en una variable a la que le asignemos ese primer elemento:
fruta = verduras.shift();

console.log(verduras);
console.log(fruta); //calabaza, porque piña ya fue borrada con el primer shift