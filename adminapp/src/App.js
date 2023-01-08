import "./App.css";
import Mainlayout from "../src/components/Mainlayout";
import Resetpassword from "../src/pages/Resetpassword";
import Forgotpassword from "../src/pages/Forgotpassword";
import Dashboard from "../src/pages/Dashboard";
import Login from "../src/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enquires from "../src/pages/Enquires";
import Bloglist from "../src/pages/Bloglist";
import Blogcategorylist from "../src/pages/Blogcategorylist";
import Orders from "../src/pages/Orders";
import Customers from "../src/pages/Customers";
import Productlist from "../src/pages/Productlist";
import Brandlist from "../src/pages/Brandlist";
import Categorylist from "../src/pages/Categorylist";
import Colorlist from "../src/pages/Colorlist";
import Addablog from "../src/pages/Addablog";
import Addblogcate from "../src/pages/Addblogcate";
import Addcolor from "../src/pages/Addcolor";
import Addcate from "../src/pages/Addcate";
import Addbrand from "../src/pages/Addbrand";
import Addproduct from "../src/pages/Addproduct";
import Addcoupon from "./pages/Addcoupon";
import Couponlist from "./pages/Couponlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/admin" element={<Mainlayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquires />} />
          <Route path="bloglist" element={<Bloglist />} />
          <Route path="addblog" element={<Addablog />} />
          <Route path="addproduct" element={<Addproduct />} />
          <Route path="addcolor" element={<Addcolor />} />
          <Route path="addbrand" element={<Addbrand />} />
          <Route path="coupon" element={<Addcoupon/>} />
          <Route path="couponlist" element={<Couponlist/>} />
          <Route path="brand/:id" element={<Addbrand />} />
          <Route path="addcategory" element={<Addcate />} />
          <Route path="addblogcategory" element={<Addblogcate />} />
          <Route path="blogcategorylist" element={<Blogcategorylist />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="colorlist" element={<Colorlist />} />
          <Route path="brandlist" element={<Brandlist />} />
          <Route path="productlist" element={<Productlist />} />
          <Route path="categorylist" element={<Categorylist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
