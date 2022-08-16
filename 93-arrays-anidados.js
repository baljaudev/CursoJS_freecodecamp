let misVideojuegos = [
    {
        "tipo" : "deportes",
        "titulo" : [ //array anidado
            "NBA2k",
            "FIFA",
            "Madden"
        ]
    },
    {
        "tipo": "RPG",
        "titulo" : [
            "Zelda",
            "Cyberpunk 2077",
            "Red Dead Redemption"
        ]
    }
];

let primerVideojuego = misVideojuegos[0].titulo[0];

console.log(primerVideojuego); //NBA2k
console.log(misVideojuegos[1].titulo[1]); //Cyberpunk