// Set up express and database
const express = require("express");

const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

app.use(bodyParser.json());
const db = mysql.createConnection({
    host: "127.0.0.1",
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

//---------------------------------------------------------------------------------------------------------------------------
//
app.get("/department", (req, res) => {
    const sql = "SELECT *  FROM department";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

//---------------------------------------------------------------------------------------------------------------------------
// API SQL route for login request:
app.post("/api/v1/user/registered/", (req, res) => {
    try {
        console.log(req.body);
        const email = req.body.email;
        const password = req.body.password;
        let names = "";

        // Now you have the email and password, and you can use them as needed:
        //console.log("Email:", email);
        //console.log("Password:", password);
        const query = `SELECT * FROM USER WHERE email = '${email}' AND password = '${password}'`;

        // Run SQL query with provided value:
        db.query(query, (error, results) => {
            names = results;
            console.log(names);
            // return res.json(results);
            if (names == null || names == "") {
                res.status(404).json({ data: "0" });
            } else {
                console.log(names);
                res.status(200).json({
                    success: true,
                    message: "User registered successfully",
                    data: names,
                });
            }
        });

        // Catch errors with a response message:
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

//---------------------------------------------------------------------------------------------------------------------------
app.listen(8081, () => {
    console.log("listening");
});

//---------------------------------------------------------------------------------------------------------------------------
// API SQL route for getting available flights:
app.post("/api/getflights", (req, res) => {
    try {
        const departure = req.body.departure;
        const arrival = req.body.arrival;
        const start = req.body.formattedStartDate;

        // Ensure that the date format in the SQL query matches the format in your database
        const query = `SELECT flightID, time, departure, destination FROM FLIGHT 
                       WHERE departure = ? AND destination = ? AND date = ?`;

        // Run SQL query with provided value:
        db.query(query, [departure, arrival, start], (error, results) => {

            // Handle errors:
            if (error) {
                console.error(error);
                return res.status(500).json({ success: false, message: "Internal Server Error" });
            }

            // Handle no returned values:
            if (!results || results.length === 0) {
                return res
                    .status(404)
                    .json({ success: false, message: "No flights found" });
            }

            //console.log(results);

            // Handle for when 1 or more results are returned:
            res.status(200).json({
                success: true,
                message: "Flights retrieved successfully",
                data: results,
            });
        });

        // Handle server errors:
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});
app.post('/api/getseats', (req, res) => {
    const query = 'SELECT * FROM seat WHERE flightID = ?';
    const flightID = req.body.flightID;

    db.query(query, [flightID], (error, results) => {
        console.log(results)
        if (error) {
            console.error('Error executing MySQL query:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        } else {
            res.status(200).json({ success: true, message: 'Seats retrieved successfully', data: results });
        }
    });
});

app.post('/api//bookings', (req, res) => {

    res.status(200).json({ success: true, message: 'Seats retrieved successfully', data: results });
});
//---------------------------------------------------------------------------------------------------------------------------
// API SQL route for admin request to return all passengers on a flight (client provides a 'flightID'):
app.post("/api/v1/user/getPassengerList/", (req, res) => {
    try {
        // Grab flightID from body of request:
        // console.log(req.body);
        const flightID = req.body.flightID;;

        // Define SQL query:
        const query = `SELECT seat, firstName, lastName FROM BOOKING WHERE flightID = ?`;

        // Run SQL query with provided value:
        db.query(query, [flightID], (error, results) => {

            // Handle for when no results are returned
            if (results == null || results == "") {
                res.status(404).json({ message: 'There were no returned passengers for that flightID', data: '0' })
            }

            // Handle for when 1 or more results are returned:
            else {
                console.log(results)
                res
                    .status(200)
                    .json({
                        success: true,
                        message: "A list of passengers for the specified flight has been returned successfully",
                        data: results,
                    });
            }
        });

        // Catch errors with a response message:
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

//---------------------------------------------------------------------------------------------------------------------------
// API SQL route for admin request to add a new flight into the system (client provides 'departure', 'destination', 'date', 'aircraftID'):
app.post("/api/v1/user/addFlight/", (req, res) => {
    try {

        // Grab values from body of json request:
        //console.log(req.body);
        const departure = req.body.departure;
        const destination = req.body.destination;
        const date = req.body.date;
        const aircraftID = req.body.aircraftID;

        // Define SQL query:
        const query = `INSERT INTO FLIGHT (departure, destination, date, aircraftID) VALUES (?, ?, ?, ?)`;

        // Run SQL query with provided values:
        db.query(query, [departure, destination, date, aircraftID],
            (error, results) => {
                // Handle for when no results are returned
                if (results == null || results == "") {
                    res.status(404).json({
                        message: "There were no returned passengers for that flightID",
                        data: "0",
                    });
                }

                // Handle for when 1 or more results are returned:
                else {
                    console.log(results)
                    res
                        .status(200)
                        .json({
                            success: true,
                            message: "A new flight has been successfully added",
                            data: results,
                        });
                }
            });

        // Catch errors with a response message:
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

//---------------------------------------------------------------------------------------------------------------------------
// API SQL route for a booking to be removed from the booking table (client provides 'bookingID'):
app.post("/api/v1/user/removeBooking/", (req, res) => {
    try {
        // Grab values from body of json request:
        //console.log(req.body);
        const bookingID = req.body.bookingID;

        // Print values to console (for debugging):
        console.log("bookingID:", bookingID);


        //-------------------------------------------------------
        // Define SQL query #1: (update seat to empty) --> Do this before query #2
        const query1 = `UPDATE SEAT AS S
                        JOIN BOOKING AS B ON S.flightID = B.flightID AND S.seatID = B.seatID
                        SET S.isAvailable = 1
                        WHERE B.bookingID = ?`;

        // Run SQL query with provided value:
        db.query(query, [bookingID], (error, results) => {

            // Handle for when no results are returned
            if (results == null || results == "") {
                res.status(404).json({ message: 'The booking was NOT successfully removed for that bookingID', data: '0' })
            }

            // Handle for when 1 or more results are returned:
            else {
                console.log(results)
                res
                    .status(200)
                    .json({
                        success: true,
                        message: "The booking has been successfully removed",
                        data: results,
                    });
            }
        });

        // Catch errors with a response message:
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});


//---------------------------------------------------------------------------------------------------------------------------
// API SQL route for a booking to be added from the booking table (client provides 'flightID', 'firstName', 'lastName', 'email', 'seatID', 'hasInsurance'):
app.post("/api/v1/user/addBooking/", (req, res) => {
    try {
        // Grab values from body of json request:
        //console.log(req.body);
        const flightID = req.body.flightID;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const seatID = req.body.seat;
        const hasInsurance = req.body.hasInsurance;



        //-------------------------------------------------------
        // Define SQL query #1: (add booking row)
        const query1 = `INSERT INTO BOOKING (flightID, firstName, lastName, email, seatID, hasInsurance) VALUES (?, ?, ?, ?, ?, ?)`;
        // Run SQL query with provided value:
        console.log(email)
        db.query(
            query1,
            [flightID, firstName, lastName, email, seatID, hasInsurance],
            (error, results) => {
                // Handle for when no results are returned
                if (results == null || results == "") {
                    res.status(404).json({
                        message: "The booking was NOT successfully added",
                        data: "0",
                    });
                }

                // Handle for when 1 or more results are returned:
                else {
                    console.log(results);
                    res.status(200).json({
                        success: true,
                        message: "The booking has been successfully added",
                        data: results,
                    });
                }
            }
        );

        //-------------------------------------------------------
        // Define SQL query #2: (update seat to empty) --> Do this before query #2
        // const query2 = `UPDATE SEAT AS S
        //               JOIN BOOKING AS B ON S.flightID = B.flightID AND S.seatID = B.seatID
        //             SET S.isAvailable = 1
        //           WHERE B.bookingID = ?`;

        // Run SQL query with provided value:
        // db.query(query2, [bookingID], (error, results) => {

        // Define SQL query #2: (update seat to empty) --> Do this before query #2
        // const query2 = `UPDATE SEAT AS S
        //               JOIN BOOKING AS B ON S.flightID = B.flightID AND S.seatID = B.seatID
        //             SET S.isAvailable = 1
        //           WHERE B.bookingID = ?`;

        // Run SQL query with provided value: 
        // db.query(query2, [bookingID], (error, results) => {

        // Handle for when no results are returned
        //   if (results == null || results == "") {
        //     res.status(404).json({ message: 'The seat was NOT successfully removed using that bookingID', data: '0' })
        //}

        // Handle for when 1 or more results are returned:
        // else {
        //    console.log(results)
        //     res
        //         .status(200)
        //         .json({
        //            success: true,
        //             message: "The seat was successfully removed using that bookingID",
        //              data: results,
        //          });      
        //      }
        //   });

        // Catch errors with a response message:
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

//---------------------------------------------------------------------------------------------------------------------------
// API SQL route for returning all flights that a user has booked that are linked to their account (client provides 'email'):
app.post("/api/v1/user/getPassengerFlight/", (req, res) => {
    try {

        // Grab values from body of json request:
        //console.log(req.body);
        const email = req.body.email;

        // Define SQL query:
        const query = `SELECT B.firstName, B.lastName, F.flightID, F.departure, F.destination, F.date, B.seatID, S.price
                        FROM FLIGHT AS F
                        JOIN BOOKING AS B ON F.flightID = B.flightID
                        JOIN SEAT AS S ON B.flightID = S.flightID AND B.seatID = S.seatID
                        WHERE B.email = ?`;

        // Run SQL query with provided value:
        db.query(query, [email], (error, results) => {

            // Handle for when no results are returned
            if (results == null || results == "") {
                res.status(404).json({ message: 'No bookings are currently available for this registered email', data: '0' })
            }

            // Handle for when 1 or more results are returned:
            else {
                console.log(results)
                res
                    .status(200)
                    .json({
                        success: true,
                        message: "The following bookings exist for the registered email that was provided",
                        data: results,
                    });
            }
        });

        // Catch errors with a response message:
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});


//---------------------------------------------------------------------------------------------------------------------------
// API SQL route for updating the promotions boolean in the REGISTERED_USER table (client provides 'userID' and a 'toggle' to turn promotions on or off [0/1]):
app.post("/api/v1/user/updatePromotion/", (req, res) => {
    try {
        // Grab values from body of json request:
        //console.log(req.body);
        const userID = req.body.userID;
        const toggle = req.body.toggle;



        // Define SQL query:
        const query = 'UPDATE REGISTERED_USER SET promotionAlert = ? WHERE userID = ?';

        // Run SQL query with provided value:
        db.query(query, [toggle, userID], (error, results) => {

            // Handle for when no results are returned
            if (results == null || results == "") {
                res.status(404).json({ message: 'Promotion was not upated successfully', data: '0' })
            }

            // Handle for when 1 or more results are returned:
            else {
                console.log(results)
                res
                    .status(200)
                    .json({
                        success: true,
                        message: "Promotion was updated successfully",
                        data: results,
                    });
            }
        });

        // Catch errors with a response message:
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

//---------------------------------------------------------------------------------------------------------------------------
// API SQL route for adding users into the system (client provides 'firstName', 'lastName', 'birthdate', 'email', 'street', 'city', 'province', 'password', 'userType'):
app.post("/api/v1/user/createUser/", (req, res) => {
    try {

        // Grab values from body of json request:
        //console.log(req.body);
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const birthdate = req.body.FdateOfBirth;
        const email = req.body.email;
        const street = req.body.street;
        const city = req.body.city;
        const province = req.body.province;
        const password = req.body.password;
        const userType = req.body.userType;

        // Print values to console (for debugging):
        console.log("firstName:", firstName);
        console.log("lastName:", lastName);
        console.log("birthdate:", birthdate);
        console.log("email:", email);
        console.log("street:", street);
        console.log("city:", city);
        console.log("province:", province);
        console.log("password:", password);
        console.log("userType:", userType);
        // Define SQL query:
        const query = "INSERT INTO USER (firstName, lastName, birthdate, email, street, city, province, password, userType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'REGISTERED_USER')";

        // Run SQL query with provided value: 
        db.query(query, [firstName, lastName, birthdate, email, street, city, province, password], (error, results) => {

            // Handle for when no results are returned
            if (error) {
                console.log(error)
                res.status(404).json({ message: 'The user was NOT successfully added to the database', data: '0' })
            }

            // Handle for when 1 or more results are returned:
            else {
                console.log(results)
                res
                    .status(200)
                    .json({
                        success: true,
                        message: "The user has been successfully added to the database'",
                        data: results,
                    });
            }
        });

        // Catch errors with a response message:
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});