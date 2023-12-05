import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MaintainAir = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [aircrafts, setAircrafts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedAir, setSelectedAir] = useState(null);

  // Extracting departure, arrival, and startD from location state
  useEffect(() => {
    const getAir = async () => {
      try {
        let response = await fetch("http://localhost:8081/api/v1/getAir", {
          method: "POST",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch Aircraft");
        }

        let data = await response.json();
        if (data.success) {
          setAircrafts(data.data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    // Call getFlights when the component mounts or when the dependencies change
    getAir();
  });
  const deleteAir = async () => {
    try {
      const selectedAirID = aircrafts[selectedAir].aircraftID;
      let response = await fetch(
        "http://localhost:8081/api/v1/user/removeAircraft/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ selectedAirID }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete Aircraft");
      }

      let data = await response.json();
      if (data.success) {
        window.alert("Flight has been deleted");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAirClick = (index) => {
    // Toggle the selected flight
    setSelectedAir(selectedAir === index ? null : index);
  };

  const handleNextButtonClick = () => {
    if (selectedAir !== null) {
      const selectedAirID = aircrafts[selectedAir].aircraftID;
      deleteAir();
    } else {
      // Handle the case where no flight is selected
      alert("Please select a flight before proceeding.");
    }
  };

  return (
    <div className="flight-info">
      <h1>Aircraft Information</h1>
      {error && <div className="error-message">{error}</div>}
      <table>
        <thead>
          <tr>
            <th>AircraftID</th>
            <th>Name</th>
            <th>Capacity</th>
            <th>CompanyID</th>
          </tr>
        </thead>
        <tbody>
          {aircrafts.map((aircraft, index) => (
            <tr
              key={index}
              onClick={() => handleAirClick(index)}
              className={selectedAir === index ? "selected" : ""}
            >
              <td>{aircraft.aircraftID}</td>
              <td>{aircraft.name}</td>
              <td>{aircraft.capacity}</td>
              <td>{aircraft.companyID}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleNextButtonClick}>Delete Selected Aircraft</button>
    </div>
  );
};

export default MaintainAir;
