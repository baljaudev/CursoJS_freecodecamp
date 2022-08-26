function rangoNumAlea(limInf, limSup) {
    return Math.floor(Math.random() * (limSup - limInf + 1)) + limInf; //expresión para generarlo entre 2 números dados, incluyendo el límite inferior y superior
}

for (let i = 0; i < 7; i++) {
    console.log(rangoNumAlea(3, 8)); //imprime números entre 3 y 8, ambos incluidos
}