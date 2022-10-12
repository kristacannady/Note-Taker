// require express at top
const express = require('express');

// Port for our server to be on in heroku
const PORT = process.env.PORT || 3001;

// initiates the server/invokes express
const app = express();


// Makes the server listen to us - keep at the end
app.listen(3001, () => {
    console.log(`API server now on http://localhost:${PORT}`);
  });