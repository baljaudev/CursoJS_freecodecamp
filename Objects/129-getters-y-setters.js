class Libro {
    constructor(autor) {
        this._autor = autor; //por convención, para indicar que un atributo es privado, se indica su nombre con un guión bajo al comiendo
    }

    get autor() { //obtener un valor
        return this._autor;
    }

    set autor(nuevoAutor) { //actualizar el valor al pasado por parámetro
        this._autor = nuevoAutor;
    }
}


const libro = new Libro("JRR Tolkien");
console.log(libro.autor); //llama al getter que tiene el return

libro.autor = "Anónimo";  //establecemos usando el setter el nuevo autor
console.log(libro.autor);