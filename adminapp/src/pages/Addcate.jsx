import React ,{useEffect}from "react";
import Custominput from "../components/Custominput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { createProductcate, resetState } from "../features/pcategory/pcategoryslice";


let schema = Yup.object().shape({
    title: Yup.string().required("Categoryname is required"),
  });

  
const Addcate=()=>{
    const dispatch = useDispatch();
  const navigate = useNavigate();

  const newCategory = useSelector((state) => state.pcategories);
  const {isSuccess,isError,isLoading,createdcategories} = newCategory;
  useEffect(() => {
    if(isSuccess&&createdcategories){
      toast.success("Category added successfully", {});
    }
    if(isError){
      toast.error("Something went wrong",{});

    }

  },[isSuccess,isError,isLoading,]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createProductcate(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
        // navigate("/admin/categorylist");
      }, 3000); // 3sec
    },
  });

 return <div>
    <h3 className="mb-4 title">Add category</h3>
    <div>
        <form action="" onSubmit={formik.handleSubmit}>
            <Custominput 
            type="text"
             placeholder="Category"   
             name="category"
             id="category"
             onCh={formik.handleChange("category")}
             onBl={formik.handleChange("category")}
             val={formik.values.title}
             />
              <div className="error">
              {formik.touched.title && formik.errors.title}
            </div>
            <button
             type="submit"
              className="my-5 border-0 rounded-3 btn btn-success">Add product category</button>
        </form>
    </div>
    </div>
}

export default Addcate;