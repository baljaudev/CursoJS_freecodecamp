//Podemos asignar valores a vaariables usando arrays:
let a;
let b;

[a, b] = [1, 2];

//Si tenemos más elementos en el array pero queremos asignar unos en concreto:
[a, , , b] = [1, 2, 3, 4, 5, 6]; //queremos que b, valga 4 por lo que dejamos los espacios
console.log(b);

//Podemos usar también la desestructuración para camabiar los valores de un array:

let num1 = 5;
let num2 = 9;

[num2, num1] = [num1, num2];

console.log("Num1 vale ahora: " + num1);
console.log("Num2 vale ahora: " + num2);