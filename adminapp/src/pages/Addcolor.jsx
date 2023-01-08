import React ,{useEffect}from "react";
import Custominput from "../components/Custominput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { createColor,resetState } from "../features/colors/colorslice";

let schema = Yup.object().shape({
  title: Yup.string().required("Color is required"),
});

const Addcolor=()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const newColor = useSelector((state) => state.color);
    const {isSuccess,isError,isLoading,createdColor} = newColor;
    useEffect(() => {
      if(isSuccess&&createdColor){
        toast.success("Color added successfully", {});
      }
      if(isError){
        toast.error("Something went wrong",{});
  
      }
  
    },[isSuccess,isError,isLoading,createdColor]);
  
    const formik = useFormik({
      initialValues: {
        title: "",
      },
      validationSchema: schema,
      onSubmit: (values) => {
        dispatch(createColor(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
          // navigate("/admin/colorlist");
        }, 3000); // 3sec
      },
    });
 return <div>
    <h3 className="mb-4 title">Add colors</h3>
    <div>
        <form action="" onSubmit={formik.handleSubmit}>
            <Custominput
             type="color" 
             placeholder="Color"
             name="color"
             id="color"
             onCh={formik.handleChange("color")}
             onBl={formik.handleChange("color")}
             val={formik.values.title}
             />
             <div className="error">
              {formik.touched.title && formik.errors.title}
            </div>
            <button
             type="submit"
              className="my-5 border-0 rounded-3 btn btn-success">Add color</button>
        </form>
    </div>
    </div>
}

export default Addcolor;