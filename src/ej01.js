let textoEntrada01 = "Escuela", textoEntrada02 = "ORT";

let textoSalida = "";


textoSalida = concatInvert(textoEntrada01, textoEntrada02);

console.clear();

console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);

console.log(`Texto de Salida: "${textoSalida}"`);


function concatInvert (texto1, texto2){

    let returnValue = '';
        returnValue = (texto1 + texto2)
        .split('')
        .reverse()
        .join('');
    return returnValue;

}