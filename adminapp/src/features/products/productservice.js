import axios from "axios";
import { baseurl } from "../../utils/baseurl";
import headerconfig from '../../utils/axiosconfig';

const getProducts = async () => {
  const response = await axios.get(`${baseurl}product`);
  return response.data;
};

const createProduct=async(productdata)=>{
    const response=await axios.post(`${baseurl}product/create`,productdata,headerconfig);
    return response.data;
}

const productService = { getProducts,createProduct };

export default productService;
