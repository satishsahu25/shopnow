import React ,{useEffect,useState} from "react";
import Custominput from "../components/Custominput";
import { Link,useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useDispatch,useSelector} from 'react-redux';
import { login } from "../features/auth/authslice";


const Login = () => {
  // const [clicked,setclicked]=useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  let schema=Yup.object().shape({
    email:Yup.string().email("Email should be valid").required("Email is required"),
    password:Yup.string().required("Password is required")
  })

    const formik = useFormik({
      initialValues: {
        password:"",
        email: '',
      },validationSchema:schema,
      onSubmit:( values) => {
        // setclicked(true);
        dispatch(login(values));
        alert(JSON.stringify(values, null, 2));
      },
    });
    const {user,isLoading,isError,isSuccess,message}=useSelector((state)=>state.auth);
    console.log("user",user);
    useEffect(()=>{
        if(user){
            navigate("/admin");
        }else{
          navigate('/'); 
        }
    },[user,isLoading,isError,isSuccess]);
  
    
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />

      <div className="my-5 w-25 bg-white p-4 rounded-3 mx-auto">
        <h4 className="text-center">Login</h4>
        <p className="text-center">Login to your account to continue</p>
        <div className="error text-center">
          {message.message=='Rejected'?'You are not an admin':""}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <Custominput
            type="email"
            name="email"
            placeholder="Email Address"
            i_id="email"
            onCh={formik.handleChange('email')}
            val={formik.values.email}
          />
      <div className="error mt-3">
      {formik.touched.email&&formik.errors.email?(<div>{formik.errors.email}</div>):null}

      </div>
          <Custominput
            type="password"
            name="password"
            placeholder="Password"
            i_id="pass"           
            onCh={formik.handleChange('password')}
            val={formik.values.password}
          />
<div className="error mt-3">
{formik.touched.password&&formik.errors.password?(<div>{formik.errors.password}</div>):null}

</div>
          <button
            className="border-0 px-3 py-2 text-white fw-bold fs-5 text-decoration-none w-100 text-center"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </button>
          <div className="py-2 text-end">
            <Link to="/forgotpassword">forgot password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
