import fs from 'fs';
const ARCHIVO_ENTRADA = "./archivo-enefefetrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino) {
  try {
    fs.copyFileSync(origen, destino);
    console.log('archivo-entrada fue copiado a archivo-salida.txt');
  } catch (error) {
    console.error('no se pudo copiar');
  }
}