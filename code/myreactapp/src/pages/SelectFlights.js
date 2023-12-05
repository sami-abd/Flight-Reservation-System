import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SelectFlights.css";

const SelectFlights = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [error, setError] = useState(null);

  // Extracting departure, arrival, and startD from location state
  const { dep: departure, arr: arrival, start: startD } = location.state || {};
  const formattedStartDate = startD && startD.toLocaleDateString("en-CA"); // Adjust the locale as needed

  useEffect(() => {
    const getFlights = async () => {
      try {
        let response = await fetch("http://localhost:8081/api/getflights", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ departure, arrival, formattedStartDate }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch flights");
        }

        let data = await response.json();

        if (data.success) {
          setFlights(data.data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    // Call getFlights when the component mounts or when the dependencies change
    getFlights();
  }, [departure, arrival, formattedStartDate]);

  const handleFlightClick = (index) => {
    // Toggle the selected flight
    setSelectedFlight(selectedFlight === index ? null : index);
  };

  const handleNextButtonClick = () => {
    // Check if a flight is selected
    if (selectedFlight !== null) {
      // Get the selected flight's ID
      const selectedFlightID = flights[selectedFlight].flightID;
      // Navigate to the 'SelectSeat' page and pass the flightID as state
      navigate("/SelectSeat", { state: { flightID: selectedFlightID } });
    } else {
      // Handle the case where no flight is selected
      alert("Please select a flight before proceeding.");
    }
  };

  return (
    <div className="container">
      <div className="flight-details">
        <h1>Select Flights</h1>
        <p>Departure: {departure}</p>
        <p>Arrival: {arrival}</p>
        <p>Start Date: {formattedStartDate}</p>
      </div>

      <div className="flight-info">
        <h1>Flight Information</h1>
        {error && <div className="error-message">{error}</div>}
        <table>
          <thead>
            <tr>
              <th>FlightID</th>
              <th>Time</th>
              <th>From City</th>
              <th>To City</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr
                key={index}
                onClick={() => handleFlightClick(index)}
                className={selectedFlight === index ? "selected" : ""}
              >
                <td>{flight.flightID}</td>
                <td>{flight.time}</td>
                <td>{flight.departure}</td>
                <td>{flight.destination}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleNextButtonClick}>Next</button>
      </div>
    </div>
  );
};

export default SelectFlights;
