import axios from "axios";
import { baseurl } from "../../utils/baseurl";
import headerconfig from '../../utils/axiosconfig';


const getBlogs = async () => {
  const response = await axios.get(`${baseurl}blog`);
    // console.log(response.data);
  return response.data;
};
const createBlog=async(blogdata)=>{
    const response=await axios.post(`${baseurl}blog`,blogdata,headerconfig);
    return response.data;
}

const blogService = {getBlogs ,createBlog};

export default blogService;
