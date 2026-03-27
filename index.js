import axios from "axios";


let respuesta = await Test();

console.log('respuesta', respuesta);


const Test = async (searchText) => {

  const requestString = `http://www.omdbapi.com/?apikey=7c62gb5e&s=cars`;

  const apiResponse = await axios.get(requestString);

  return apiResponse.data;

};