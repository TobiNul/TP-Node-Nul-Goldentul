import fs from 'fs';

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";

console.clear();    

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

 function copiar(origen, destino){
 try {
   fs.copyFile(origen, destino);
  console.log('archivo-entradafue copiado a archivo-salida.txt');
} catch (error) {
  console.error('El archivo no pudo ser copiado');
}

}