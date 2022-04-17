import React, { useState } from "react";
import Nav from "../components/Nav";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, addAddress } from "../store/userApi";
import AddAddressModal from "../components/AddAddressModal";
function Profile() {
  const theuser = useSelector((state) => state.user.currentUser);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const updateForm = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const addAddressHandler = (adr) => {
    addAddress(dispatch, { adr, theuser });
  };
  const [user, setUser] = React.useState({});
  return (
    <>
      <Nav />
      <Loading />
      <AddAddressModal
        show={show}
        closeHandle={() => setShow(false)}
        addAddressHandler={addAddressHandler}
      />
      <div className="account">
        <div className="container">
          <div className="flex">
            <div>
              <span>LOG OUT</span>
              <h1>MY ACCOUNT</h1>
              <p>Welcome Back,Safta!</p>

              <div className="account-info login-con flex">
                <div>
                  <h3>Information</h3>
                  <div>
                    <div>
                      <label>User Name</label>
                    </div>
                    <input
                      type="text"
                      defaultValue={theuser.username}
                      name="username"
                      onChange={(e) => updateForm(e)}
                    />
                  </div>
                  <div>
                    <div>
                      <label>Email</label>
                    </div>
                    <input
                      type="email"
                      name="email"
                      defaultValue={theuser.email}
                      onChange={(e) => updateForm(e)}
                    />
                  </div>
                  <div>
                    <div>
                      <label>Current Password</label>
                    </div>
                    <input
                      type="password"
                      name="cpassword"
                      autoComplete="off"
                      onChange={(e) => updateForm(e)}
                    />
                  </div>
                  <div>
                    <div>
                      <label>New Password</label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      autoComplete="off"
                      onChange={(e) => updateForm(e)}
                    />
                  </div>
                  <button
                    className="btn"
                    onClick={(e) => updateUser(dispatch, { user, theuser })}
                  >
                    Save changes
                  </button>
                </div>
                <div>
                  <h3>PRIMARY ADDRESS</h3>
                  {theuser.address.map((adr, index) => {
                    return (
                      adr && (
                        <div key={index}>
                          <p>{`${adr.street} ${adr.city} ${adr.zip}`}</p>
                        </div>
                      )
                    );
                  })}

                  <button className="btn" onClick={() => setShow(true)}>
                    Add Address
                  </button>
                </div>
                <div>
                  <h3>MY ORDERS</h3>
                  <button className="btn">GO To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
