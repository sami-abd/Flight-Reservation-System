import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./MyAccount.css"; // Import your CSS file here

const MyAccount = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    if (email) {
      fetchBookingDetails(email);
    }
  }, []);

  const fetchBookingDetails = async (email) => {
    try {
      const response = await fetch(
        "http://localhost:8081/api/v1/user/getPassengerFlight/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }

      const data = await response.json();
      setBookings(data.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const cancelBooking = async (bookingID) => {
    try {
      const response = await fetch(
        "http://localhost:8081/api/v1/user/removeBooking/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bookingID }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to cancel booking");
      }

      // Refresh bookings list after cancellation
      const email = sessionStorage.getItem("email");
      fetchBookingDetails(email);
    } catch (error) {
      console.error("Error canceling booking:", error);
    }
  };

  const subscribeToPromotions = async () => {
    // Replace this with your actual API call logic
    console.log("Subscribed to promotions");
  };

  return (
    <div className="my-account-container">
      <h1>My Account</h1>
      <h2>Welcome, {sessionStorage.getItem("firstName")}</h2>

      <h3>Your Bookings:</h3>
      {bookings.length > 0 ? (
        bookings.map((booking, index) => (
          <div key={index} className="booking-info">
            {/* Assuming booking is an object with keys like 'firstName', 'lastName', etc. */}
            {Object.entries(booking).map(([key, value]) => {
              if (key !== "creditCardInfo") {
                // Exclude credit card information
                return (
                  <p key={key}>
                    <strong>{key}:</strong> {value}
                  </p>
                );
              }
              return null;
            })}
            <button onClick={() => cancelBooking(booking.bookingID)}>
              Cancel Booking
            </button>
          </div>
        ))
      ) : (
        <p>No bookings found.</p>
      )}

      <button onClick={subscribeToPromotions}>Subscribe to Promotions</button>
    </div>
  );
};

export default MyAccount;
