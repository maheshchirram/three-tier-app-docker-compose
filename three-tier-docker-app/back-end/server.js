const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/api', (req, res) => {
  db.query('SELECT "Hello from MySQL" AS message', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});
