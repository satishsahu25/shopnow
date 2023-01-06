import axios from "axios";
import { baseurl } from "../../utils/baseurl";

const getBlogs = async () => {
  const response = await axios.get(`${baseurl}blog`);
    // console.log(response.data);
  return response.data;
};

const blogService = {getBlogs };

export default blogService;
