import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import Productcard from "../components/Productcard";
import Colors from "../components/Colors";
import watch from "../images/watch.jpg"
import gr from "../images/gr.svg"
import gr2 from "../images/gr2.svg"
import gr3 from "../images/gr3.svg"
import gr4 from "../images/gr4.svg"
import Container from "../components/Container";

const Stores = () => {
    const[grid,setgrid]=useState(4);
   
  return (
    <>
      <Meta title="Stores" />
      <BreadCrumb title="Stores" />
      <Container class1="store-wrapper home-wrapper-2 py-4">
      <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter by</h3>
                <div>
                  <h5 className="subtitle">Availability</h5>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />
                    <label htmlFor="" className="form-check-label">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      checked
                    />
                    <label htmlFor="" className="form-check-label">
                      Out of Stock (0)
                    </label>
                  </div>
                  <h5 className="subtitle">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingpoint"
                        placeholder="From"
                      />
                      <label htmlFor="floatingpoint">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control m-0"
                        id="floatingpoint"
                        placeholder="To"
                      />
                      <label htmlFor="floatingpoint">To</label>
                    </div>
                  </div>
                  <h5 className="subtitle">Colors</h5>
                  <div>
                    <div className="d-flex flex-wrap">
                     <Colors/>
                    </div>
                  </div>
                  <h5 className="subtitle">Size</h5>
                  <div className="align-items-center ">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                      />
                      <label htmlFor="" className="form-check-label">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                      />
                      <label htmlFor="" className="form-check-label">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Product tag</h3>
                <div>
                  <div className="producttags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge text-secondary tagbg py-2 px-3 rounded-3">
                      Headphone
                    </span>
                    <span className="badge text-secondary tagbg py-2 px-3 rounded-3">
                      Laptops
                    </span>
                    <span className="badge text-secondary tagbg py-2 px-3 rounded-3">
                      Mobiles
                    </span>
                    <span className="badge text-secondary tagbg py-2 px-3 rounded-3">
                      realme
                    </span>
                    <span className="badge text-secondary tagbg py-2 px-3 rounded-3">
                      cable
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3 ">
                <h3 className="filter-title">Random Products</h3>
                <div>                
                  <div className="randomproducts mb-1 d-flex gap-10">
                    <div className="w-50">
                      <img
                        className="img-fluid"
                        src={watch}
                        alt=""
                      />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk of 10 colored</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value="4"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p>$300</p>
                    </div>
                  </div>
                  <div className="randomproducts d-flex gap-10">
                    <div className="w-50">
                      <img
                        className="img-fluid"
                        src={watch}
                        alt=""
                      />
                    </div>
                    <div className="w-50 ">
                      <h5>Kids headphones bulk of 10 colored</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value="4"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p>$300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">

              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{"width":"100px"}}>Sort By:</p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling">
                        Best selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts">21 Products</p>
                    <div className="d-flex  align-items-center gap-10 grid">
                    <img onClick={()=>{setgrid(3)}} src={gr4} alt="" className="d-block img-fluid" />
                      <img onClick={()=>{setgrid(4)}} src={gr3} alt="" className="d-block img-fluid" />
                  
                      <img onClick={()=>{setgrid(6)}} src={gr2} alt="" className="d-block img-fluid" />
                      <img onClick={()=>{setgrid(12)}} src={gr} alt="" className="d-block img-fluid" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="products pb-5"> 
                <div className="d-flex flex-wrap gap-10">
                <Productcard grid={grid}/>
                </div>
              </div>
            </div>
          </div>
      </Container>
     
    </>
  );
};

export default Stores;
