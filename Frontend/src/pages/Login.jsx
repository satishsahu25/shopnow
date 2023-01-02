import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Custominput from "../components/Custominput";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper py-2 home-wrapper-2">
      <div className="row">
          <div className="col-12">
            <div className="authcard">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex gap-10 flex-column">
                <Custominput
                  type="email"
                  name="email"
                  placeholder="Email"
                  classname="mb-2"
                />
                 <Custominput
                  type="password"
                  name="password"
                  placeholder="Password"
                /> 
                       
                <div>
                  <Link to="/forgotpassword">Forgot password?</Link>
                  <div className="mt-2 d-flex justify-content-center gap-15 align-items-center">
                    <button className="btncss border-0" type="submit">Login</button>
                    <Link to="/signup" className="btncss signup">SignUp</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
   
    </>
  );
};

export default Login;
