/* En informática una cola (queue) es una estructura de datos abstracta 
en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden 
añadir al final de la cola y los elementos previos se retiran del principio de la cola. 


Define una función proximoEnLaFila que tome un array (cola) y un número (elemento) 
como argumentos. Agrega el número al final del arreglo y luego elimina el primer 
elemento del arreglo. La función proximoEnLaFila debe retornar el elemento 
que fue removido
*/

function proximoEnLaFila(cola, num) {
    cola.push(num); //añadir el número al final del array
    return cola.shift(); //retornar y eliminar el primer elemento del array
}

var arr = [1, 2, 3, 4, 5];

console.log("Cola antes: " + arr); //mostramos por consola el array antes del cambio

console.log(proximoEnLaFila(arr, 6)); //mostramos la ejecución de la función con su return

console.log("Cola después: " + arr);  //mostramos por consola el array después del cambio