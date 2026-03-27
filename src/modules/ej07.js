import { getCurrencyAbbreviation } from 'country-currency-map';
import { getCountryByAbbreviation } from 'country-currency-map';


let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais) {  
let monedaPais;
codigoPais = (getCountryByAbbreviation(codigoPais))
monedaPais = (getCurrencyAbbreviation(codigoPais))
if (monedaPais == null){
    monedaPais = null;
}
return monedaPais;
}