//Returns list of passengers that are currently booked on a flight when the flightID for the specific flight is specified in the fetchPassengerList request:

// SQL query function definition:
function fetchPassengerList(flightID, callback) {
    const query = 'SELECT seat, firstName, lastName FROM BOOKING WHERE flightID = ?';
    connection.query(query, [flightID], (error, results) => {
        callback(error, results);
    });
}

// Route handler linked to fetchPassengerList function (this can be called by React fetch command):
router.get('/fetchPassengerList/:flightID', (req, res) => {
    
	// Grab variables for SQL request from incoming HTTP request:
	const { flightID } = req.params;

	// Run SQL script with values passed in through the HTTP request:
    fetchPassengerList(flightID, (error, results) => {
		
		// Handle errors:
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
		
		// Send JSON response to frontend:
        res.json(results);
    });
});


