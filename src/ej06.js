let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);
function parsearUrl(laURL) {
    let objetoFinal;
    try {
        const miUrl = new URL(laURL);
        objetoFinal = { host: miUrl.origin, pathname: miUrl.pathname, parametros: miUrl.searchParams }
    } catch (error) {
        console.log("Ocurrio un error con la url:" + error)
        objetoFinal = { host: null, pathname: null, parametros: null }
    }
    return objetoFinal;

}
