import React from 'react'
import Custominput from '../components/Custominput'
import {Link} from 'react-router-dom';

const Resetpassword = () => {
  return (
    <div className="py-5" style={{background:"#ffd333", minHeight:"100vh"}}>
      <br />
      <br />

      <div className="my-5 w-25 bg-white p-4 rounded-3 mx-auto">
      <h4 className="text-center">Reset your Password</h4>
      <p className="text-center">Enter your new password</p>
      <form action="">
      <Custominput type="password" placeholder="New password" id="pass"/>
      <Custominput type="password" placeholder="Confirm password" id="confpass"/>

      <Link
        className="border-0 px-3 py-2 text-white fw-bold w-100"
        style={{background:"#ffd333"}}
        type="submit"
      >Reset password</Link>
      </form>

      </div>
    </div>
  )
}

export default Resetpassword








