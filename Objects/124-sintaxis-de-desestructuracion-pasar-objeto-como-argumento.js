let nuevoPerfilCliente = {
    nombre: "Nora Castaño Ribes",
    nacimiento: 1991,
    nacionalidad: "Española",
    ubicacion: "Barcelona"
};

const actualizarCliente = ({ubicacion}) => { //en lugar de pasarle el objeto como parámetro, pasamos una propiedad
    nuevoPerfilCliente.ubicacion = "Madrid";
    console.log(ubicacion);
}

actualizarCliente(nuevoPerfilCliente);

console.log(nuevoPerfilCliente);


//Otro ejemplo:

const alturaMaxMinRegistrada = {
    "max" : 192,
    "min" : 156
};

const alturaMedia = ({max, min}) => ((max + min) / 2); //pasamos por parámetro directamente las propiedades y luego operamos con ellas

console.log(alturaMedia(alturaMaxMinRegistrada));