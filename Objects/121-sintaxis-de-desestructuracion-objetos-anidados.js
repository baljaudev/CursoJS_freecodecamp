const usuario = {
    "DaenerysTargaryen" : {
        "edad" : 13,
        "lugarNacimiento" : "Desembarco del Rey"
    }
};

//Vamos a asignar a variables, el valor de los objetos anidados:
const {DaenerysTargaryen : {edad, lugarNacimiento}} = usuario; //nombrePropiedad : {propiedad1, propiedad2}

console.log(lugarNacimiento);

//Si queremos que la variable tenda un nombre distinto al de la propiedad, la sintaxis cambia:
const {DaenerysTargaryen : {edad : edadUsuario, lugarNacimiento : nacimientoUsuario}} = usuario;

console.log("El usuario nació en " + nacimientoUsuario);



//Otro ejemplo:
const TEMPERATURA_MADRID = {
    "ayer" : {
        "minima" : 15,
        "maxima" : 30
    },
    "hoy" : {
        "minima" : 12,
        "maxima" : 26
    },
    "mañana" : {
        "minima" : 8,
        "maxima" : 20
    }
};

const {hoy : {minima : minimaHoy, maxima : maximaHoy}} = TEMPERATURA_MADRID;
console.log("La temperatura mínima para hoy es " + minimaHoy + " y la máxima es de " + maximaHoy);