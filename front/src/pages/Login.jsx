import React from 'react'
import {Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-con">
    <div>
        <h1>Login</h1>
        <div>
           <div>
              <label for="">Email or UserName</label>
           </div>
            <input type="text" name="" id=""/>
        </div>
        <div>
           <div>
              <label for="">Password</label>
           </div>
            <input type="password" name="" id=""/>
        </div>
        <div className="flex">
            <input type="checkbox" name="" id=""/>
            <label for="">Remembre Me</label>
        </div>
        <div>
          <Link to={"/register"}>
          
          <span>Dont have a Account Register Now</span>
          </Link>
      </div>
        <button className="btn"> Login</button>
    </div>
</div>
  )
}

export default Login