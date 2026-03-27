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