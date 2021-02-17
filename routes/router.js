const express = require('express')
const fetch = require('node-fetch')
const router = express.Router()

// @desc    Home
// @route   GET /

const url = 'https://newsapi.org/v2/top-headlines?country=us&sortBy=date&apiKey=' + process.env.KEY
const settings = { method: "Get" }

router.get('/', async (req, res) => {
    fetch(url, settings)
    	.then(r => r.json())
    	.then(json => {
    		let articles = json.articles
    		console.log(articles[0])
    		res.render('pages/home', {articles})
    	})
})

module.exports = router