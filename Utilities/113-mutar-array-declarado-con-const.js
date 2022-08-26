//Una constante no puede modificarse, pero sí puede cambiar su contenido, como en caso de un array:
const MOTOS_DUCATI = ["Monster", "Panigale", "Scrambler", "Multistrada"];

MOTOS_DUCATI[3] = "998"; //puede mutar un elemento

console.log(MOTOS_DUCATI);