const express = require('express');
const logger = require('morgan');
const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.set('port', process.env.PORT || 3000);

/**
 * Set routing for REST API
 */
routes(app);

app.listen(app.get('port'), () => {
    console.info(`[mgrnewsapi] Server has started and is listening on port ${app.get('port')}`);
});
