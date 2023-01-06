import axios from "axios";
import { baseurl } from "../../utils/baseurl";

const getProducts = async () => {
  const response = await axios.get(`${baseurl}product`);
    // console.log(response.data);
  return response.data;
};

const productService = { getProducts };

export default productService;
