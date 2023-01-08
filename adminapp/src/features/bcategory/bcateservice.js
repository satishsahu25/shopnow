import axios from "axios";
import { baseurl } from "../../utils/baseurl";
import headerconfig from "../../utils/axiosconfig";

const getblogCategories = async () => {
  const response = await axios.get(`${baseurl}blogcategory`);
    // console.log(response.data);
  return response.data;
};

const createBlogcategories=async(bcatedata)=>{
  const response=await axios.post(`${baseurl}blogcategory`,bcatedata,headerconfig);
  return response.data;
}

const blogcategoriesService = {getblogCategories ,createBlogcategories};

export default blogcategoriesService;
