const express = require('express');
const HttpError = require('../utils/class-httpError');
const checkGrid = require("../utils/checkGrid");
const solver = require('../utils/solver');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({message: 'message of API'});
});

router.post('/', (req, res, next) => {
    let sudokuGrid = [];

    if (req.body.sudoku) {
        if (checkGrid(req.body.sudoku)) {
            sudokuGrid = req.body.sudoku;
            solver(sudokuGrid, 0);
            res.json({ sudokuSolved: sudokuGrid })
        } else {
            throw new HttpError('not a grid valid', 500)
        }

    }
    else {
        throw new HttpError('grid not found', 500)
    }
});

module.exports = router;
