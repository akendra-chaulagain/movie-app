import React, { useState } from "react";
import "./Profile.css";

import Footer from "../../components/foooter/Footer";
// ReactToastify is use for alert
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/apiCalls";

const Profile = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  // update user
  const updateUserData = (id) => {
    updateUser(id, dispatch, { username, email, password });
  };

  return (
    <>
      <div className="container-fluid profile">
        <div className="row">
          <div className=" rightSideContainer">
            <form>
              <h3>Update your account</h3>

              <label htmlFor="">UserName</label>
              <div className="inputField">
                <input
                  type="text"
                  placeholder="enter your new username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <label htmlFor="">Email</label>
              <div className="inputField">
                <input
                  type="email"
                  placeholder="enter your new email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <label htmlFor="">Password</label>
              <div className="inputField">
                <input
                  type="password"
                  placeholder="enter your new password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="updataProfileButton">
                <button type="submit" onClick={() => updateUserData(user.id)}>
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* {/* ReactToastify container */}
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Profile;
