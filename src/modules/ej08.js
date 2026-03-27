import axios from "axios";


const APIKEY          = "424ca645";


const OMDBSearchByPage = async (searchText, page = 1) => {

  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : []

    };

    try
    {
    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
    const apiResponse = await axios.get(requestString);
    const data = apiResponse.data;

    if (data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = parseInt(data.totalResults);
      returnObject.datos = data.Search;
    }

    } 
  catch (error)
    {
    console.error("Error en OMDBSearchByPage:", error.message);
    }

  return returnObject;

};


const OMDBSearchComplete = async (searchText) => {

  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : []

    };

    try
    {
    const firstPage = await OMDBSearchByPage(searchText, 1);

    if (!firstPage.respuesta) return returnObject;

    returnObject.respuesta = true;
    returnObject.cantidadTotal = firstPage.cantidadTotal;
    returnObject.datos = [...firstPage.datos];

    const totalPages = Math.ceil(firstPage.cantidadTotal / 10);

    for (let i = 2; i <= totalPages; i++)
    {
      const pageResult = await OMDBSearchByPage(searchText, i);

      if (pageResult.respuesta)
      {
        returnObject.datos = [...returnObject.datos, ...pageResult.datos];
      }
    }

    }
  catch (error)
  {
    console.error("Error en OMDBSearchComplete:", error.message);
  }

  return returnObject;

};


const OMDBGetByImdbID = async (imdbID) => {

  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : {}

    };
     
    try
    {
    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;

    const apiResponse = await axios.get(requestString);
    const data = apiResponse.data;

    if (data.Response === "True")
    {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = 1;
      returnObject.datos = data;
    }

    }
  catch (error)
  {
    console.error("Error en OMDBGetByImdbID:", error.message);
  }

  return returnObject;

};

export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};

import
{
  OMDBSearchByPage,
  OMDBSearchComplete,
  OMDBGetByImdbID
} from "./modules/omdb-wrapper.js";

let resultado = null;

//1
resultado = await OMDBSearchByPage("cars", 1);
console.log("OMDBSearchByPage", resultado);

//2
resultado = await OMDBSearchComplete("cars");
console.log("OMDBSearchComplete", resultado);

//3
resultado = await OMDBGetByImdbID("tt0317219");
console.log("OMDBGetByImdbID", resultado);