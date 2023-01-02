import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Colors from "../components/Colors";
import Container from "../components/Container";
import cross from "../images/cross.svg";
import watch2 from "../images/watch2.png";

const Compareproducts = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="comparewrapper py-4 home-wrapper">
        <div className="row">
          <div className="col-3">
            <div className="compareproductcard  position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute img-fluid cross"
              />
              <div className="productcardimage">
                <img src={watch2} className="img-fluid" alt="" />
              </div>
              <div className="comapreproductdetails mt-3">
                <h5 className="price">Lorem ipsum dolor sit amet.</h5>
                <h6 className="price mb-2 mt-2">$100</h6>
                <div>
                  <div className="productdetails">
                    <h5>Brand:</h5>
                    <p className="totalprice">Havels</p>
                  </div>
                  <div className="productdetails">
                    <h5>Type:</h5>
                    <p className="totalprice">Watch</p>
                  </div>
                  <div className="productdetails">
                    <h5>Availability:</h5>
                    <p className="totalprice">In stock</p>
                  </div>
                  <div className="productdetails">
                    <h5>Color:</h5>
                    <Colors />
                  </div>
                  <div className="productdetails">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p className="totalprice">S</p>
                      <p className="totalprice">M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compareproductcard  position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute img-fluid cross"
              />
              <div className="productcardimage">
                <img src={watch2} className="img-fluid" alt="" />
              </div>
              <div className="comapreproductdetails mt-3">
                <h5 className="price">Lorem ipsum dolor sit amet.</h5>
                <h6 className="price mb-2 mt-2">$100</h6>
                <div>
                  <div className="productdetails">
                    <h5>Brand:</h5>
                    <p className="totalprice">Havels</p>
                  </div>
                  <div className="productdetails">
                    <h5>Type:</h5>
                    <p className="totalprice">Watch</p>
                  </div>
                  <div className="productdetails">
                    <h5>Availability:</h5>
                    <p className="totalprice">In stock</p>
                  </div>
                  <div className="productdetails">
                    <h5>Color:</h5>
                    <Colors />
                  </div>
                  <div className="productdetails">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p className="totalprice">S</p>
                      <p className="totalprice">M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compareproductcard  position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute img-fluid cross"
              />
              <div className="productcardimage">
                <img src={watch2} className="img-fluid" alt="" />
              </div>
              <div className="comapreproductdetails mt-3">
                <h5 className="price">Lorem ipsum dolor sit amet.</h5>
                <h6 className="price mb-2 mt-2">$100</h6>
                <div>
                  <div className="productdetails">
                    <h5>Brand:</h5>
                    <p className="totalprice">Havels</p>
                  </div>
                  <div className="productdetails">
                    <h5>Type:</h5>
                    <p className="totalprice">Watch</p>
                  </div>
                  <div className="productdetails">
                    <h5>Availability:</h5>
                    <p className="totalprice">In stock</p>
                  </div>
                  <div className="productdetails">
                    <h5>Color:</h5>
                    <Colors />
                  </div>
                  <div className="productdetails">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p className="totalprice">S</p>
                      <p className="totalprice">M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compareproductcard  position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute img-fluid cross"
              />
              <div className="productcardimage">
                <img src={watch2} className="img-fluid" alt="" />
              </div>
              <div className="comapreproductdetails mt-3">
                <h5 className="price">Lorem ipsum dolor sit amet.</h5>
                <h6 className="price mb-2 mt-2">$100</h6>
                <div>
                  <div className="productdetails">
                    <h5>Brand:</h5>
                    <p className="totalprice">Havels</p>
                  </div>
                  <div className="productdetails">
                    <h5>Type:</h5>
                    <p className="totalprice">Watch</p>
                  </div>
                  <div className="productdetails">
                    <h5>Availability:</h5>
                    <p className="totalprice">In stock</p>
                  </div>
                  <div className="productdetails">
                    <h5>Color:</h5>
                    <Colors />
                  </div>
                  <div className="productdetails">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p className="totalprice">S</p>
                      <p className="totalprice">M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Compareproducts;
