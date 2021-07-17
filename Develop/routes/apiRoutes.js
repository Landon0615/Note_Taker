const fs = require('fs');
const express = require('express');

const notesArr = require('../db/db.json');
const router = express.Router();



    let addNote = notesArr.length;
    router.route('/api/notes')
    .get((req, res) => {
        res.json(notesArr);
    })

    .post((req, res) => {
        let id = '' + addNote;
        let noteSaved = req.body;
        

        noteSaved.id = id;
        addNote = addNote + 1;
        
        notesArr.push(noteSaved);

        fs.writeFile('./db/db.json', JSON.stringify(notesArr), () => {
            console.log('Note saved.');});

        res.json(noteSaved);
    })


    router.delete('/api/notes/:id', (req, res) => {

        let picked = req.params.id;
        for (let i = 0; i < notesArr.length; i++) {
            if (picked === notesArr[i].id) {
                notesArr.splice(i, 1);
                fs.writeFile('./db/db.json', JSON.stringify(notesArr), () => {
                    console.log('Note deleted.');});
            };
        };

        res.json(notesArr);
    });

module.exports = router;