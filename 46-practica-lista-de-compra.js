var listaFrutasGramos = [
    ["Manzana", 1200],
    ["Pera", 400],
    ["Pitaya", 150],
    ["Fresa", 500],
    ["Frambuesa", 300],
    ["Plátano", 700]
];

//Frambuesa:
console.log("¡Voy a comprar " + listaFrutasGramos[4][1] + "g de " + listaFrutasGramos[4][0] + "!");

//Pera:
console.log("¡Voy a comprar " + listaFrutasGramos[1][1] + "g de " + listaFrutasGramos[1][0] + "!");


//Avanzado por mi cuenta:
var elementos = listaFrutasGramos[0].length; //=2
for (let i = 0; i < listaFrutasGramos.length; i++) {
    console.log("Voy a comprar " + listaFrutasGramos[i][elementos-1] + "g de " + listaFrutasGramos[i][(elementos-2)] + ".");
}