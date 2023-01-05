import React from 'react'
import Custominput from '../components/Custominput'

const Forgotpassword = () => {
  return (
    <div className="py-5" style={{background:"#ffd333", minHeight:"100vh"}}>
      <br />
      <br />

      <div className="my-5 w-25 bg-white p-4 rounded-3 mx-auto">
      <h4 className="text-center">Forgot Password</h4>
      <p className="text-center">Enter your registered email to continue</p>
      <form action="">
      <Custominput type="email" placeholder="Email Address" id="email"/>
      <button
        className="border-0 px-3 py-2 text-white fw-bold w-100"
        style={{background:"#ffd333"}}
        type="submit"
      >Submit</button>
      </form>

      </div>
    </div>
  )
}

export default Forgotpassword;



