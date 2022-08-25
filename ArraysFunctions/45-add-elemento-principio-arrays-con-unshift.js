var estaciones = ["Otoño", "Invierno", "Primavera"];

//Utilizamos el método unshift para añadir un elemento al principio de un array. Aquí, por supuesto, sí necesitamos el elemento a incluir por parámetro al método:
estaciones.unshift("Verano");
estaciones.unshift(2); //podemos añadir otro tipo de datos
console.log(estaciones);