import axios from "axios";
import { baseurl } from "../../utils/baseurl";
import headerconfig from '../../utils/axiosconfig';

const getproductCategories = async () => {
  const response = await axios.get(`${baseurl}brand`);
    // console.log(response.data);
  return response.data;
};
const createProductcate=async(productcatedata)=>{
  const response=await axios.post(`${baseurl}productcategory`,productcatedata,headerconfig);
  return response.data;
};
const updateProductcate = async (productcate) => {
  const response = await axios.put(`${baseurl}productcategory/${productcate.id}`,{title:productcate.productcatedata.title},headerconfig);
    // console.log(response.data);
  return response.data;
};
const deleteProductcate=async(productcate)=>{
  const response=await axios.delete(`${baseurl}productcategory/${productcate.id}`,headerconfig);
  return response.data;
};
const getProductcate=async(productcate)=>{
  const response=await axios.get(`${baseurl}productcategory/${productcate.id}`,headerconfig);
  return response.data;
};

const productcategoriesService = { getproductCategories,getProductcate,deleteProductcate,updateProductcate,createProductcate };

export default productcategoriesService;
