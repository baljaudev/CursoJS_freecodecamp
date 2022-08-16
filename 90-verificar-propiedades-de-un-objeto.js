let miReloj = {
    "marca" : "Garmin",
    "modelo" : "Fénix 6 Pro",
    "anio" : 2020,
    "color" : "negro"
};

//Para verificar si un objeto tiene, o no, una key específica:
console.log(miReloj.hasOwnProperty("anio")); //true
console.log(miReloj.hasOwnProperty("tipo")); //false; no tiene esa propiedad/key

//Función para verificar si un objeto tiene o no una key pasando por parámetro dicho objeto y key:
function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) { //si tiene la propiedad
        return "Propiedad: " + obj[propiedad];
    } else { //si no tiene la propiedad
        return "El objeto no tiene esa propiedad";
    }
}

console.log(verificarPropiedad(miReloj,"marca")); //entra en el if
console.log(verificarPropiedad(miReloj,"tipo")); //entra en el else