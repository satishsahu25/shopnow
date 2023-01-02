import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Custominput from "../components/Custominput";

const Signup = () => {
  return (
    <>
      <Meta title={"SignUp"} />
      <BreadCrumb title="SignUp" />
      <Container class1="login-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="authcard ">
              <h3 className="text-center mb-2">SignUp</h3>
              <form action="" className="d-flex gap-10 flex-column">
                <Custominput type="text" name="name" placeholder="name" />
                <Custominput
                  type="email"
                  name="email"
                  placeholder="Email"
                  classname="mb-2"
                />
                <Custominput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile number"
                  classname="mb-2"
                />
                <Custominput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <Link to="/login">Already have an account ? Login</Link>
                  <div className="mt-2 d-flex justify-content-center gap-15 align-items-center">
                    <Link className="btncss signup" type="submit">
                      SignUp
                    </Link>
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

export default Signup;
