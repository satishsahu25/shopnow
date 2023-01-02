import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Custominput from "../components/Custominput";

const Forgotpass = () => {
  return (
    <>
      <Meta title={"Forgot password"} />
      <BreadCrumb title="Forgot password" />
      <div className="login-wrapper py-2 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="authcard ">
              <h3 className="text-center mb-3">Forgot password </h3>
              <p className="text-center my-2">
                We will send you to reset your password
              </p>
              <form action="" className="d-flex gap-15 flex-column">
                <Custominput
                  type="email"
                  name="email"
                  placeholder="Email"
                  classname="mb-2"
                />

                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="btncss border-0" type="submit">
                      Login
                    </button>
                    <Link to="/login">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpass;
