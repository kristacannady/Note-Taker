const router = require('express').Router();
const { notes } = require('../db/db.json');
const fs = require('fs');
const path = require('path');

// This is the function to add notes
function createNewNote(body, dbArray) {
  const notes = body;
  dbArray.push(notes);
  // write the file 
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: dbArray }, null, 2)
  )
  return notes;
}

// get current notes 
router.get('/api/notes', (req, res) => {
  res.json(notes);
});

// post reqest to send notes 
router.post('/api/notes', (req, res) => {
  req.body.id = notes.length.toString();

  const note = createNewNote(req.body, notes)
  res.json(note);
  
})

module.exports = router;