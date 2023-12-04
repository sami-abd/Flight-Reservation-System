import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./MyAccount.css"; // Import your CSS file here

const MyAccount = () => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const storedBooking = sessionStorage.getItem("booking");
    if (storedBooking) {
      setBooking(JSON.parse(storedBooking));
    }
  }, []);

  return (
    <div className="my-account-container">
      <h1>My Account</h1>
      <h2>Welcome, User</h2>

      <h3>Your Booking:</h3>
      {booking ? (
        <div className="booking-info">
          {Object.entries(booking).map(([key, value]) => (
            <p key={key}>
              <strong>{key.replace(/([A-Z])/g, " $1").trim()}:</strong>{" "}
              {value.toString()}
            </p>
          ))}
        </div>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default MyAccount;
