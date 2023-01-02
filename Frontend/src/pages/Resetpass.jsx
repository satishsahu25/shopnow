import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Custominput from "../components/Custominput";

const Resetpass = () => {
  return (
    <>
      <Meta title={"Reset your password"} />
      <BreadCrumb title="Reset your password" />
      <Container class1="login-wrapper py-2 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="authcard ">
              <h3 className="text-center mb-3">Reset your password </h3>
              <form action="" className="d-flex gap-15 flex-column">
                <Custominput
                  type="password"
                  name="password"
                  placeholder="Password"
                  classname="mb-2"
                />
                <Custominput
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm password"
                  classname="form-control mb-2"
                />

                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="btncss border-0" type="submit">
                      Submit
                    </button>
                    <Link to="/login">Cancel</Link>
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

export default Resetpass;
