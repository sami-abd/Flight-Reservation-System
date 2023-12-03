import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Header } from "../components/Header"; // Adjust the import path as necessary

const Layout = () => {
  return (
    <div>
      <Header /> {/* This line includes the Header component */}
      <nav className="Navbar">
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/User">User</Link>
          </li>
          <li>
            <Link to="/AdminPage">AdminPage</Link>
          </li>
          <li>
            <Link to="/Registration">Register</Link>
          </li>
        </ul> */}
      </nav>
      <Outlet /> {/* This will render the matched route's component */}
      <br></br>
    </div>
  );
};

export default Layout;
