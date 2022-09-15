/*Función que recibe 2 fechas como String por parámetro y las compara, devolviendo la diferencia en  años, meses y días entre ambas*/
const calcularDifFecha = (fecha1, fecha2) => {
    let primeraFecha = new Date(fecha1).getTime();
    let segundaFecha = new Date(fecha2).getTime();

    let totalDias = Math.floor((primeraFecha - segundaFecha) / (1000 * 3600 * 24));

    let anios = Math.floor(totalDias / 365);

    let meses = Math.floor(totalDias % 365 / 30);

    let dias = Math.floor(totalDias % 365 % 30);

    return 'Entre las dos fechas, han pasado ' + anios + ' años y ' + meses + ' meses y ' + dias + ' días.';
}

let BreathOfTheWild = '03/03/2017'; // --> DD/MM/AAAA
let TearsOfTheKingdom = '05/12/2023';

console.log(calcularDifFecha(TearsOfTheKingdom, BreathOfTheWild));