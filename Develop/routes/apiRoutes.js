const express = require('express');
const fs = require('fs');

const router = express.Router();

let noteData = require("../db/db.json")

    app.get("/api/notes", (req, res)=>{
      return res.json(noteData)
    })

module.exports = router;