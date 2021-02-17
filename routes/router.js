const express = require('express')
const fetch = require('node-fetch')
const router = express.Router()

// @desc    Home
// @route   GET /

const url = 'https://newsapi.org/v2/top-headlines?country=us&sortBy=date&apiKey=f9373d8d7bbb419c8cc4c53d3ff89cd2'
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