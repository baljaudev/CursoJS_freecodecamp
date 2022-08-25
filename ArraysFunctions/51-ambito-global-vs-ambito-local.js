var miNombre = "Rubén";

function mostrarMiNombre() {
    var miNombre = "Otro";
    console.log(miNombre);
}

mostrarMiNombre(); //La variable local, predomina

console.log(miNombre); //aquí si usamos el valor de la global