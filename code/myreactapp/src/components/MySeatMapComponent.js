import React from 'react';
import SeatMap from 'react-seatmap';


const MySeatMapComponent = () => {
    const rows = [
        [{ id: 1, number: 'A1' }, { id: 2, number: 'A2' }, { id: 3, number: 'A3' }],
        [{ id: 4, number: 'B1' }, { id: 5, number: 'B2' }, { id: 6, number: 'B3' }],
        // ... add more rows as needed
    ];

    const selectedSeats = [];

    const handleSeatClick = (row, number, id, index) => {
        // Handle seat click event
        console.log(`Seat clicked: ${row}${number}`);
    };

    return (
        React.render(
            <SeatMap rows={rows} maxReservableSeats={3} alpha />,
            document.getElementById('app')
        )
    );

};

export default MySeatMapComponent;
