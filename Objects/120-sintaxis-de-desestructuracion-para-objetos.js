//La desestructuración es asignar propiedades de un objeto, a variables
const usuario = {
    nombre : "Arya Stark",
    edad : 10
};

const nombreUser = usuario.nombre; //así lo habríamos hecho

//Otra forma más rápida y correcta:
const {nombre, edad} = usuario; //busca para ese objeto, esas propiedades y las asigna a variables con su mismo nombre

console.log(edad);