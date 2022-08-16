//Objeto más complejo formado por un array de objetos con sus key y values
let pedidoDePizzas = [
    {
        "tipo": "margarita",
        "tamaño": "mediana",
        "precio": 5.67,
        "toppings": [ //array para los toppings
            "extra queso",
            "champiñones",
            "piña"
        ],
        "paraLlevar": true
    },
    {
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": 18.34,
        "toppings": [
            "tomate",
            "pimentón"
        ],
        "paraLlevar": false
    }
];

//Para acceder al primer objeto del array, accedemos con su índice:
pedidoDePizzas[0];
pedidoDePizzas[1];

//Para acceder a la primera key del primer objeto:
console.log(pedidoDePizzas[0].tipo);
console.log(pedidoDePizzas[0]["tipo"]);

//Así accedemos en el primer objeto, al segundo topping (array):
console.log(pedidoDePizzas[0].toppings[1]);