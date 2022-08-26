//Impedir la modificación de un objeto

let colores = {
    "verde": "#10e04b",
    "azul": "#1b50e0",
    "negro": "#000000",
    "blanco": "#ffffff"
}

Object.freeze(colores); //usando el método freeze del objeto Object, hacemos que no pueda modificarse

colores.amarillo = "fff200" //error porque ya está congelado; no podemos añadir nada ni modificar nada