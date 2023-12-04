import React, { useState } from "react";

import { useNavigate, useLocation } from 'react-router-dom';
const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { seat: seat, cost: cost, flightId: flightId } = location.state || {};
  // State for payment fields
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  console.log(seat)
  // Update state handlers for each field
  const updateCardNumber = (e) => setCardNumber(e.target.value);
  const updateExpiryDate = (e) => setExpiryDate(e.target.value);
  const updateCvv = (e) => setCvv(e.target.value);

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
      flightId,
      seat,
      cost,
      cardNumber, // You would normally send a secure token instead
      expiryDate,
      cvv,
    };

    try {
      // Send a POST request to your backend endpoint
      const response = await fetch("http://localhost:8081/api/v1/user/addBooking/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingInfo),
      });

      // Check if the booking was successful
      if (response.ok) {
        // Navigate to a success page or show confirmation
        // After successful payment
        navigate("/PaymentConfirmation", { state: { bookingInfo } });
      } else {
        // Handle non-success responses
        // alert("Booking failed. Please try again.");// uncomment once backend is ready
        navigate("/PaymentConfirmation", { state: { bookingInfo } }); // remove once backend is ready
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      //   console.error("Error during booking:", error); // uncomment once backend is ready
      //   alert("An error occurred during booking.");    // uncomment once backend is ready
      navigate("/PaymentConfirmation", { state: { bookingInfo } }); //remove once backend is ready
    }
  };

  return (
    <div className="payment">
      <h1>Payment</h1>
      <h2>Cost : {cost}</h2>
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
      </form>
    </div>
  );
};

export default Payment;
