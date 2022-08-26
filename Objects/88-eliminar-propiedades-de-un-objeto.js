let miMoto = {
    "marca" : "Honda",
    "modelo" : "Rebel",
    "cilindrada" : 500,
};

//Borrar una key:
delete miMoto.cilindrada;
console.log(miMoto.cilindrada); //undefined, porque ya ha sido borrada  