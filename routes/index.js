const cors = require('./cors');
const headlines = require('./headlines');

module.exports = (app) => {
    /** CORS headers */
    app.use(cors);
    /** Routes */
    app.use('/headlines', headlines);
};
