var arrayBidi = [[1,2,3], [4,5,6], [7,8,9]];

/*
Array:          [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Índices:             0    ,     1    ,     2
Índices internos: 0  1  2 ,  0  1  2 ,  0  1  2
*/

console.log(arrayBidi[0]); //[1, 2, 3]
console.log(arrayBidi[1]); //[4, 5, 6]
console.log(arrayBidi[2]); //[7, 8, 9]

console.log(arrayBidi[1][2]); //6; indicamos entre cochetes el índice, y luego el subíndice
console.log(arrayBidi[2][0]); //7
console.log(arrayBidi[0][0]); //1


//Otro ejemplo con String:
var listaMotos = [
    ["Honda CB650R", "Honda Rebel", "Honda África Twin"],
    ["Ducati Monster", "Ducati Scrambler", "Ducati Panigale"],
    ["Yamaha R1", "Yamaha MT-07", "Yamaha Ténéré"]
];

console.log(listaMotos); //mostramos array bidimensional completo

console.log(listaMotos[1][2]); //Ducati Panigale: Accedemos al segundo array (1) y al tercer elemento (2). Recordemos que empieza a contar en 0

listaMotos[0][1] = "Honda Rebel 1100"; //modificamos el valor del elemento en índice 0 y subíndice 1
listaMotos[1][0] = listaMotos[1][0] + " 937"; //modificamos el valor del elemento añadiendo un string al final

console.log(listaMotos);