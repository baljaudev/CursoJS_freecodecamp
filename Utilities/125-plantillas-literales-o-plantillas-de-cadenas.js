
/* Plantillas Literales

Características:
- Se usa el acento invertido (backtick) ` en lugar de comillas.
- Pueden contener comillas simples y dobles.
- Las líneas se preservan como se escriben en el código.
- Para reemplazar una variable se escribe ${variable}.
- Dentro de ${} también puedes escribir expresiones.
*/

let a = 6;
console.log(`El valor de a es ${a}`);


let nombre = "Rubén";
let edad = 32;
console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);


let miArray = [1, 2, 3, 4];
console.log(`Mi array es ${miArray}`);
console.log(`Mi array es ${JSON.stringify(miArray)}`); //mejor forma para representar objetos, a través del método stringify


//Vamos a reemplazar el valor de las propiedades de este objeto:
let persona = {
    "nombre" : "Nora Castaño",
    "edad" : 31
}; 

const SALUDO = `¡Hola! Bienvenido ${persona.nombre}, tu edad es ${persona.edad}`;
console.log(SALUDO);