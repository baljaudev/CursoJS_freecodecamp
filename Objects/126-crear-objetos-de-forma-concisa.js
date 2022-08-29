//Función flecha que retorna un objeto
const crearPersona = (nombre, edad, idioma) => {
    return {
        nombre : nombre,
        edad : edad,
        idioma : idioma
    };
};

console.log(crearPersona("Nieves", 28, "Español"));



//Forma más concisa de crearlo:
const crearPersonaDos = (nombre, edad, idioma) => ({nombre, edad, idioma}); //las llaves indican el retorno del objeto

console.log(crearPersona("Rubén", 32, "Español"));