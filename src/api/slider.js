import axios from "../services/axios";
import { API_KEY } from "../constant";
// const url = "";
export const fetchSliderAPI = () => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
};
