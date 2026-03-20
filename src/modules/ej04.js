import fs from 'fs';

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";

console.clear();    

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

 function copiar(origen, destino){
 try {
   fs.copyFile(origen, destino);
  console.log('archivo-entrada.txt was copied to archivo-salida.txt');
} catch {
  console.error('The file could not be copied');
}

}