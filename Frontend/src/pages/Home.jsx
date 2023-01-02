import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Blogcard from "../components/Blogcard";
import Productcard from "../components/Productcard";
import SpecialProduct from "../components/SpecialProduct";
import mainbanner1 from "../images/main-banner-1.jpg";
import catbanner1 from "../images/catbanner-01.jpg";
import catbanner2 from "../images/catbanner-02.jpg";
import catbanner3 from "../images/catbanner-03.jpg";
import catbanner4 from "../images/catbanner-04.jpg";
import camera from "../images/camera.jpg";
import tv from "../images/tv.jpg";
import headphone from "../images/headphone.jpg";
import watch from "../images/watch.jpg";
import brand1 from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";
import Container from "../components/Container";
import { services } from "../utils/data";
import watch1 from "../images/watch1.png";
import watch2 from '../images/watch2.png'
import tab1 from '../images/tab1.jpg';
const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-4">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src={mainbanner1}
                className="img-fluid rounded-3"
                alt="mainbanner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad s13+ Pro.</h5>
                <p>From $999.00 or $41.99</p>
                <Link className="btncss">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex gap-10 flex-wrap justify-content-space-around align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={catbanner1}
                  className="img-fluid rounded-3"
                  alt="mainbanner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>From $99.00 or $41.99</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={catbanner2}
                  className="img-fluid rounded-3"
                  alt="mainbanner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>10% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest brand</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={catbanner3}
                  className="img-fluid rounded-3"
                  alt="mainbanner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>From $99.00 or $41.99</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={catbanner4}
                  className="img-fluid rounded-3"
                  alt="mainbanner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>
                    Branded
                    <br /> Headphone
                  </h5>
                  <p>From $99.00 or $41.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services.map((i, j) => {
                return (
                  <div
                    className="d-flex align-items-center gap-10 service"
                    key={j}
                  >
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="categories flex-wrap d-flex justify-content-between align-items-center">
                <div className="d-flex gap-10 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={headphone} alt="camera" />
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>

                <div className="d-flex gap-10 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={headphone} alt="camera" />
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-4 home-wrapper-2">
        <div className="row ">
          <div className="col-3">
            <div className="famouscard bg-dark">
              <div className="famous-content ">
                <h5 className="text-white">Big Screen</h5>
                <h6 className="text-white">Smart Watch Series</h6>
                <p className="text-light">From $399 or $16.92/mo. fror 24 mo.</p>
              </div>
              <div className="d-flex justify-content-center pb-4">
                <img src={watch1} className="img-fluid" alt="famous" />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famouscard bg-white">
              <div className="famous-content ">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series</h6>
                <p>From $399 or $16.92/mo. fror 24 mo.</p>
              </div>
              <div className="d-flex justify-content-center pb-4">
                <img src={watch2} className="img-fluid" alt="famous" />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famouscard bg-white">
              <div className="famous-content ">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series</h6>
                <p>From $399 or $16.92/mo. fror 24 mo.</p>
              </div>
              <div className="d-flex justify-content-center pb-4">
                <img src={watch} className="img-fluid" alt="famous" />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famouscard bg-white">
              <div className="famous-content ">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series</h6>
                <p>From $399 or $16.92/mo. fror 24 mo.</p>
              </div>
              <div className="d-flex justify-content-center pb-4">
                <img src={tab1} className="img-fluid" alt="famous" />
              </div>
            </div>
          </div>
        
  
          
        </div>
      </Container>
      
      <Container class1="specialwrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">Special Products</div>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
        </div>
      </Container>
      <Container class1="marquee-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25 ">
                  <img src={brand1} alt="brand" />
                </div>
                <div className="mx-4  w-25">
                  <img src={brand2} alt="brand" />
                </div>
                <div className="mx-4  w-25">
                  <img src={brand3} alt="brand" />
                </div>
                <div className="mx-4  w-25">
                  <img src={brand4} alt="brand" />
                </div>
                <div className="mx-4  w-25">
                  <img src={brand5} alt="brand" />
                </div>
                <div className="mx-4  w-25">
                  <img src={brand6} alt="brand" />
                </div>
                <div className="mx-4  w-25">
                  <img src={brand7} alt="brand" />
                </div>
                <div className="mx-4  w-25">
                  <img src={brand8} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Blogcard />
          </div>
          <div className="col-3">
            <Blogcard />
          </div>
          <div className="col-3">
            <Blogcard />
          </div>
          <div className="col-3">
            <Blogcard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
