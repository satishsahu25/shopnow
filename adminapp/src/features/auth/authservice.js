import axios from 'axios'
import {baseurl} from '../../utils/baseurl'

const login=async(userdata)=>{
    const response=await axios.post(`${baseurl}user/adminlogin`,userdata);
    console.log(response.data);
    if(response.data.user!==null){
        localStorage.setItem('user',JSON.stringify(response.data));
        return response.data.user;
    }else{
        return null;
    }
    
}

const authService={login}

export default authService;