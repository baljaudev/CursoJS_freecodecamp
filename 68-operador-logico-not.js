/*
Tabla de verdad del operador NOT 
Para: !X
    |  X  | !X  | 
    -----------------------
    |  T  |  F  |
    |  F  |  T  |
    Cambia al contrario el valor de la expresión
*/

let a = 8;

console.log(!(a > 5)); //negación de la expresión dentro del paréntesis; la expresión es true, pero al negarlo obtenemos false

a = 3;

console.log(!(a > 5)); //negación de la expresión dentro del paréntesis; la expresión es falsa porque 3 no es mayor que 5, pero al negarla, obtenemos true