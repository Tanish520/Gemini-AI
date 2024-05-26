import React, { useContext } from "react";
import "../User Actitvity/User.css";
import { assets } from "../../../assets/assets";
import { context } from "../../Context/Context";
import DarkMode from "../DarkMode/DarkMode";

const User = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, setProfileView } =
    useContext(context);
  console.log(user);
  return (
    <div class="dropdown">
      <button class="dropbtn">
        <img src={isAuthenticated ? user.picture : assets.user_icon} />
      </button>
      <div class="dropdown-content">
        {!isAuthenticated ? (
          <>
            <a href="#" onClick={() => loginWithRedirect()}>
              Login
            </a>
            <a>
            <DarkMode />
            </a>
            
          </>
        ) : (
          <div>
            
            <a onClick={() => logout()}>Logout</a>
            <a>
            <DarkMode />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
