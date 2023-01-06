import axios from "axios";
import { baseurl } from "../../utils/baseurl";

const getblogCategories = async () => {
  const response = await axios.get(`${baseurl}blogcategory`);
    // console.log(response.data);
  return response.data;
};

const blogcategoriesService = {getblogCategories };

export default blogcategoriesService;
