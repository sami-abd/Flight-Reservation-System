// Updates seat availability from not booked to booked when the flightID and seatID is specified in the updateToFillSeat request:

// SQL query function definition:
function updateToFillSeat(flightID, seatID, callback) {
    const query = 'UPDATE FLIGHTSEATS SET isBooked = 1 WHERE flightID = ? AND seatID = ?';
    connection.query(query, [flightID, seatID], (error, results) => {
        callback(error, results);
    });
}

// Route handler linked to updateToFillSeat function (this can be called by React fetch command):
router.get('/updateToFillSeat/:flightID/:seatID', (req, res) => {
    
	// Grab variables for SQL request from incoming HTTP request:
	const { flightID, seatID } = req.params;

	// Run SQL script with values passed in through the HTTP request:
    updateToFillSeat(flightID, seatID, (error, results) => {
		
		// Handle errors:
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
		
		// Send JSON response to frontend:
        res.json(results);
    });
});


