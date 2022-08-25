function sumar(a, b) {
    return a + b;
}

var resultado = sumar(5, 3);
console.log(resultado);




function marcaFavoritaMoto(marcaMoto) { //la función recibirá un String por parámetro
    return "Mi marca favorita es " + marcaMoto; // el return concatenará el String que hemos indicado, con ese parámetro
}

var miMarca = marcaFavoritaMoto("Honda"); //guardamos en una variable el valor de la función pasándole el parámetro
console.log(miMarca); //y la mostramos por pantalla