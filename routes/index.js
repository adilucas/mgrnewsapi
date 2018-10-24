const cors = require('./cors');
const headlines = require('./headlines');
const pagestructure = require('./pagestructure');

module.exports = (app) => {
    /** CORS headers */
    app.use(cors);
    /** Routes */
    app.use('/headlines', headlines);
    app.use('/pagestructure', pagestructure);
};
