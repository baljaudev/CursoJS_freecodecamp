var miVariableGlobal = "hola";

function miFuncion() {
    console.log(miVariableGlobal);
    var miVariableLocal = 8;
}

console.log(miVariableLocal); //error


// Ejemplo con let

var mostrarColor = true;

if (mostrarColor) {
    let color = "verde";
    console.log("Mi color favorito es: " + color);
}

console.log(color); // Error, no está definida fuera del bloque if

// Ejemplo con var

if (mostrarColor) {
    var color = "verde";
    console.log("Mi color favorito es " + color);
}

console.log(color); // No hay error