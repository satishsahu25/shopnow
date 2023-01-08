import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import Custominput from "../components/Custominput";
import { useNavigate } from "react-router-dom";
import { getBrands } from "../features/brand/brandslice";
import { useDispatch, useSelector } from "react-redux";
import { getproductCategories } from "../features/pcategory/pcategoryslice";
import { getColors } from "../features/colors/colorslice";
import { useFormik } from "formik";
import { Select } from "antd";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadslice";
import { createProduct, resetState } from "../features/products/productslice";
import { toast } from "react-toastify";



let schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required"),
  brand: Yup.string().required("Brand is required"),
  tags: Yup.string().required("Tags are required"),
  category: Yup.string().required("Category is required"),
  color: Yup.array()
    .min(1, "Pick atleast one color")
    .required("Color is required"),
  quantity: Yup.number().required("Quantity is required"),
});

const Addproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setcolor] = useState([]);
  const [images, setimages] = useState([]);
  const handlecolors = (e) => {
    setcolor(e);
  };

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getproductCategories());
    dispatch(getColors());
  }, []);

  const brandstate = useSelector((state) => state.brand.brands);
  const pcategorystate = useSelector(
    (state) => state.pcategories.productcategories
  );
  const colorstate = useSelector((state) => state.color);
  const imgstate = useSelector((state) => state.upload.images);
  const newProduct = useSelector((state) => state.product);
  const {isSuccess,isError,isLoading,createdProduct} = newProduct;
  useEffect(() => {
    if(isSuccess&&createdProduct){
      toast.success("Product added successfully", {});
    }
    if(isError){
      toast.error("Something went wrong",{});

    }

  },[isSuccess,isError,isLoading,]);
  const coloropt = [];
  colorstate.forEach((i) => {
    coloropt.push({
      label: i.title,
      value: i._id,
    });
  });
  const img = [];
  imgstate.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.iurl,
    });
  });

  useEffect(() => {
    formik.values.color = color ? color : " ";
    formik.values.images = img;
  }, [color, img]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      tags: "",
      category: "",
      color: "",
      quantity: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createProduct(values));
      formik.resetForm();
      setcolor(null);
      setTimeout(() => {
        dispatch(resetState());
        // navigate("/admin/productlist");
      }, 3000); // 3sec
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          {/* product title */}
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
          {/* product description */}
          <div className="mb-3">
            <ReactQuill
              theme="snow"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange("description")}
            />
            <div className="error">
              {formik.touched.description && formik.errors.description}
            </div>
          </div>

          {/* price */}

          <Custominput
            type="number"
            placeholder="Price"
            name="price"
            onCh={formik.handleChange("price")}
            onBl={formik.handleChange("price")}
            val={formik.values.price}
          />
          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div>

          {/* select brand */}

          <select
            name="brand"
            id=""
            onCh={formik.handleChange("brand")}
            onBl={formik.handleChange("brand")}
            className="form-control py-3 mb-3"
            value={formik.values.brand}
          >
            <option value="">Select Brand</option>
            {brandstate.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>
          <div className="error">
            {formik.touched.brand && formik.errors.brand}
          </div>

          {/* select catgeory */}

          <select
            name="category"
            id=""
            onCh={formik.handleChange("category")}
            onBl={formik.handleChange("category")}
            className="form-control py-3 mb-3"
            value={formik.values.category}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="featured">Featured</option>
            <option value="popular">Popular</option>
            <option value="special">Special</option>

            {/* {pcategorystate.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })} */}
          </select>
          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>

          {/* tags */}
          <select
            name="tags"
            id=""
            onCh={formik.handleChange("tags")}
            onBl={formik.handleChange("tags")}
            className="form-control py-3 mb-3"
            value={formik.values.tags}
          >
            <option value="">Select tags</option>

            {pcategorystate.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>
          <div className="error">
            {formik.touched.tags && formik.errors.tags}
          </div>
          {/* select colors */}
          <Select
            mode="multiple"
            allowClear
            className="w-100"
            placeholder="Select colors"
            defaultValue={color}
            onChange={(e) => handlecolors(e)}
            options={coloropt}
          />
          <div className="error">
            {formik.touched.color && formik.errors.color}
          </div>

          {/* quantity */}

          <Custominput
            type="number"
            placeholder="Quantity"
            name="quantity"
            onCh={formik.handleChange("quantity")}
            onBl={formik.handleChange("quantity")}
            val={formik.values.quantity}
          />
          <div className="error">
            {formik.touched.quantity && formik.errors.quantity}
          </div>
          {/* images */}
          <div className="bg-white border-1 p-5 text-center">
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
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
