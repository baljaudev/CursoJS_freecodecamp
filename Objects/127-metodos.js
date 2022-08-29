const perro = {
    nombre : "Kiwi",
    presentarse() { //Si el valor de una propiedad (presentarse) es una función, se de nomina 'método', como es el caso
        return `¡Hola! Mi nombre es ${this.nombre}.`; //this se refiere al objeto con el que estamos trabajando
    }
};

console.log(perro.presentarse()); 