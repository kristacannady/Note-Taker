// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

const PORT = process.env.PORT || 3001;

// constants for the route pages
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

// allows express to handle data as JSON
app.use(express.urlencoded({ extended: true }));
// allows us to interact with data in JSON format
app.use(express.json());
// any stuff that is static, use the public folder
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Makes the server listen to us - keep at the end
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});