const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: '127.0.0.1',
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
app.get('/api/v1/user/registered/', (req, res) => {
    res.send({ status: 'false' })

})
app.post('/api/login', (req, res) => {
    res.send("From ser")


})

app.listen(8081, () => {
    console.log("listening");
})