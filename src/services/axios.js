import axios from "axios";
//status: 200, statusText: OK, data: {}, header: {}, config: {}, request: {}
class Axios {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }
  handleSuccess(response) {
    return response;
  }
  handleError(error) {
    return Promise.reject(error);
  }
  get(url) {
    return this.instance.get(url);
  }
}
export default new Axios();
