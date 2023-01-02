import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import {HiOutlineArrowLeft} from 'react-icons/hi'
import blog1 from '../images/blog-1.jpg';

const Singleblog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog name"} />
      <BreadCrumb title="Dynamic Blog name" />
      <div className="container">
        <div className="row">
          <div className="col-2">
           
          </div>
          <div className="col-8">
          <div className="singleblogcard">
                <Link to="/blogs" className="gap-10 d-flex align-items-center"><HiOutlineArrowLeft className="fs-4"/>Go back to blogs</Link>
              <h3 className="title">A Beautiful Morning today</h3>
          <div className="blogimage d-flex align-items-center justify-content-center">
          <img src={blog1} className="img-fluid w-100 my-2" alt="blog" />

          </div>
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                quia magnam vitae recusandae sed natus enim assumenda, accusamus
                quaerat minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                quia magnam vitae recusandae sed natus enim assumenda, accusamus
                quaerat minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                quia magnam vitae recusandae sed natus enim assumenda, accusamus
                quaerat minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                quia magnam vitae recusandae sed natus enim assumenda, accusamus
                quaerat minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                quia magnam vitae recusandae sed natus enim assumenda, accusamus
                quaerat minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                quia magnam vitae recusandae sed natus enim assumenda, accusamus
                quaerat minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                quia magnam vitae recusandae sed natus enim assumenda, accusamus
                quaerat minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                quia magnam vitae recusandae sed natus enim assumenda, accusamus
                quaerat minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                quia magnam vitae recusandae sed natus enim assumenda, accusamus
                quaerat minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                quia magnam vitae recusandae sed natus enim assumenda, accusamus
                quaerat minima?
              </p>
            </div>
          </div>
          <div className="col-2">

          </div>
        </div>
      </div>
    </>
  );
};

export default Singleblog;
