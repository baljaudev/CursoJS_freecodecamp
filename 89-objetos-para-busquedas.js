//Podemos usar un objeto para sustituir las posibilidades que nos ofrece un switch; pasándole la key por parámetro, obtenemos el value.

function ComprobarDiaSemana(dia) {
    //let diaCompleto;

    let diasSemana = {
        "L" : "Lunes",
        "M" : "Martes",
        "X" : "Miércoles",
        "J" : "Jueves",
        "V" : "Viernes",
        "S" : "Sábado",
        "D" : "Domingo"
    };

    return diasSemana[dia];

/*
    switch (dia) {
        case "L":
            diaCompleto = "Lunes";
            break;
        case "M":
            diaCompleto = "Martes";
            break;
        case "X":
            diaCompleto = "Miércoles";
            break;
        case "J":
            diaCompleto = "Jueves";
            break;
        case "V":
            diaCompleto = "Viernes";
            break;
        case "S":
            diaCompleto = "Sábado";
            break;
        case "D":
            diaCompleto = "Domingo";
            break;
        default:
            break;
    }

    return diaCompleto;
*/
}

console.log(diaSemana("X"));