const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// Get all feedback
// router.get('/', (req, res) => {
//   let queryText = 'SELECT title, author FROM "books" ORDER BY "title";';
//   pool.query(queryText).then(result => {
//     // Sends back the results in an object
//     res.send(result.rows);
//   })
//   .catch(error => {
//     console.log('error getting books', error);
//     res.sendStatus(500);
//   });
// });

// Adds new feedback submission to database
router.post('/',  (req, res) => {
  let newFeedback = req.body;
  console.log(`Added new feedback`, newFeedback);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                   VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [newFeedback.feelingScore, newFeedback.understandScore, newFeedback.supportScore, newFeedback.comments])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new feedback`, error);
      res.sendStatus(500);
    });
});

module.exports = router;