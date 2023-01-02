import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from '../images/watch2.png';
import addtocart from "../images/add-cart.svg";
import view from "../images/view.svg";

const Productcard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname === "/products" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="/product/:id" className="productcard position-relative">
          <div className="wishlisticon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wish" />
            </button>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button    className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button  className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button  className="border-0 bg-transparent">
                <img src={addtocart} alt="addcart" />
              </button>
            </div>
          </div>
          <div className={`cardcontent ${grid===12?'d-flex':""}`}>
          <div className={`productimage`}>
            <img src={watch} className="img-fluid" alt="product" />
            <img src={watch2} className="img-fluid" alt="product" />
          </div>
          <div className={`productdetails`}>
            <h6 className="brand">Havels</h6>
            <h5 className="producttitle">
              Kids headphones bulk 10 pack multi colored
            </h5>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd760"
              value="3"
              edit={false}
            />
            <p className={`desc ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              labore?
            </p>
            <p className="price">$100.00</p>
          </div>
          </div>
        </Link>
      </div>

      
    </>
  );
};

export default Productcard;
