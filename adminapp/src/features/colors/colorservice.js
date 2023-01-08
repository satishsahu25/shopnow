import axios from "axios";
import headerconfig from "../../utils/axiosconfig";
import { baseurl } from "../../utils/baseurl";



const getColors = async () => {
  const response = await axios.get(`${baseurl}color`);
    // console.log(response.data);
  return response.data;
};

const createColor=async(Colordata)=>{
  const response=await axios.post(`${baseurl}color`,Colordata,headerconfig);
  return response.data;
}

const colorService = { getColors ,createColor};

export default colorService;
