const { Router } = require('express');
const rp = require('request-promise');
const personalizationConfig = require('../config/personalization.json');

const routes = Router();

/**
 * GET /pagestructure/:userId
 */
routes.get('/:userId', async (req, res, next) => {
    const { userId } = req.params;

    let result = await rp(`${personalizationConfig.host}/api/userid/${userId}`);
    result = JSON.parse(result);
    
    if (result && result.category) {
        return res.status(200).json({ best: result.category });
    } else {
        return res.status(200).json({ best: 'general' });
    }

});

module.exports = routes;
