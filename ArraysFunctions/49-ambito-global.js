//Variables declaradas en el programa principal, no dentro de funciones
var miVariableGlobal = "Hola";

console.log(miVariableGlobal); //accedemos al valor de la variable

function pruebaVarGlobal() {
    console.log(miVariableGlobal); //podemos usar la variable dentro de una función
}

pruebaVarGlobal();