import React, { useCallback, useEffect, useState } from "react";
import "./header.css";

import { useNavigate } from "react-router-dom";
import crownLogo from "../Assets/crownlogowhite.jpg";

/**
 * Header displays the log-in state and contains the login/logout and registration button
 * @returns Header
 */
export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //useToggle();
  const navigate = useNavigate();
  
  /**
   * Check if user is logged in given the sessionStorage ite,
   */
  const updateLogin = () => {
    if (sessionStorage.getItem("userId") != null) {
      setIsLoggedIn(true);
    }
  }

  /**
   * useEffect calls the updateLogin function() on page render
   */
  useEffect(() => {
    console.log("User Id:",sessionStorage.getItem("userId"));
    updateLogin();
  }, [])

  /**
   * Function is called when the logout button is clicked. 
   * Will log the user out by removing the associated sessionStorage item.
   */
  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    setIsLoggedIn(false);
    navigate("/")
  }

  return (
    <div className="header_container">
      <div className="corner"> {isLoggedIn? (<p>Welcome Registered User ({sessionStorage.getItem("firstName")})</p>) : (<p>Welcome Guest User!</p>)} </div>
      <div className="header_logo">
        <a href="/">
          <img src={crownLogo} className="logo" alt="crown logo" />
        </a>
      </div>
      <div className="header_login">
        <button onClick={() => navigate("/")}>
          Home
          </button>
          {isLoggedIn?
          <button onClick={() => handleLogout()}>Logout</button> : 
          <div> <button onClick={() => navigate("/user")}>Login</button> 
          <button onClick={() => navigate("/register")}>Registration</button>
          <button onClick={() => navigate("/AdminPage")}>Admin</button>  
          </div>
          }
      </div>
    </div>
  );
};

// const useToggle = (initialState = false) => {
//   // Initialize the state
//   const [state, setState] = useState(initialState);
  
//   // Define and memorize toggler function in case we pass down the component,
//   // This function change the boolean value to it's opposite value
//   const toggle = useCallback(() => setState(state => !state), []);
  
//   return [state, toggle]
// }
