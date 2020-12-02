const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');

require('dotenv').config();
const isProduction = process.env.NODE_ENV === 'production'; // process.env will be used by heroku to provide configs and NODE_ENV will be set to production there.
const history = require('connect-history-api-fallback');

const indexRouter = require('./routes/index');
const businessRouter = require('./routes/business');
const metricsRouter = require('./routes/metrics');
const accountRouter = require('./routes/account');



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// server html+css+js frontend
app.use(history());
app.use(express.static(path.join(__dirname, isProduction ? 'dist' : 'public'))); // in Heroku we want dist but for dev we want public so we don't have to rebuild everytime we change something.

app.use(session({
    secret : "6170", 
    resave : true,
    saveUninitialized : true
}))
app.use('/', indexRouter);
app.use('/api/business', businessRouter);
app.use('/api/metrics', metricsRouter);
app.use('/api/account', accountRouter);

app.use('*', (req, res) => {
    res.status(404).json({
        error: `Welcome to Scope! Sorry you got an invalid URL. Please use the appropriate api calls for this project.`,
        }).end();
});


module.exports = app;
