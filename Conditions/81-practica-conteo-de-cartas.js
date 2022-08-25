/* Descripción:
En el juego de casino Blackjack el jugador puede sacarle ventaja a la casa llevando un registro del número relativo
de cartas altas y bajas que quedan en la baraja. Esto se llama "conteo de cartas".

Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla. 
- Cuando el conteo es positivo, el jugador debería apostar alto. 
- Cuando el conteo es 0 o negativo, el jugador debería apostar bajo.

Cambio del conteo	     Cartas
---------------------------------------------
+1	                  2, 3, 4, 5, 6
0	                  7, 8, 9
-1	                  10, 'J', 'Q', 'K', 'A'
Nuestra meta es definir una función para contar cartas. 
La función debe tomar un parámetro carta que puede ser un número o una cadena de caracteres y luego aumentar o reducir el valor de la variable conteo de acuerdo al valor de la carta (observa la tabla). 
La función debe retornar una cadena de caracteres con el conteo actual y la cadena:
- "Apostar" si el conteo es positivo.
- "Esperar" si el conteo es cero o negativo. 
El conteo actual y la decisión del jugador ("Apostar" o "Esperar") deben estar separados por un espacio.
*/


function contarCartas(carta) {
    let conteo = 0; //variable para guardar el conteo

    switch (carta) {
        case 1: 
        case 2: 
        case 3: 
        case 4: 
        case 5: 
        case 6:
            conteo++; //si la carta está entre 1 y 6; aumenta el conteo
            break;
        case 7:
        case 8:
        case 9:
            conteo = 0; //se queda a cero con 7, 8 ó 9
            break;
        case 10: 
        case "J":
        case "Q": 
        case "K": 
        case "A":
            conteo--; //si la carta está entre 10 y el resto; disminuye el conteo
            break;
        default:
            return "Valor de parámetro no válido."; //si el valor no se encuentra entre los aceptados, retornamos el error
    }

    let decisionJuego;
    if (conteo > 0) {
        decisionJuego = "Apostar";
    } else {
        decisionJuego = "Esperar";
    }

    return conteo + " " + decisionJuego; //return como dice el enunciado en la última línea
}

console.log(contarCartas(4));