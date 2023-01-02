import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Stores from './pages/Stores';
import Blogs from './pages/Blogs';
import Compareproducts from './pages/Compareproducts';
import Favourites from './pages/Favourites';
import Login from './pages/Login';
import Forgotpass from './pages/Forgotpass';
import Signup from './pages/Signup';
import Resetpass from './pages/Resetpass';
import Singleblog from './pages/Singleblog';
import Privacypolicy from './pages/Privacypolicy';
import Refundpolicy from './pages/Refundpolicy';
import Shippingpolicy from './pages/Shippingpolicy';
import Termsandconditions from './pages/Termsandconditions';
import Singleproduct from './pages/Singleproduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='products' element={<Stores/>}/>
        <Route path="product/:id" element={<Singleproduct/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='compare' element={<Compareproducts/>}/>
        <Route path='wishlist' element={<Favourites/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='blog/:id' element={<Singleblog/>}/>
        <Route path='forgotpassword' element={<Forgotpass/>}/>
        <Route path='resetpassword' element={<Resetpass/>}/>
        <Route path='privacypolicy' element={<Privacypolicy/>}/>
        <Route path='refundpolicy' element={<Refundpolicy/>}/>
        <Route path='shippingpolicy' element={<Shippingpolicy/>}/>
        <Route path='termsandconditions' element={<Termsandconditions/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
