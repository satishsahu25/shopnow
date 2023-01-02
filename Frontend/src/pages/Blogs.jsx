import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Blogcard from "../components/Blogcard";
import Container from "../components/Container";

const Blogs = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find by categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-4 mb-3 ">
                <Blogcard />
              </div>
              <div className="col-4 mb-3">
                <Blogcard />
              </div>
              <div className="col-4 mb-3 ">
                <Blogcard />
              </div>
              <div className="col-4 mb-3">
                <Blogcard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blogs;
