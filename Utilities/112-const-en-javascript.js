//No podemos modificar el valor de una variale con const

const MI_CONSTANTE = 3; //no puede declararse sin inicializarse

console.log(MI_CONSTANTE);

MI_CONSTANTE = 15; //constante read-only, no puede modificarse

function areaCirculo(radio) {
    const PI = 3.14; //esta variable no podrá modificarse

    if (radio < 0) {
        return undefined
    }

    return PI * (radio ** 2);
}

console.log(areaCirculo(5));