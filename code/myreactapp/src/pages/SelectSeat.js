import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SelectSeat.css';

const SelectSeat = () => {
    const location = useLocation();
    const [seats, setSeats] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [error, setError] = useState(null);

    // Extracting flightID from location state
    const { flightID } = location.state || {};

    useEffect(() => {
        // Assume you have an API endpoint to fetch seats for a given flightID
        const fetchSeats = async () => {
            try {
                const response = await fetch(`http://localhost:8081/api/getseats?flightID=${flightID}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch seats');
                }

                const data = await response.json();
                setSeats(data.seats);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchSeats();
    }, [flightID]);

    const handleSeatClick = (seat) => {
        // Toggle the selected seat
        setSelectedSeat(selectedSeat === seat.id ? null : seat.id);
    };

    return (
        <div className="container">
            <h1>Select Seat</h1>
            {error && <div className="error-message">{error}</div>}
            <div className="seat-map">
                {seats.map((seat) => (
                    <div
                        key={seat.id}
                        onClick={() => handleSeatClick(seat)}
                        className={`seat ${seat.status} ${selectedSeat === seat.id ? 'selected' : ''}`}
                    >
                        {seat.id}
                    </div>
                ))}
            </div>
            <button onClick={() => console.log(`Selected Seat: ${selectedSeat}`)}>Confirm Selection</button>
        </div>
    );
};

export default SelectSeat;
