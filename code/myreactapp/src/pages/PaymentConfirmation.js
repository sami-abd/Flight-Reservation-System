import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PaymentConfirmation = () => {
  const location = useLocation();
  const bookingInfo = location.state?.bookingInfo;

  useEffect(() => {
    if (bookingInfo) {
      // Store the booking information in session storage
      sessionStorage.setItem("booking", JSON.stringify(bookingInfo));
    }
  }, [bookingInfo]); // The effect depends on bookingInfo

  if (!bookingInfo) {
    return <div>No booking information available.</div>;
  }

  const centerStyle = {
    textAlign: "center",
  };

  return (
    <div className="confirmation" style={centerStyle}>
      <h1>Congratulations on Your Booking!</h1>
      <div className="booking-details">
        <p>
          <strong>Flight ID:</strong> {bookingInfo.flightID}
        </p>
        <p>
          <strong>Seat:</strong> {bookingInfo.seat}
        </p>
        <p>
          <strong>Cost:</strong> {bookingInfo.cost}
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
          <strong>Insurance:</strong> {bookingInfo.hasInsurance ? "Yes" : "No"}
        </p>
        {/* You can add more details as needed */}
      </div>
    </div>
  );
};

export default PaymentConfirmation;
