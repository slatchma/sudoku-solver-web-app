const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({message: 'message of API'});
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    res.json({test: 'solver'});
});

module.exports = router;
