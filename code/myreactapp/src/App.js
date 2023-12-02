import React, { useState } from "react";
import { ReactDOM } from "react";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './../styles.css';
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/'></Route>
          <Route path="Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );

}

export default App;