const { Router } = require('express');
const NewsApiProvider = require('../class/NewsApiProvider');

const routes = Router();

/**
 * GET /headlines/{category}
 */
routes.get('/:category?', async (req, res, next) => {
    let limit = 20;
    const newsApi = new NewsApiProvider();

    if (req.params && req.params.limit) {
        limit = req.params.limit;
    }
    
    let result = await newsApi.getTopList(req.params.category, req.query.limit);
    res.json(result);
});

module.exports = routes;
