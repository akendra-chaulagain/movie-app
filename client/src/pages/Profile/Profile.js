import React, { useState } from "react";
import "./Profile.css";

import Footer from "../../components/foooter/Footer";
// ReactToastify is use for alert
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
  const user = useSelector((state) => state.user.currentUser);

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  // update user
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // user request was import from RequestMethos
      await axios.put("/users/" + user._id, {
        email,
        username,
        password,
      });
      toast.success("profile has been updated!", {
        position: "top-center",
        autoClose: 2000,
        transition: Zoom,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
        progress: undefined,
      });
      window.location.reload("/profile");
    } catch (error) {
      toast.error("something went wrong !", {
        position: "top-center",
        autoClose: 2000,
        transition: Zoom,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
        progress: undefined,
      });
    }
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
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <label htmlFor="">Email</label>
              <div className="inputField">
                <input
                  type="email"
                  name="email"
                  placeholder="enter your new email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <label htmlFor="">Password</label>
              <div className="inputField">
                <input
                  type="password"
                  name="password"
                  placeholder="enter your new password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="updataProfileButton">
                <button onClick={handleUpdate}>Update</button>
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
