//Operador que sirve para que la función transforme a un array de argumentos, el número de los mismos que se llamen en el momento de ejecutar la función. Se declara con 3 puntos suspensivos:
function funcionPrueba(...args) { //'args' es el nombre del array que contendrá los argumentos pasados
    console.log(args);
    console.log(args.length); //número de argumentos
}

funcionPrueba(1, 2);
funcionPrueba(1, 2, "hola");
funcionPrueba(["Rebel", "CB650R"], ["Mosnter", "Panigale"]);


const sumar = (...args) => {
    return args.reduce((a, b) => a + b, 4); //reduce() suma los elementos del array y devuelve el resultado. Tiene una función flecha como argumento
};

console.log(sumar(5, 2, 5)); //suma los 3 elementos, +4 que aparece en el return