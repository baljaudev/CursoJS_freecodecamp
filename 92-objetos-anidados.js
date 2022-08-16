let recetaBrownie = {
    "descripcion": "mi receta de brownie",
    "dificultad": "media",
    "tiempoMin" : 70,
    "ingredientes": {
        "masa": {
        "harina": "100 grs",
        "sal": "1 cucharadita",
        "agua": "1 taza"
        },
        "cobertura": {
        "azucar": "120 grs",
        "chocolate": "4 cucharadas",
        "mantequilla": "200 grs"
        }
    }
};

console.log(recetaBrownie.ingredientes.masa); //vemos el objeto que corresponde a masa

console.log(recetaBrownie.ingredientes.masa.agua); //accedemos al value de la key agua

console.log(recetaBrownie.ingredientes["masa"]["harina"]); //con la notación de corchete, podemos sustituir éstos por una variable y esto no podemos hacerlo con la notación de punto

//Otro ejemplo de objeto anidado
let componentesMoto = {
    "descripcion" : "componentes de una motocicleta para un taller",
    "carroceria" : {
        "trenDelantero" : {
            "hoquilla" : true,
            "manetasFreno" : true,
            "faroDelantero" : true
        },
        "trenTrasero" : {
            "cadena" : true,
            "matricula" : true,
            "tubo de escape" : true
        }
    }
};