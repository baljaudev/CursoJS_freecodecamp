let miMoto = {
    "marca" : "Honda",
    "modelo" : "Rebel",
    "numero de cilindros" : 2 //aquí la key tiene espacios
};

console.log("Mi moto tiene " + miMoto["numero de cilindros"] + " cilindros."); //con esta sintaxis podemos acceder a los key que tienen espacios; con el punto no podríamos. Los corchetes también valen para el resto de keys