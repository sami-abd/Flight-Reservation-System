//Returns list of flights with all information when the departure, destination, and date is specified in the fetchFlights request:

// SQL query function definition:
function fetchFlights(departure, destination, date, callback) {
    const query = 'SELECT * FROM FLIGHT WHERE departure = ? AND destination = ? AND date = ?';
    connection.query(query, [departure, destination, date], (error, results) => {
        callback(error, results);
    });
}

// Route handler linked to fetchFlights function (this can be called by React fetch command):
router.get('/fetchFlights/:departure/:destination/:date', (req, res) => {
    
	// Grab variables for SQL request from incoming HTTP request:
	const { departure, destination, date } = req.params;

	// Run SQL script with values passed in through the HTTP request:
    fetchFlights(departure, destination, date, (error, results) => {
		
		// Handle errors:
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
		
		// Send JSON response to frontend:
        res.json(results);
    });
});


