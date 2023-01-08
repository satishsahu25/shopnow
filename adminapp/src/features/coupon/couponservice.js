import axios from "axios";
import { baseurl } from "../../utils/baseurl";
import  headerconfig  from "../../utils/axiosconfig";

const getallcoupons = async () => {
  const response = await axios.get(`${baseurl}coupon`);
    // console.log(response.data);
  return response.data;
};

const createCoupon=async(coupondata)=>{
    const response=await axios.post(`${baseurl}coupon`,coupondata,headerconfig);
    return response.coupon
}
const couponService = { getallcoupons,createCoupon };

export default couponService;
