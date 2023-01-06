import axios from "axios";
import { baseurl } from "../../utils/baseurl";

const getproductCategories = async () => {
  const response = await axios.get(`${baseurl}brand`);
    // console.log(response.data);
  return response.data;
};

const productcategoriesService = { getproductCategories };

export default productcategoriesService;
