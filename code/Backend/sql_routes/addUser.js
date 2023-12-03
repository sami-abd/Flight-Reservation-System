// Adds a user into the USER table when email and password are specified in the addUser request:

// SQL query function definition:
function addUser(email, pass, callback) {
    const query = 'INSERT INTO USER (email, password) VALUES (?, ?)';
    connection.query(query, [email, pass], (error, results) => {
        callback(error, results);
    });
}

// Route handler linked to addUser function (this can be called by React fetch command):
router.get('/addUser/:email/:pass', (req, res) => {
    
	// Grab variables for SQL request from incoming HTTP request:
	const { email, pass } = req.params;

	// Run SQL script with values passed in through the HTTP request:
    addUser(email, pass, (error, results) => {
		
		// Handle errors:
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
		
		// Send JSON response to frontend:
        res.json(results);
    });
});


