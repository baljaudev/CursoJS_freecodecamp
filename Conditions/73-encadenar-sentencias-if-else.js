//Función para interpretar y clasificar el índide de masa corporal:
function interpretarIMC(indice) {
    if (indice < 18.5) {
        console.log("Bajo peso");
    } else  if (indice <= 24.9) {
        console.log("Peso normal");
    } else if (indice <= 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidad"); //no cumple ni el if ni los else if; por tanto el índice es mayor a 30
    }
}

interpretarIMC(28.5); //sobrepeso