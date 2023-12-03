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
  user: "root",
  password: "",
  database: "competition",
  host: "127.0.0.1",
  user: "ensf614",
  password: "ensf614",
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
    const query = `SELECT email FROM USER WHERE email = '${email}' AND password1 = '${password}'`;
    db.query(query, (error, results) => {
      names = results;
      // return res.json(results);
      res
        .status(200)
        .json({
          success: true,
          message: "User registered successfully",
          data: names,
        });
    });

    // Add your logic for user registration or authentication here

    //res.status(200).json({ success: true, message: 'User registered successfully', name: names });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(3306, () => {
  console.log("listening");
});
