var frutas = ["Melocotón", "Fresa", "Manzana", "Calabaza"];
var verdura;

//Utilizamos el método pop para eliminar el último elemento de un array; por eso no necesitamos pasarle ningún argumento:
frutas.pop();

//Podemos asignar a una varaible el elemento pop, porque éste método, también retorna además de eliminar:
verdura = frutas.pop();

console.log(frutas);
console.log(verdura);