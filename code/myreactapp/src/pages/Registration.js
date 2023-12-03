import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  console.log("Registration page");
  // State variables for registration fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to update state variables
  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updateDateOfBirth = (e) => setDateOfBirth(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  // Function to handle registration
  const handleRegistration = async () => {
    // Check if all fields are filled
    if (!firstName || !lastName || !dateOfBirth || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Data to be sent to the backend
    const userData = {
      firstName,
      lastName,
      dateOfBirth,
      email,
      password,
    };

    try {
      // Send a POST request to your backend endpoint
      const response = await fetch("YOUR_BACKEND_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      // Check if the registration was successful
      if (response.ok) {
        // Navigate to the login page or show success message
        navigate("/login"); // Update with your login route
      } else {
        // Handle non-success responses
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error during registration:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <div className="registration">
      <div>
        <h1>Register</h1>
        <div className="registration-form">
          <label htmlFor="firstName">First Name</label>
          <br />
          <input
            id="firstName"
            type="text"
            onChange={updateFirstName}
            placeholder="First Name"
          />
          <br />

          <label htmlFor="lastName">Last Name</label>
          <br />
          <input
            id="lastName"
            type="text"
            onChange={updateLastName}
            placeholder="Last Name"
          />
          <br />

          <label htmlFor="dob">Date of Birth</label>
          <br />
          <input id="dob" type="date" onChange={updateDateOfBirth} />
          <br />

          <label htmlFor="email">Email Address</label>
          <br />
          <input
            id="email"
            type="email"
            onChange={updateEmail}
            placeholder="Email"
          />
          <br />

          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            type="password"
            onChange={updatePassword}
            placeholder="Password"
          />
          <br />

          <button id="register" type="button" onClick={handleRegistration}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
