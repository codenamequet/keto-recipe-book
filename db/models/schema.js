const mongoose = require('../connection')

const RecipeSchema = new mongoose.Schema({
    name: String,
    category: String,
    cookTime: String,
    instruction: String,
    image: String,
    ingredients: [String]
})

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe
