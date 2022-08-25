let contactos = [
    {
        "nombre": "Nora",
        "apellido": "Castaño",
        "numero": "0543236543",
        "gustos": ["Pizza", "Programación"]
    },
    {
        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "0994372684",
        "gustos": ["Hogwarts", "Magia"]
    },
    {
        "nombre": "Sherlock",
        "apellido": "Holmes",
        "numero": "0487345643",
        "gustos": ["Casos interesantes", "Violín"]
    }
];

function buscarContacto(nombre, propiedad) {
    for (let i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre === nombre) { //si la propiedad nombre es igual al nombre pasado por parámetro
            return contactos[i][propiedad] || "La propiedad no existe"; //es necesario usar notación de corchetes por ser una variable. Si existe la propiedad, la retorna; si no (undefined) retorna el string de aviso
        }
    }
    return "El contacto no está en la lista de contactos"; //si termina el for, es que no ha encontrado el contacto, porque no entrará en el if
}

console.log(buscarContacto("Nora", "gustos"));