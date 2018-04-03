const express = require('express')
const hbs = require('express-handlebars')

const recipes = require('./config/recipes.js')

const app = express()
const parser = require('body-parser')
const methodOverride = require('method-override')

app.set('view engine', 'hbs')

app.engine(
    '.hbs',
    hbs({
        extname: '.hbs',
        partialsDir: 'views/',
        layoutsDir: 'views/',
        defaultLayout: 'layout-main'
    })
)

app.use(parser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/assets', express.static('public'))

app.use('/recipes', recipes)

app.get('/', (req, res) => {
    res.render('./welcome')
})

app.post("/", (req, res) => {
    console.log('I\'m here!')
    res.json(req.body)
})

app.listen(4000, () => {
    console.log('It\'s Lit 🔥🔥🔥')
})