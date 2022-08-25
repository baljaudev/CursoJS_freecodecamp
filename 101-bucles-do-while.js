let num = 0;

do { //al menos una vez se ejecuta el bloque, ya que está antes de la evaluación de la condición
    console.log(num);
    num++;
} while (num > 5); //condición false, no se ejecuta más el do