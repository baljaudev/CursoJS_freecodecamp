let miArrayBi = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < miArrayBi.length; i++) { //para la longitud del array, 3 en este caso
    console.log("Elemento " + i + " del array principal");
    for (let j = 0; j < miArrayBi[i].length; j++) { //recorre el array interno, también de longitud 3
        console.log("Elemento anidado: " + miArrayBi[i][j]); //imprime el elemento
    }
}
//(comprobar con debugger en VSC)