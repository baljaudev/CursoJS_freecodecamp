let mochila = {
    "color" : "marrón",
    "tamaño" : "grande",
    "contenido" : ["botella de agua", "cuaderno"]
};

mochila.color = "verde";  //mochila[color] no funciona
console.log(mochila.color)

//Añadir un elemento en un value:
mochila.contenido.push("lápiz"); //podemos usar el método .pop() para eliminar

console.log("Mi mochila tiene: " + mochila.contenido);

//También podemos modificar todos los elementos de la key contenido:
mochila.contenido = ["calculadora", "bolígrafo"];

console.log("Mi mochila ahora tiene: " + mochila.contenido);