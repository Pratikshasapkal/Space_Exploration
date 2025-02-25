
const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'space_exploration_simulation'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

/// User Signup
app.post('/signup', (req, res) => {
	const { username, email, password } = req.body;
	const newUser = { username, email, password };
	connection.query('INSERT INTO users SET ?', newUser, (err, results) => {
	  if (err) {
		console.error('Error signing up user: ', err);
		res.status(500).json({ error: 'Error signing up user' });
		return;
	  }
	  res.status(200).json({ message: 'User signed up successfully' });
	});
  });
  
  // User Login
  app.post('/login', (req, res) => {
	const { email, password } = req.body;
	connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
	  if (err) {
		console.error('Error logging in user: ', err);
		res.status(500).json({ error: 'Error logging in user' });
		return;
	  }
	  if (results.length === 0 || results[0].password !== password) {
		res.status(401).json({ error: 'Invalid email or password' });
		return;
	  }
	  res.status(200).json({ message: 'User logged in successfully', user: results[0] });
	});
  });
  