// SelectSeat.js

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SelectSeat.css';

const SelectSeat = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { flightID } = location.state || {};

    const [seats, setSeats] = useState([]);
    const [error, setError] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [inputSeatNumber, setInputSeatNumber] = useState('');

    useEffect(() => {
        // Retrieve flightID from location state
        const { flightID } = location.state || {};

        // Check if flightID is available
        if (!flightID) {
            setError('Flight ID not provided');
            return;
        }

        // Fetch seats based on the flightID
        const getSeats = async () => {
            try {
                const response = await fetch("http://localhost:8081/api/getseats", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ flightID })
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch seats');
                }

                const data = await response.json();

                if (data.success) {
                    setSeats(data.data);
                } else {
                    setError(data.message);
                }
            } catch (error) {
                setError(error.message);
            }
        };

        // Call the getSeats function
        getSeats();
    }, [location.state]);

    // Function to handle row selection
    const handleRowClick = (index) => {
        setSelectedRow(selectedRow === index ? null : index);
    };


    // Function to navigate to the payment page
    const goToPaymentPage = () => {
        let selectedSeat;
        if (selectedRow !== null) {
            console.log(selectedRow);
            selectedSeat = seats[selectedRow]
        }

        if (selectedSeat) {
            console.log(selectedSeat.cost)
            let cost = seats[selectedRow].price

            // The issue might be here, especially with the selectedRow part
            navigate('/payment', { state: { seat: selectedSeat.seatID, cost: selectedSeat.price, flightID: flightID } });
        } else {
            alert('Please select a valid seat before proceeding to payment.');
        }
    };


    return (
        <div className="container">
            <h1>Select Seat</h1>
            {error && <div className="error-message">{error}</div>}
            {/* Input section for seat number */}
            {/* Button section to go to the payment page */}
            <div className="button-section">
                <button onClick={goToPaymentPage}>Go to Payment Page</button>
            </div>
            {/* Table for displaying seat information */}
            <table>
                <thead>
                    <tr>
                        <th>Seat ID</th>
                        <th>Class</th>
                        <th>Price</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {seats.map((seat, index) => (
                        <tr
                            key={seat.id}
                            onClick={() => handleRowClick(index)}
                            className={selectedRow === index ? 'selected-row' : ''}
                        >
                            <td>{seat.seatID}</td>
                            <td>{seat.class}</td>
                            <td>{seat.price}</td>
                            <td>{seat.isAvailable ? 'Available' : 'Not Available'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SelectSeat;
