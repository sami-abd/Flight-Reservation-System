const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express()
app.use(cors())

app.use(bodyParser.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'ensf614',
    password: 'root',
    database: 'companyensf608'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});
app.get('/', (re, res) => {
    return res.json("From Backend Side");
})

app.get('/department', (req, res) => {
    const sql = "SELECT *  FROM department";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})
app.post('/api/v1/user/registered/', (req, res) => {
    try {
        const { email, password } = req.body;
        let names = ""

        // Now you have the email and password, and you can use them as needed
        console.log('Email:', email);
        console.log('Password:', password);
        const query = 'SELECT * FROM USER';
        db.query(query, (error, results) => {
            names = results;
            // return res.json(results);
        });

        // Add your logic for user registration or authentication here

        res.status(200).json({ success: true, message: 'User registered successfully', name: names });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

app.listen(8081, () => {
    console.log("listening");
})