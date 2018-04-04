const express = require('express')
const Recipe = require('../db/models/schema.js')
const router = express.Router()

router.get('/', (req, res) => {
     Recipe.find({})
         .then(recipes => {
             res.render('recipe-index', { recipes: recipes })
         })
         .catch(err => {
             console.log(err)
            console.log('not working')
         })
})

// router.get('/', (req, res) => {
//     res.render('recipe-index')
// })

router.get('/add-recipe', (req, res) => {
    res.render('add-recipe')
})

router.get('/about-keto', (req, res) => {
    res.render('about-keto')
})

router.get('/:name', (req, res) => {
    Recipe.findOne({ name: req.params.name })
        .then(recipe => {
            res.render('single-recipe', { recipe: recipe })
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/add-recipe', (req, res) => {
//     console.log('I\'m in the router')
    Recipe.create(req.body.recipe)
        .then(recipe => {
            res.redirect(`/recipes/${recipe.name}`)
        })
        .catch(err => {
            console.log(err)
        })
})

router.put('/:name', (req, res) => {
    console.log(req.body.recipe.ingredients.split(','))
    req.body.recipe.ingredients.split(',')
    Recipe.findOneAndUpdate({ name: req.params.name }, req.body.recipe, {
        new: true
    })
        .then(recipe => {
            res.redirect(`/recipes/${recipe.name}`)
        })
        .catch(err => {
            console.log(err)
        })
})

router.delete('/:name', (req, res) => {
    Recipe.findOne({ name: req.params.name })
        .remove()
        .then(() => {
            res.redirect(`/recipes`)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router
