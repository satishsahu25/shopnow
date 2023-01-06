import axios from "axios";
import { baseurl } from "../../utils/baseurl";

const getEnquiry = async () => {
  const response = await axios.get(`${baseurl}enquiry`);
    // console.log(response.data);
  return response.data;
};

const enquiryService = { getEnquiry };

export default enquiryService;
