function clasificarNum(num) {
    if (num < 5) {
        console.log("Número menor que 5.");
    } else if (num < 10) {
        console.log("Número menor que 10.");
    } else {
        console.log("Número mayor o igual a 10.");
    }
}

clasificarNum(2);  //if; también el else if sería verdadera, pero como el if va antes, solo ejecuta la primera que sea verdad
clasificarNum(7);  //else if
clasificarNum(13); //else