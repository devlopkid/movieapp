import axios from "axios";
import { Base_URL } from "./Component/Constants/Constance";
const instance = axios.create({
    baseURL: Base_URL,
    
  });
  export default instance