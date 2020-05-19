import axios from "../services/axios";
import { API_KEY } from "../constant";
const url = "https://api.themoviedb.org/3/movie/popular";
export const fetchPopularAPI = () => {
  return axios.get(`${url}?api_key=${API_KEY}&language=en-US&page=1`);
};
