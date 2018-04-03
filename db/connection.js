const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/recipes', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
