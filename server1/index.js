const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const port = 3000; // You can change the port if needed

// Use the cookie parser middleware
app.use(cookieParser());
app.use(cors());

// Set a cookie when the user visits the "/set-cookie" route
app.get('/set-cookie', (req, res) => {
  res.cookie('user', 'JohnDoe', { maxAge: 900000, httpOnly: true }); // Cookie will expire in 15 minutes
  res.send({message:'Cookie set!'});
});

// Retrieve the cookie when the user visits the "/get-cookie" route
app.get('/get-cookie', (req, res) => {
  const user = req.cookies.user;
  if (user) {
    res.send({message:`Hello, ${user}!`});
  } else {
    res.send({message:'No user cookie found.'});
  }
});

app.get('*', (req, res) => {
    res.send({message:`Hello, ${req.url} is requested!`});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
