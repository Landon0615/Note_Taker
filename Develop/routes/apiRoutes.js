const express = require('express');
const fs = require('fs');

const router = express.Router();

let noteData = require("../db/db.json")

    router.get("/api/notes", (req, res)=>{
      return res.json(noteData)
    })

module.exports = router;




// router.get("/api/newNote", function(req, res) {
//   connection.query("SELECT * FROM notes", function(err, dbnewNote) {
//     if (err) throw err;

//     res.json(dbnewNote);
//   });
// });

// router.post("/api/newNote", function(req, res) {
//   connection.query("INSERT INTO notes SET ?", [req.body], function(err, result) {
//     if (err) throw err;

//     res.json(result);
//   });
// });

// router.put("/api/newNote/:id", function(req, res) {
//   connection.query("UPDATE notes SET ? WHERE id = ?", [req.body, req.params.id], function(err, result) {
//     if (err) throw err;

//     res.json(result);
//   });
// });

// module.exports = router;