import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import newsletter from '../images/newsletter.png'

const footer = () => {
  return (
    <>
    <footer className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src={newsletter} alt="newsletter" />
              <h2 className='mb-0 text-white'>SignUp for News Letter</h2>
            </div>
          </div>
          <div className="col-7">
          <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Email Address..."
                  aria-label="Your Email Address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
    <div className="container">
      <div className="row">
        <div className="col-4"><h4 className='text-white mb-4'>Contact Us</h4>
        <div>
          <address className='fs-6 text-white'>
            277 Near Vill Palace<br/>
            PinCode : 214578<br/>
            New Delhi, India
          </address>
          <a href="tel:+91 7845126523" className='mt-2 d-block mb-0 text-white'>+91 7845126523</a>
          <a href="tel:+91 7845126523" className='mt-1 d-block mb-2 text-white'>jaypandya@gamil.com</a>
          <div className="socialicons d-flex align-items-center gap-15">
            <a href="/">
              <BsLinkedin className='text-white mx-1 fs-5'/>
            </a>
            <a href="/">
            <BsGithub className='text-white mx-1 fs-5'/>
            </a>
             <a href="/">
            <BsInstagram className='text-white mx-1 fs-5'/>
            </a>
            <a href="/">
              <BsFacebook className='text-white mx-1 fs-5'/>
            </a>
          </div>
        </div>
        </div>
        <div className="col-3"><h4 className='text-white mb-4'>Information</h4>
        <div className='footerlinks d-flex flex-column'>
          <Link to="/privacypolicy" className="text-white py-2 mb-1">Privacy Policy</Link>
          <Link to="/refundpolicy" className="text-white py-2 mb-1">Refund Policy</Link>
          <Link to="/shippingpolicy" className="text-white py-2 mb-1">Shipping Policy</Link>
          <Link to="/termsandconditions" className="text-white py-2 mb-1">Terms & Conditions</Link>
          <Link to="/blogs" className="text-white py-2 mb-1">Blogs</Link>
          </div></div>
        
        <div className="col-3"><h4 className='text-white mb-4'>Account</h4>
        <div className='footerlinks d-flex flex-column'>
          <Link className="text-white py-2 mb-1">About Us</Link>
          <Link className="text-white py-2 mb-1">FAQ's</Link>
          <Link className="text-white py-2 mb-1">Contact</Link>
          </div>
      </div>
        <div className="col-2"><h4 className='text-white mb-4'>Quick Links</h4>
        <div className='footerlinks d-flex flex-column'>
          <Link className="text-white py-2 mb-1">Laptops</Link>
          <Link className="text-white py-2 mb-1">Heaphones</Link>
          <Link className="text-white py-2 mb-1">Tablets</Link>
          <Link className="text-white py-2 mb-1">Watches</Link></div></div>
      </div>
    </div>

    </footer>
    <footer className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()}: Powered by ShopNow
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default footer