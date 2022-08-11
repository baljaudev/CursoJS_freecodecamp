/*
Tabla de verdad del operador OR 
Para: X || Y
    |  X  |  Y  | X || Y | 
    -----------------------
    |  T  |  T  |    T   |
    |  T  |  F  |    T   |
    |  F  |  T  |    T   |
    |  F  |  F  |    F   |
La expresión es verdadera si alguno de los dos operandos o ambos son verdaderos.
*/

let a = 8;

console.log((a > 5) || (a < 10)); //true; ambos son verdad

a = 3;

console.log((a > 5) || (a < 10)); //true; solo uno es verdad, pero con eso sirve

console.log((a > 4) || (a < 2)); //false, ninguna se cumple