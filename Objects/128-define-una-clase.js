class TransbordadorEspacial {
    constructor(planeta) { //constructor para inicializar los atributos
        this.planeta = planeta; //el objeto va a tener una propiedad llamada planeta
    }
}

const zeus = new TransbordadorEspacial("Saturno");
console.log(zeus.planeta);

const apolo = new TransbordadorEspacial("Mercurio");
console.log(apolo.planeta);



class Perro {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const miPerro = new Perro("Kiwi", 1);

console.log(`Mi perro se llama ${miPerro.nombre} y tiene ${miPerro.edad} año.`);