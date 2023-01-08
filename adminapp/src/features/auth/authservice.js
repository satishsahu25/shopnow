import axios from "axios";
import { baseurl } from "../../utils/baseurl";
import headerconfig from '../../utils/axiosconfig';

 

const login = async (userdata) => {
  const response = await axios.post(`${baseurl}user/adminlogin`, userdata);
  // console.log(response.data);
  if (response.data.user !== null) {
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data.user;
  } else {
    return null;
  }
};

//get orders
const getallOrders = async () => {
    const response = await axios.get(`${baseurl}user/allorders`,headerconfig);
      console.log(response.data);
    return response.data;
  };

const authService = { login,getallOrders };

export default authService;
