import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from '../components/Container';

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <Container class1="cartwrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex py-3 cart-header justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>

            <div className="d-flex mb-2 cart-data justify-content-between align-items-center">
              <div className="cart-col-1 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} className="img-fluid" alt="watch" />
                </div>
                <div className="w-75 px-2">
                  <p className="title">FDSFSD</p>
                  <p>Size: sdaf</p>
                  <p>Color: fdas</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$100</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$450</h5>
              </div>
            </div>
          </div>
          
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link className="btncss" to="/products">
                Continue to shopping
              </Link>
            </div>
            <div className="d-flex flex-column align-items-end justify-content-end">
              <h4>Subtotal: $400</h4>
              <p className="totalprice">Taxes and shipping calculated at checkout</p>
              <Link to="/checkout" className="btncss">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
