import axios from "axios";
import { baseurl } from "../../utils/baseurl";

const getUsers = async () => {
  const response = await axios.get(`${baseurl}user/allusers`);
    // console.log(response.data);
  return response.data;
};

const customerService = { getUsers };

export default customerService;
