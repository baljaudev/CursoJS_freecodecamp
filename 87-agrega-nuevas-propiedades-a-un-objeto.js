let miMoto = {
    "marca" : "Honda",
    "modelo" : "Rebel",
    "cilindrada" : 500,
};

//Añadimos una key y value nuevos al objeto miMoto:
miMoto.color = "gris"; 
miMoto["color"] = "azul"; //también es válida la notación de corchetes

console.log(miMoto.color);