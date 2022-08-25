function seleccionarIdioma(valor) {
    let idioma;

    switch (valor) {
        case 1:
            idioma = "Español"
            break;
        case 2:
            idioma = "Alemán"
            break;
        case 3:
            idioma = "Inglés"
            break;
        default:
            idioma  = "Chino"
            break;
    }

    return idioma;
}

console.log(seleccionarIdioma(4)); //como pasamos por parámetro un número que no está, entra en el "default". Por lo tanto, imprime chino