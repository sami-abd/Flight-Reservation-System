import React, { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";
const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { seat: seat, cost: cost, flightID: flightID } = location.state || {};
  // State for payment fields
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [hasInsurance, setHasInsurance] = useState(false);
  // Update state handlers for each field
  const updateCardNumber = (e) => setCardNumber(e.target.value);
  const updateExpiryDate = (e) => setExpiryDate(e.target.value);
  const updateCvv = (e) => setCvv(e.target.value);
  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateHasInsurance = (e) => setHasInsurance(e.target.value === "1");
  // Function to handle payment submission
  const handlePaymentSubmission = async (e) => {
    e.preventDefault(); // Prevent the default form submit action

    // Simple validation for card details
    if (cardNumber.length !== 16 || cvv.length !== 3) {
      alert("Invalid card details. Please check the card number and CVV.");
      return;
    }

    // Assuming the card details are valid, prepare the booking information
    const bookingInfo = {
      flightID,
      seat,
      cost,
      cardNumber, // You would normally send a secure token instead
      expiryDate,
      cvv,
      firstName,
      lastName,
      email,
      hasInsurance,
    };

    try {
      // Send a POST request to your backend endpoint
      const response = await fetch(
        "http://localhost:8081/api/v1/user/addBooking/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingInfo),
        }
      );

      // Check if the booking was successful
      // Check if the booking was successful
      if (response.ok) {
        // Store booking details in sessionStorage
        sessionStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));

        // Navigate to a success page or show confirmation
        navigate("/PaymentConfirmation", { state: { bookingInfo } });
      } else {
        // Handle non-success responses
        alert("An error occurred during booking. Please try again."); // Notify the user

        // Refresh the page
        window.location.reload();
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error during booking:", error); // Log the error
      alert("An error occurred during booking. Please try again."); // Notify the user

      // Refresh the page
      window.location.reload();
    }
  };

  return (
    <div className="payment">
      <h1>Payment</h1>
      <h2>Cost : {cost}</h2>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        value={firstName}
        onChange={updateFirstName}
        placeholder="John"
      />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        value={lastName}
        onChange={updateLastName}
        placeholder="Doe"
      />
      <br />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={updateEmail}
        placeholder="johndoe@example.com"
      />
      <br />
      <label htmlFor="hasInsurance">Would you like insurance?</label>
      <select
        id="hasInsurance"
        value={hasInsurance ? "1" : "0"}
        onChange={updateHasInsurance}
      >
        <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
      <form className="payment-form" onSubmit={handlePaymentSubmission}>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          id="cardNumber"
          type="text"
          value={cardNumber}
          onChange={updateCardNumber}
          placeholder="1234 5678 9123 4567"
          maxLength="16"
        />
        <br />
        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          id="expiryDate"
          type="month"
          value={expiryDate}
          onChange={updateExpiryDate}
        />
        <br />
        <label htmlFor="cvv">CVV</label>
        <input
          id="cvv"
          type="text"
          value={cvv}
          onChange={updateCvv}
          placeholder="123"
          maxLength="3"
        />
        <br />
        <button type="submit">Confirm Payment</button>

        <br />
      </form>
    </div>
  );
};

export default Payment;
