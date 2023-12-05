import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  console.log("Registration page");
  // State variables for registration fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date("2023/12/23"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  // Function to update state variables
  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updateDateOfBirth = (date) => setDateOfBirth(date);
  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateStreet = (e) => setStreet(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateProvince = (e) => setProvince(e.target.value);

  // Function to handle registration
  const handleRegistration = async () => {
    // Check if all fields are filled
    if (!firstName || !lastName || !dateOfBirth || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    // Check if password contains only digits
    if (!/^\d+$/.test(password)) {
      alert("Password must contain only numbers.");
      return;
    }
    const FdateOfBirth = dateOfBirth && dateOfBirth.toLocaleDateString("en-CA"); // Adjust the locale as needed

    // Data to be sent to the backend
    const userData = {
      firstName,
      lastName,
      FdateOfBirth,
      email,
      password,
      street,
      city,
      province,
    };

    try {
      // Send a POST request to your backend endpoint
      const response = await fetch(
        "http://localhost:8081/api/v1/user/createUser/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      // Check if the registration was successful
      if (response.ok) {
        // Navigate to the login page or show success message
        navigate("/User"); // Update with your login route
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
          <br />
          <label htmlFor="DoB">Date of Birth</label>
          <DatePicker
            selected={dateOfBirth}
            onChange={updateDateOfBirth}
            mindate={"2023-12-15"}
            dateFormat="yyyy-MM-dd"
            showTimeSelect={false}
          />

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
          <label htmlFor="street">Street</label>
          <br />
          <input
            id="street"
            type="text"
            onChange={updateStreet}
            placeholder="street"
          />
          <br />
          <label htmlFor="city">City</label>
          <br />
          <input
            id="city"
            type="city"
            onChange={updateCity}
            placeholder="City"
          />
          <br />
          <label htmlFor="province">Province</label>
          <input
            id="province"
            type="province"
            onChange={updateProvince}
            placeholder="Province"
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
