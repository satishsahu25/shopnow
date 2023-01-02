import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from '../components/Container';

const Checkout = () => {
  return (
    <>
      <Container class1="checkoutwrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-7">
            <div className="checkoutleftdata">
              <h3 className="websitename">ShopNow</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark totalprice">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item active totalprice"
                    aria-current="page"
                  >
                    Information
                  </li>{" "}
                  &nbsp; /
                  <li className="breadcrumb-item active totalprice">
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item active totalprice"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="userdetails total">
                Navdeep Dahi (navdeep@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex gap-15  flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="" id="" className="form-control form-select">
                    <option value="">
                      {" "}
                      Select country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, House, etc"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" id="" className="form-control form-select">
                    <option value="">
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="ZipCode"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack />
                      &nbsp; Return to cart
                    </Link>
                    <Link to="/cart" className="btncss">
                      Continue to shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5 bg-white">
            <div className="border-bottom py-4">
              <div className="d-flex gap-15 mb-2 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "-10px" }}
                      className="badge bg-secondary text-white rounded-circle position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src={watch} alt="" />
                  </div>
                  <div>
                    <h5 className="total">Lenovo Supersmart Tv</h5>
                    <p className="totalprice">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="totalprice">$1000</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 totalprice">$1000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="totalprice">$1000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
