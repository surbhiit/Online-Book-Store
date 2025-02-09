const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

// Set up express app
const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: 'Surbhi@2002', // Your MySQL password
  database: 'meditation_app', // Database name
});

db.connect((err) => {
  if (err) {
    console.error('Could not connect to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Sign Up Route
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received signup request for email:', email);

  // Check if the user already exists
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if (err) {
      console.log('Database error:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    if (result.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, result) => {
      if (err) {
        console.log('Error creating user:', err);
        return res.status(500).json({ message: 'Error creating user' });
      }
      console.log('User created successfully!');
      res.status(201).json({ message: 'User created successfully' });
    });
  });
});

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if (err) {
      console.log('Database error:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, result[0].password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ userId: result[0].id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ token });
  });
});

// Start the server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
