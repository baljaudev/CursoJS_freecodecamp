function clasificarRespuesta(num) {
    let respuesta;

    switch (num) {
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
    }

    return respuesta;
}

console.log(clasificarRespuesta(3));  //gamma


//Ejemplo con strings:
function tiposMenu(menu) {
    let plato;

    switch (menu) {
        case "taco":
            plato = "El menú de taco vale 6.50€";
            break;
        case "burrito":
            plato = "El menú de burrito vale 7.30€";
            break;
        case "quesadilla":
            plato = "El menú de quesadilla vale 4.00€";
            break;
    }

    return plato;
}

let pedido = tiposMenu("taco");

console.log(pedido);