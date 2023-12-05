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
      fetchUserID(email).then((userID) => {
        if (userID) {
          fetchPromotionStatus(userID);
        }
      });
    }
  }, []);
  const fetchPromotionStatus = async (userID) => {
    try {
      const response = await fetch(
        "http://localhost:8081/api/v1/user/getPromotionStatus/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userID }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch promotion status");
      }

      const data = await response.json();
      setIsSubscribed(Boolean(data.isSubscribed));
    } catch (error) {
      console.error("Error fetching promotion status:", error);
    }
  };
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
  const fetchUserID = async (email) => {
    try {
      const response = await fetch(
        "http://localhost:8081/api/v1/user/getUserID",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user ID");
      }

      const data = await response.json();
      return data.data; // Assuming the user ID is returned here
    } catch (error) {
      console.error("Error fetching user ID:", error);
      return null;
    }
  };

  const toggleSubscription = async () => {
    const newSubscriptionStatus = !isSubscribed;
    setIsSubscribed(newSubscriptionStatus);

    try {
      const email = sessionStorage.getItem("email");
      const userID = await fetchUserID(email);

      if (!userID) {
        throw new Error("User ID not found");
      }

      const response = await fetch(
        "http://localhost:8081/api/v1/user/updatePromotion/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userID,
            toggle: newSubscriptionStatus ? 1 : 0,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update promotion status");
      }

      const result = await response.json();
      console.log(result.message); // Log or handle the response message

      // Update the message and control the popup
      if (newSubscriptionStatus) {
        setMessage("You are now subscribed to promotions");
        setShowPopup(true); // Show the popup when subscribed
      } else {
        setMessage("You have unsubscribed from promotions");
        setShowPopup(false); // Hide the popup when not subscribed
      }
    } catch (error) {
      console.error("Error in toggling subscription:", error);
      // Handle errors, e.g., revert subscription status change or show an error message
      setIsSubscribed(!newSubscriptionStatus); // Revert the subscription status change
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

      <div className="subscription-section">
        {/* Text above the subscription button */}
        <p className="subscription-text">
          {isSubscribed
            ? "Click button below to unsubscribe from promotions"
            : "Click button below to subscribe to promotions"}
        </p>

        {/* Subscription button */}
        <button onClick={toggleSubscription}>
          {isSubscribed
            ? "Unsubscribe from promotions"
            : "Subscribe to promotions"}
        </button>
      </div>
      {/* Discount message when subscribed */}
      {isSubscribed && (
        <p className="discount-message">
          Subscribed! Enjoy 20% off on hotel bookings.
        </p>
      )}

      {showPopup && <div className="popup">{message}</div>}
    </div>
  );
};

export default MyAccount;
