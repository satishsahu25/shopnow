import {configureStore} from '@reduxjs/toolkit'
import authreducer from '../features/auth/authslice'
import customerreducer from '../features/customers/customerslice'
import productreducer from '../features/products/productslice'
import brandreducer from '../features/brand/brandslice'
import pcategoryreducer from '../features/pcategory/pcategoryslice'
import colorreducer from '../features/colors/colorslice'
import blogreducer from '../features/blogs/blogslice'
import blogcatereducer from '../features/bcategory/bcateslice'
import enquiryreducer from '../features/enquiry/enquiryslice'
import couponreducer from '../features/coupon/couponslice'
export const store=configureStore({
    reducer:{
        auth:authreducer,
        customer:customerreducer,
        brand:brandreducer,
        product:productreducer,
        pcategories:pcategoryreducer,
        color:colorreducer,
        blog:blogreducer,
        blogcategories:blogcatereducer,
        enquiries:enquiryreducer,
        coupon:couponreducer
       
    }
});