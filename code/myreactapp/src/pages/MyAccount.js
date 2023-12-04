import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./MyAccount.css"; // Import your CSS file here

const MyAccount = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const [isSubscribed, setIsSubscribed] = useState(false); // New state to track subscription status
  const [message, setMessage] = useState(""); // New state for displaying messages
  const [showPopup, setShowPopup] = useState(false);

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

  const cancelBooking = async (booking) => {
    try {
      const { firstName, lastName, flightID } = booking;
      console.log(booking);
      const response = await fetch(
        "http://localhost:8081/api/v1/user/removeBooking2/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, flightID }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to cancel booking");
      }

      // Optimistically remove the booking from the state
      setBookings(
        bookings.filter(
          (b) =>
            b.flightID !== flightID ||
            b.firstName !== firstName ||
            b.lastName !== lastName
        )
      );
    } catch (error) {
      console.error("Error canceling booking:", error);
      // Optionally, revert the state update or show an error message
    }
  };

  const toggleSubscription = () => {
    const newSubscriptionStatus = !isSubscribed;
    setIsSubscribed(newSubscriptionStatus);

    // Update the message and control the popup
    if (newSubscriptionStatus) {
      setMessage("You are subscribed");
      setShowPopup(true); // Show the popup when subscribed
    } else {
      setMessage("You are not subscribed");
      setShowPopup(false); // Hide the popup when not subscribed
    }
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
            <button onClick={() => cancelBooking(booking)}>
              Cancel Booking
            </button>
          </div>
        ))
      ) : (
        <p>No bookings found.</p>
      )}
      <button onClick={toggleSubscription}>
        {isSubscribed ? "You are subscribed" : "You are not subscribed"}
        {showPopup && <div className="popup">You have 20% off hotels</div>}
      </button>
    </div>
  );
};

export default MyAccount;
