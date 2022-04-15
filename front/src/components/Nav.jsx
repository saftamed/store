import React from "react";
import { useSelector } from "react-redux";
import {Link } from "react-router-dom";
function Nav() {
const quantity = useSelector((state) => state.cart.quantity);
  return (
    <>
      <div className="annoncement">
        DUE TO A LARGE VOLUME OF REQUESTS, OUR SUPPORT TEAM MAY TAKE LONGER THAN
        NORMAL TO REPLY. WE APPRECIATE YOUR PATIENCE.
      </div>
      <div className="nav-bar">
        <div className="container">
          <div className="left">
            <div>
              <input type="text" name="" placeholder="search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
          <div className="center">
            <h1 className="hide">
              <Link to={"/"}>
              LTT Store
              </Link>
              </h1>
            <h1 className="show">
            <Link to={"/"}>
              LTT
              </Link>
            </h1>
          </div>
          <div className="right">
            <div>
              <Link to={"/login"}>
              
              <span className="login-link">
                Login
              </span>
              </Link>
            </div>
              <Link to={"/cart"}>
            <div className="cart">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <div>{quantity}</div>
            </div>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
