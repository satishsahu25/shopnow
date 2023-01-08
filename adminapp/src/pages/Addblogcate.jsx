import React ,{useEffect}from "react";
import Custominput from "../components/Custominput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { resetState,createBlogcategories } from "../features/bcategory/bcateslice";


let schema = Yup.object().shape({
    title: Yup.string().required("Blog catgeory name is required"),
  });


const Addblogcate=()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const newBlogcategory = useSelector((state) => state.blogcategories);
    const {isSuccess,isError,isLoading,createdblogcategories} = newBlogcategory;
    useEffect(() => {
      if(isSuccess&&createdblogcategories){
        toast.success("Blog category added successfully", {});
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
        dispatch(createBlogcategories(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
          // navigate("/admin/blogcategorylist");
        }, 3000); // 3sec
      },
    });
 return <div>
    <h3 className="mb-4 title">Add blog category</h3>
    <div>
        <form action="" onSubmit={formik.handleSubmit}>
            <Custominput 
            type="text" 
            placeholder="Category"
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
              className="my-5 border-0 rounded-3 btn btn-success">Add blog category</button>
        </form>
    </div>
    </div>
}

export default Addblogcate;