const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: { type: String, lowercase: true, trim: true, required: true },
    age: Number,
    email: String,
    favoriteFoods: [String],
    createdOn: { type: Date, default: Date.now },
})

module.exports = Person = mongoose.model('person', personSchema)   