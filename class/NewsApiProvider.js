const rp = require('request-promise');
const config = require('../config/newsapi.json');

class NewsApiProvider {
    
    constructor () {
        this.API_KEY = config.api_key;
    }

    async getTopList (category, limit) {
        let url = `${config.hostname}/top-headlines?country=us&apiKey=${this.API_KEY}`;

        if (category) url += `&category=${category}`;
        if (limit) url += `&pageSize=${limit}`;

        let result = await rp(url);

        result = JSON.parse(result);
        
        if (result && result.articles && result.articles.length) {
            result.articles = result.articles.filter((el) => {
                return el.title && el.description && el.url && el.urlToImage && el.publishedAt;
            });

            return result;
        } else {
            return {
                status: 0,
                articles: []
            };
        }
    }
}

module.exports = NewsApiProvider;
