import React, { useEffect } from "react";
import Custominput from "../components/Custominput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  createBrand,
  getBrand,
  updateBrand,
  resetState,
} from "../features/brand/brandslice";

let schema = Yup.object().shape({
  title: Yup.string().required("Brandname is required"),
});

const Addbrand = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const getbrandid = location.pathname.split("/")[3];
  const newBrand = useSelector((state) => state.brand);
  const {
    isSuccess,
    isError,
    isLoading,
    createdBrand,
    updatedbrand,
    getbrand,
  } = newBrand;

  useEffect(() => {
    if (getbrandid !== null) {
      dispatch(getBrand(getbrandid));
    } else {
      dispatch(resetState());
    }
  });

  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("Brand added successfully", {});
    }
    if (updatedbrand && isSuccess) {
      toast.success("Brand updated successfully", {});
      navigate("/admin/brandlist");
    }
    if (isError) {
      toast.error("Something went wrong", {});
    }
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: getbrand || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getbrandid !== undefined) {
        const data = { id: getbrandid, branddata: values };
        dispatch(updateBrand(data));
      } else {
        dispatch(createBrand(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
          // navigate("/admin/brandlist");
        }, 3000); // 3sec
      }
    
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">
        {getbrandid !== undefined ? "Edit" : "Add"} Brand
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <Custominput
            type="text"
            placeholder="Brand"
            name="title"
            id="title"
            onCh={formik.handleChange("title")}
            onBl={formik.handleChange("title")}
            val={formik.values.title}
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            type="submit"
            className="my-5 border-0 rounded-3 btn btn-success"
          >
            {getbrandid !== undefined ? "Edit" : "Add"} Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addbrand;
