import React, { useState } from "react";
import { Header } from "../components/Header";
import "./adminpage.css";
import { useNavigate } from "react-router-dom";

/**
 * Adminpage that allows an admin to create a movie, release a movie, and create a registered user
 * @returns div that contains admin functionalities
 */
const Adminpage = () => {
  // Authentication Part of Adminpage
  const navigate = useNavigate();
  const [adminPass, setAdminPass] = useState();
  const [authenticate, setAuthenticate] = useState(false);


  /**
   * Secret password to unlock Admin functionalties
   */
  const authenticateAdmin = () => {
    if (adminPass == "614") {
      setAuthenticate(true);
    }
  };

  // Functional Part of Adminpage
  const maintainAir = (e) => {
    e.preventDefault();
    navigate('/selectFlights');
  };

  // Functional Part of Adminpage
  const maintainFlights = (e) => {
    e.preventDefault();
    navigate('/selectFlights');
  };

  // Functional Part of Adminpage
  const maintainCrew = (e) => {
    e.preventDefault();
    navigate('/selectFlights');
  };

  // Functions to send requests to server





  return (
    <div className="adminpage">
      <div>
        <h1>Welcome Admin</h1>
        {authenticate == false ? (
          <div>
            <label>
              What is the Password? (Hint! The code for this course... ENSF
              ___?)
            </label>
            <br></br>
            <input
              placeholder="Password"
              onChange={(e) => setAdminPass(e.target.value)}
            />
            <br></br>
            <button onClick={() => authenticateAdmin()}>Authenticate</button>
          </div>
        ) : (
          <div>
            <div>
              <button onClick={() => maintainAir()}>Maintain Aircraft</button>
            </div>
            <div>
              <button onClick={() => maintainFlights()}>Maintain Flights</button>
            </div>
            <div>
              <button onClick={() => maintainCrew()}>Maintain Crew</button>
            </div>
          </div>
        )
        }</div>
    </div>
  );
};

export default Adminpage;
