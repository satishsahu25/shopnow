import axios from "axios";
import { baseurl } from "../../utils/baseurl";

const getBrands = async () => {
  const response = await axios.get(`${baseurl}brand`);
    // console.log(response.data);
  return response.data;
};

const brandService = { getBrands };

export default brandService;
