var listaNum = [10, 20, 30];

listaNum[0] = 5; //modificar el valor del primer elemento del array. Los arrays sí son mutables
listaNum[1] = "número"; //se puede también modificar el tipo de dato
listaNum[2] = [1, 2, 3]; //se puede tambien, asignar un array a una posición

console.log("Los elementos del array son: " + listaNum);