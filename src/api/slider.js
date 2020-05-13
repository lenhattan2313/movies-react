import axios from "../services/axios";
const url = "";
export const fetchSliderAPI = () => {
  return axios.get(url);
};
