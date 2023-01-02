import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import watch1 from "../images/watch1.png";

const SpecialProduct = () => {
  return (
    <div className="col-4 mb-3">
      <div className="specialproductcard">
        <div className="d-flex flex-row">
          <div>
            <img src={watch1} className="img-fluid" alt="watch" />
          </div>
          <div className="specialproductcontent ">
            <h5>Havels</h5>
            <h6 className="title">Samsung Galaxy ends here</h6>
            <ReactStars
              count={5}
              size={20}
              activeColor="#ffd760"
              value="3"
              edit={false}
            />
            <p className="price">
              <span className="redprice">
                $100 &nbsp;<strike>$200</strike>
              </span>
            </p>
            <div className="discount d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 days</b>
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prodcount">
              <p className="totalprice">Products: 5</p>
              <div className="progress mb-3">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="btncss">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
