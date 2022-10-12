/// set up
const path = require('path');
const router = require('express').Router();

// root route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // GET /notes should return the notes.html file.
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
  });

//  GET * should return the index.html file.
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

// part of set up
module.exports = router;