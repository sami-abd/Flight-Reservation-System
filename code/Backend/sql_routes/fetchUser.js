// Returns a single match of an email if the specified email and password exist in the user table when specified in the fetchUser request:

// SQL query function definition:
function fetchUser(email, password, callback) {
    const query = 'SELECT email FROM USER WHERE email = ? AND password = ?';
    connection.query(query, [email, password], (error, results) => {
        callback(error, results);
    });
}

// Route handler linked to fetchUser function (this can be called by React fetch command):
app.get('/fetchUser/:email/:password', (req, res) => {
    
	// Grab variables for SQL request from incoming HTTP request:
	const { email, password } = req.params;

	// Run SQL script with values passed in through the HTTP request:
    fetchUser(email, password, (error, results) => {
		
		// Handle errors:
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
		
		// Send JSON response to frontend:
        res.json(results);
    });
});


