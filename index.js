const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const session = require('express-session')
const https = require('https')
const router = express.Router()

dotenv.config({path: './config/config.env'})

const app = express()

// Logging
if (process.env.NODE_ENV == 'development') {
   app.use(morgan('dev'))
}

// Handlebar helpers
const {formatDate} = require('./helpers/hbs')

// Handlebars
app.engine('.hbs', exphbs({ helpers: {formatDate}, defaultLayout: 'main', partialsDir: path.join(__dirname, 'views/partials'), extname: '.hbs'}))
app.set('view engine', '.hbs')

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', require('./routes/router'))
app.use((req, res, next) => {
    res.status(404)
    res.render('errors/404')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))