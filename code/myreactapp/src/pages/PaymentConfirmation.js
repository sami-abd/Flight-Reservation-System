import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PaymentConfirmation = () => {
  const location = useLocation();
  const [bookingDetails, setBookingDetails] = useState(null);
  const [latestBooking, setLatestBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve the email from bookingInfo passed in location.state
    const email = location.state?.bookingInfo?.email;
    if (email) {
      fetchBookingDetails(email);
    }
  }, [location.state]);

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
        throw new Error("Failed to fetch booking details");
      }

      const data = await response.json();
      console.log("Fetched booking data:", data.data.length); // Log for debugging
      if (data.data.length > 0) {
        // Sort bookings if necessary based on a date field
        // Assuming 'departure' or a similar field indicates the date of booking
        // Replace 'departure' with the actual date field you want to sort by
        data.data.sort((a, b) => new Date(b.departure) - new Date(a.departure));

        const latestBooking = data.data[0]; // The first element after sorting
        setLatestBooking(latestBooking);
      }
    } catch (error) {
      console.error("Error fetching booking details:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading booking details...</div>;
  }

  if (error) {
    return <div>Error fetching booking details: {error}</div>;
  }

  if (!latestBooking) {
    return <div>No booking information available.</div>;
  }

  const centerStyle = {
    textAlign: "center",
  };

  return (
    <div className="confirmation" style={centerStyle}>
      <h1>Congratulations on Your Booking!</h1>
      <div className="booking-details">
        {Object.entries(latestBooking).map(([key, value]) => (
          <p key={key}>
            <strong>{key}:</strong> {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PaymentConfirmation;
