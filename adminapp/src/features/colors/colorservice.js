import axios from "axios";
import { baseurl } from "../../utils/baseurl";

const getColors = async () => {
  const response = await axios.get(`${baseurl}color`);
    // console.log(response.data);
  return response.data;
};

const colorService = { getColors };

export default colorService;
