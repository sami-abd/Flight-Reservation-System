import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
   * Checks if there's a userId in sessionStorage.
      If there is, it sets isLoggedIn to true.
   */
  const updateLogin = () => {
    if (sessionStorage.getItem("userId") != null) {
      setIsLoggedIn(true);
    }
  };

  /**
   * Runs updateLogin on the initial render of the component.
     It will check if the user is logged in whenever the component mounts.
   */
  useEffect(() => {
    console.log("User Id:", sessionStorage.getItem("userId"));
    updateLogin();
  }, []);

  /**
   * Function is called when the logout button is clicked.
   * Will log the user out by removing the associated sessionStorage item.
   * Navigates user to home page.
   */
  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="header_container">
      <div className="corner">
        {" "}
        {isLoggedIn ? (
          <p>Welcome Registered User ({sessionStorage.getItem("firstName")})</p>
        ) : (
          <p>Welcome Guest User!</p>
        )}{" "}
      </div>
      <div className="header_logo">
        <Link to="/">
          <img src={crownLogo} className="logo" alt="crown logo" />
        </Link>
      </div>
      <div className="header_login">
        <button onClick={() => navigate("/")}>Home</button>
        {isLoggedIn ? (
          <>
            <button onClick={() => handleLogout()}>Logout</button>
            <button onClick={() => navigate("/MyAccount")}>MyAccount</button>
          </>
        ) : (
          <div>
            <button onClick={() => navigate("/User")}>Login</button>
            <button onClick={() => navigate("/Registration")}>
              Registration
            </button>
            <button onClick={() => navigate("/AdminPage")}>Admin</button>
          </div>
        )}
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
