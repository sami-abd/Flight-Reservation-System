// Brandon's code
const express = require("express");

const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

app.use(bodyParser.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "ensf614",
    password: "root",
    database: "companyensf608",
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL");
});
app.get("/", (re, res) => {
    return res.json("From Backend Side");
});

app.get("/department", (req, res) => {
    const sql = "SELECT *  FROM department";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});
app.post("/api/v1/user/registered/", (req, res) => {
    try {
        console.log(req.body);
        const email = req.body.email;
        const password = req.body.password;
        //const { email, password } = req.body;
        let names = "";

        // Now you have the email and password, and you can use them as needed
        console.log("Email:", email);
        console.log("Password:", password);
        const query = `SELECT * FROM USER WHERE email = '${email}' AND password1 = '${password}'`;
        db.query(query, (error, results) => {
            names = results;
            // return res.json(results);
            if (names == null || names == "") {
                res.status(404).json({ data: '0' })
            }
            else {
                console.log(names)
                res
                    .status(200)
                    .json({
                        success: true,
                        message: "User registered successfully",
                        data: names,
                    });

            }
        });

        // Add your logic for user registration or authentication here

        //res.status(200).json({ success: true, message: 'User registered successfully', name: names });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

app.listen(8081, () => {
    console.log("listening");
});


app.post("/api/getflights", (req, res) => {
    try {
        const departure = req.body.departure;
        const arrival = req.body.arrival;
        const start = req.body.formattedStartDate;


        // Ensure that the date format in the SQL query matches the format in your database
        const query = `SELECT flightID, time, departure, destination FROM FLIGHT 
                       WHERE departure = ? AND destination = ? AND date = ?`;

        db.query(query, [departure, arrival, start], (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ success: false, message: "Internal Server Error" });
            }

            if (!results || results.length === 0) {
                return res.status(404).json({ success: false, message: "No flights found" });
            }

            console.log(results);
            res.status(200).json({
                success: true,
                message: "Flights retrieved successfully",
                data: results,
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
    const seats = [
        { id: 1, status: 'available' },
        { id: 2, status: 'occupied' },
        { id: 3, status: 'available' },
        // ... add more seats
    ];

    app.get('/api/getseats', (req, res) => {
        const flightID = req.query.flightID; // Assuming the flightID is passed as a query parameter

        // You can fetch seats based on the flightID from your database
        // For simplicity, using the example seat data
        res.json({ seats });
    });
});

