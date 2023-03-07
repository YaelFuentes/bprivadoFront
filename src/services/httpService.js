import axios from 'axios'

const API = 'http://192.168.0.102:3000';
axios.defaults.baseURL = API;


export default {
  get : axios.get,
  post : axios.post,
  put : axios.put,
  delete : axios.delete,
  API
}