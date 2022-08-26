//Tipo más compacto de funciones; usado cuando necesitamos usar funciones anónimas. Se usan mucho cuando se pasa una función como argumento a otra

//Función anónima 'normal':
const fecha = function() {
    return new Date();
}

//Función anónima flecha:
const fechaNueva = () => new Date();