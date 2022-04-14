import React from 'react'
import {Link } from "react-router-dom";

function Register() {
  return (
    <div className="login-con reg">
    <div>
        <h1>Register</h1>
        <div>
           <div>
              <label for="">UserName</label>
           </div>
            <input type="text" name="name" id=""/>
        </div>
        <div>
           <div>
              <label for="">Email</label>
           </div>
            <input type="text" name="email" id=""/>
        </div>
        <div>
           <div>
              <label for="">Password</label>
           </div>
            <input type="password" name="pwd" id=""/>
        </div>
        <div>
           <div>
              <label for="">Confirm Password</label>
           </div>
            <input type="password" name="cpwd" id=""/>
        </div>
        <div>
           <Link to={"/login"}>

            <span>Already have one? Login</span>
           </Link>
        </div>
        <button className="btn">Register</button>
    </div>
</div>
  )
}

export default Register