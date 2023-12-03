import React from "react";
import { useLocation } from "react-router-dom";

const PaymentConfirmation = () => {
  // Use React Router's useLocation hook to access the state passed from the Payment component
  const location = useLocation();
  const bookingInfo = location.state?.bookingInfo; // Ensure you pass this state from the Payment component

  // If there's no booking information, you can redirect or display a message
  if (!bookingInfo) {
    return <div>No booking information available.</div>;
  }

  // Add a simple style object for centering text
  const centerStyle = {
    textAlign: "center",
  };

  return (
    <div className="confirmation" style={centerStyle}>
      <h1>Congratulations on Your Booking!</h1>
      <div className="booking-details">
        <p>
          <strong>Flight ID:</strong> {bookingInfo.flightId}
        </p>
        <p>
          <strong>First Name:</strong> {bookingInfo.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {bookingInfo.lastName}
        </p>
        <p>
          <strong>Email:</strong> {bookingInfo.email}
        </p>
        <p>
          <strong>Seat ID:</strong> {bookingInfo.seatId}
        </p>
        <p>
          <strong>Insurance:</strong>{" "}
          {bookingInfo.hasInsurance ? "Included" : "Not included"}
        </p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default PaymentConfirmation;
