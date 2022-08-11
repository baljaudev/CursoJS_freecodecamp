/*
Tabla de verdad del operador AND 
Para: X && Y
    |  X  |  Y  | X && Y | 
    -----------------------
    |  T  |  T  |    T   |
    |  T  |  F  |    F   |
    |  F  |  T  |    F   |
    |  F  |  F  |    F   |
La expresión solo es verdadera cuando ambos operandos son verdaderos.
*/

let a = 8;

console.log((a > 5) && (a < 10)); //true porque ambas son true

a = 3;

console.log((a > 5) && (a < 10)); //false, porque solo es true la segunda comprobación