// require express at top
const express = require('express');

// Port for our server to be on in heroku
const PORT = process.env.PORT || 3001;

// initiates the server/invokes express
const app = express();

//constant for the routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// allows express to handle data as JSON
app.use(express.urlencoded({ extended: true }));
// allows us to interact with data in JSON format
app.use(express.json());
// any stuff that is static, use the public folder
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Makes the server listen to us - keep at the end
app.listen(3001, () => {
    console.log(`API server now on http://localhost:${PORT}`);
  });