const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    mid: Number,
    name: String,
    director_name: String,
    production_house: String,    
    release_date: String,
    rating: Number
});

module.exports = mongoose.model('Movies', movieSchema);