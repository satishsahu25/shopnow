import React from 'react'
import Custominput from '../components/Custominput'
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className="py-5" style={{background:"#ffd333", minHeight:"100vh"}}>
      <br />
      <br />
   

      <div className="my-5 w-25 bg-white p-4 rounded-3 mx-auto">
      <h4 className="text-center">Login</h4>
      <p className="text-center">Login to your account to continue</p>
      <form action="">
      <Custominput type="email" placeholder="Email Address" id="email"/>
      <Custominput type="password" placeholder="Password" id="pass"/>
      <Link
        to="/admin"
        className="border-0 px-3 py-2 text-white fw-bold fs-5 text-decoration-none w-100 text-center"
        style={{background:"#ffd333"}}
        type="submit"
      >Login</Link>
      <div className="py-2 text-end">
        <Link to="/forgotpassword">forgot password?</Link>
      </div>
      </form>

      </div>
    </div>
  )
}

export default Login