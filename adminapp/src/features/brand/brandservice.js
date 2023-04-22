import axios from "axios";
import { baseurl } from "../../utils/baseurl";
import  headerconfig  from "../../utils/axiosconfig";

const getBrands = async () => {
  const response = await axios.get(`${baseurl}brand`);
    // console.log(response.data);
  return response.data;
};

const getBrand = async (brandid) => {
  const response = await axios.get(`${baseurl}brand/${brandid}`,headerconfig);
    // console.log(response.data);
  return response.data;
};

const updateBrand = async (brand) => {
  const response = await axios.put(`${baseurl}brand/${brand.id}`,{title:brand.branddata.title},headerconfig);
    // console.log(response.data);
  return response.data;
};
const createBrand=async(branddata)=>{
    const response=await axios.post(`${baseurl}brand`,branddata,headerconfig);
     console.log(response.data);
    return response.data;
};
const deleteBrand=async(brandid)=>{
  const response=await axios.delete(`${baseurl}brand/${brandid}`,headerconfig);
  return response.data;
};

const brandService = { getBrands,deleteBrand,getBrand,updateBrand,createBrand };

export default brandService;
