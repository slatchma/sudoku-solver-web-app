const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const solverRouter = require('./routes/routeSolver');
const HttpError = require('./utils/class-httpError');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/api', solverRouter);

/**
 * throws an error when the route is unknown
 */
app.use((req, res, next) => {
    throw new HttpError('Could not find this route', 404);
});

/**
 * manage error, display code and message error
 */
app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    };
    res.status(error.code || 500);
    res.json({message: error.message || 'an unknown error occured'});
})

app.listen(process.env.PORT, () => console.log(`app started on port ${process.env.PORT}`));