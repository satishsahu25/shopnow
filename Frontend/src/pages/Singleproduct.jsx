import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Productcard from "../components/Productcard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import Colors from "../components/Colors";
import { Link } from "react-router-dom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";

const Singleproduct = () => {
  const [orderedproduct, setorderedproduct] = useState(true);
  const props = {
    width: 500,
    height: 500,
    zoomWidth: 500,
    img: "http://malaman.github.io/react-image-zoom/example/1.jpg",
  };
  const copytoclipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="mainproductwrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="mainproductpage">
              <div className="mainproductimage mb-3">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="otherproductimages d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="http://malaman.github.io/react-image-zoom/example/1.jpg"
                    className="img-fluid"
                    alt="other images"
                  />
                </div>
                <div>
                  <img
                    src="http://malaman.github.io/react-image-zoom/example/1.jpg"
                    className="img-fluid"
                    alt="other images"
                  />
                </div>
                <div>
                  <img
                    src="http://malaman.github.io/react-image-zoom/example/1.jpg"
                    className="img-fluid"
                    alt="other images"
                  />
                </div>
                <div>
                  <img
                    src="http://malaman.github.io/react-image-zoom/example/1.jpg"
                    className="img-fluid"
                    alt="other images"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="mainproductdetails">
              <div className="border-bottom">
                <h3 className="title">Kids multicolored headphones</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$100</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd760"
                    value="3"
                    edit={false}
                  />
                  <p className="mb-0">2 Reviews</p>
                </div>
                <a href="#review" className="reviewbtn">
                  Write a review
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="productheading">Type:</h3>
                  <p className="productdata">wrist watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="productheading">Brand:</h3>
                  <p className="productdata">Havells</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="productheading">Category:</h3>
                  <p className="productdata">Sonata</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="productheading">Availability:</h3>
                  <p className="productdata">watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center mt-2 mb-2">
                  <h3 className="productheading">Tags:</h3>
                  <p className="productdata">watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center mt-2 mb-2">
                  <h3 className="productheading">Size:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <div className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </div>
                    <div className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </div>
                    <div className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </div>
                    <div className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-10 align-items-center mt-2 mb-2">
                  <h3 className="productheading">Color:</h3>
                  <Colors />
                </div>
                <div className="d-flex flex-row gap-15 align-items-center mt-2 mb-2">
                  <h3 className="productheading">Quantity:</h3>
                  <div className="aa">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex gap-30 align-items-center ms-5">
                    <button className="btncss border-0" type="submit">
                      Add to cart
                    </button>
                    <Link className="btncss signup">Buy Now</Link>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <TbGitCompare className="fs-5 me-2" />
                      Add to categories
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart className="fs-5 me-2" />
                      Add to wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column  my-2">
                  <h3 className="productheading">Shipping and returns:</h3>
                  <p className="productdata">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo, earum..
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="productheading">Copy product link:</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() =>
                      copytoclipboard(
                        "http://malaman.github.io/react-image-zoom/example/1.jpg"
                      )
                    }
                  >
                    copy product link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="descwrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="bg-white p-3">
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                nobis aut repudiandae velit, omnis vero veritatis fuga
                praesentium asperiores distinctio.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="reviewswrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="review-inner-wrapper">
              <div className="reviewshead d-flex justify-content-between align-items-end">
                <div>
                  <h4 id="review" className="mb-2">
                    Customer Reviews
                  </h4>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd760"
                      value="3"
                      edit={false}
                    />
                    <p className="mb-0 t-review">Based on 2 reviews</p>
                  </div>
                </div>
                {orderedproduct && (
                  <div>
                    <a href="" className="text-dark text-decoration-underline">
                      Write a review
                    </a>
                  </div>
                )}
              </div>
              <div className="reviewform py-4">
                <form action="" className="d-flex flex-column gap-15">
                  <h4 className="mb-2">Write a review</h4>
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd760"
                      value="3"
                      edit={true}
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                      className="w-100 form-control"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="btncss border-0">Submit Review</button>
                  </div>
                </form>
              </div>

              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Navdeep</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd760"
                      value="3"
                      edit={false}
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Deserunt praesentium id cumque cum inventore necessitatibus
                    dicta voluptates provident, delectus nihil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Recommended Products</h3>
          </div>
          <Productcard />
        </div>
      </Container>
      
    </>
  );
};

export default Singleproduct;
