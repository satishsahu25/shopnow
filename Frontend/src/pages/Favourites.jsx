import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import cross from '../images/cross.svg'
import watch from "../images/watch.jpg"
const Favourites = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card bg-white position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image border-bottom">
                <img
                  src={watch}
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3 ">
                <h5 className="title">Honor 12.4GB RAM</h5>
                <h6 className="price">$450</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card bg-white position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image border-bottom">
                <img
                  src={watch}
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3 ">
                <h5 className="title">Honor 12.4GB RAM</h5>
                <h6 className="price">$450</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card bg-white position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image border-bottom">
                <img
                  src={watch}
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3 ">
                <h5 className="title">Honor 12.4GB RAM</h5>
                <h6 className="price">$450</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card bg-white position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image border-bottom">
                <img
                  src={watch}
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3 ">
                <h5 className="title">Honor 12.4GB RAM</h5>
                <h6 className="price">$450</h6>
              </div>
            </div>
          </div>
         
        </div>
      </Container>
    </>
  );
};

export default Favourites;
