



import React ,{useEffect}from "react";
import Custominput from "../components/Custominput";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { createCoupon,resetState } from "../features/coupon/couponslice";

let schema = Yup.object().shape({
  title: Yup.string().required("Coupon name is required"),
   expiry: Yup.date().required("Coupon expiry is required"),
   discount: Yup.number().required("Coupon discount is required"),
});
const Addcoupon = () => {

  const dispatch = useDispatch();
//   const navigate = useNavigate();

  const newcoupon = useSelector((state) => state.coupon);
  const {isSuccess,isError,isLoading,createdcoupon} = newcoupon;
  useEffect(() => {
    if(isSuccess&&createdcoupon){
      toast.success("Coupon added successfully", {});
    }
    if(isError){
      toast.error("Something went wrong",{});
    }

  },[isSuccess,isError,isLoading,]);

  const formik = useFormik({
    initialValues: {
      name: "",
      discount:"",
      expiry:""
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createCoupon(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
     // navigate("/admin/brandlist");
      }, 3000); // 3sec
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">Add Coupons</h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
            {/* name */}
          <Custominput
            type="text"
            placeholder="Coupon name"
            name="name"
            id="name"
            onCh={formik.handleChange("name")}
            onBl={formik.handleChange("name")}
            val={formik.values.name}
          />
           <div className="error">
              {formik.touched.name && formik.errors.name}
            </div>

            {/* expiry */}
            <Custominput
            type="date"
            placeholder="Coupon expiry"
            name="expiry"
            id="expiry"
            onCh={formik.handleChange("expiry")}
            onBl={formik.handleChange("expiry")}
            val={formik.values.expiry}
          />
           <div className="error">
              {formik.touched.expiry && formik.errors.expiry}
            </div>

    {/* discount */}

 <Custominput
            type="number"
            placeholder="Coupon expiry"
            name="discount"
            id="discount"
            onCh={formik.handleChange("discount")}
            onBl={formik.handleChange("discount")}
            val={formik.values.discount}
          />
           <div className="error">
              {formik.touched.discount && formik.errors.discount}
            </div>          <button
            type="submit"
            className="my-5 border-0 rounded-3 btn btn-success"
          >
            Add Coupon
          </button>
        </form>
      </div>
    </div>
  );
};


export default Addcoupon;