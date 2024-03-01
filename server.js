// authentication-service/server.js
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const secretKey = 'your_secret_key';

// Dummy user data (replace with actual database integration)
const users = [
  { username: 'admin', password: 'admin' }
];

// Authentication endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Validate user credentials (replace with actual logic)
  if (username === 'admin' && password === 'admin') {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(3001, () => {
  console.log('Authentication Service running on port 3001');
});
