//Returns list of seats with all information when the flightID is specified in the fetchSeatAvailability request:

// SQL query function definition:
function fetchSeatAvailability(flightID, callback) {
    const query = 'SELECT seatID, price, isBooked FROM FLIGHTSEATS WHERE flightID = ?';
    connection.query(query, [flightID], (error, results) => {
        callback(error, results);
    });
}

// Route handler linked to fetchSeatAvailability function (this can be called by React fetch command):
router.get('/fetchSeatAvailability/:flightID', (req, res) => {
    
	// Grab variables for SQL request from incoming HTTP request:
	const { flightID } = req.params;

	// Run SQL script with values passed in through the HTTP request:
    fetchSeatAvailability(flightID, (error, results) => {
		
		// Handle errors:
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
		
		// Send JSON response to frontend:
        res.json(results);
    });
});


