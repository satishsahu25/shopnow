import React, { useState, useEffect } from "react";
import Custominput from "../components/Custominput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Stepper } from 'react-form-stepper';
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadslice";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../features/blogs/blogslice";
import { getblogCategories } from "../features/bcategory/bcateslice";
import { resetState } from "../features/blogs/blogslice";
let schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.string().required("Category is required"),
});

const Addablog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [images, setimages] = useState([]);

  useEffect(() => {
    dispatch(getblogCategories());
  }, []);

  const imgstate = useSelector((state) => state.upload.images);
  const blogstate=useSelector((state)=>state.blog);
  const bcatestate=useSelector((state)=>state.blogcategories);
  const {isSuccess,isError,isLoading,createdblog}=blogstate;
  useEffect(() => {
    if(isSuccess&&createdblog){
      toast.success("Blog added successfully", {});
    }
    if(isError){
      toast.error("Something went wrong",{});

    }

  },[isSuccess,isError,isLoading,]);

  const img = [];
  imgstate.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.iurl,
    });
  });

  useEffect(() => {
    formik.values.images = img;
  }, [img]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBlog(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
        // navigate("/admin/bloglist");
      }, 3000); // 3sec
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">Add Blog</h3>
      {/* <Stepper
  steps={[{ label: 'Add Blog' }, { label: 'Upload Images' }, { label: 'Finish' }]}
  activeStep={1}
/> */}
      <div className="">
        <form 
        onSubmit={formik.handleSubmit}
        className="d-flex gap-3 flex-column"
        action="">
             {/* blog title */}
             <Custominput
            type="text"
            placeholder="Title"
            name="title"
            onCh={formik.handleChange("title")}
            onBl={formik.handleChange("title")}
            val={formik.values.title}
          />
           <div className="error">
              {formik.touched.title && formik.errors.title}
            </div>

            {/* blog catgeory */}
          <select 
            name="category"
            id=""
            onCh={formik.handleChange("category")}
            onBl={formik.handleChange("category")}
            className="form-control py-3 mb-3"
            value={formik.values.category}
          >
            <option value="">Select Blog Category</option>
             {bcatestate.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>
          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>

          {/* description */}
          <div className="mb-3">
            <ReactQuill
              theme="snow"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange("description")}
              className="mt-3"
            />
            <div className="error">
              {formik.touched.description && formik.errors.description}
            </div>
          </div>
          {/* images */}
          <div className="bg-white border-1 p-5 text-center mt-3">
            <Dropzone
              onDrop={(acceptedfiles) => dispatch(uploadImg(acceptedfiles))}
            >
              {({ getRootProps, getInputProps }) => {
                <section>
                  <div {...getRootProps}>
                    <input {...getInputProps} />
                    <p>Drag 'n' drop some images here ort click to select</p>
                  </div>
                </section>;
              }}
            </Dropzone>
          </div>
          <div className="showimages d-flex flex-wrap gap-3">
            {imgstate?.map((i, j) => {
              return (
                <div className="position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(delImg(i.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={i.url} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>
          <button
            type="submit"
            className="my-5 border-0 rounded-3 btn btn-success"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addablog;
