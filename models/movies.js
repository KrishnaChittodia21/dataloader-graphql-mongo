const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  rated: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    require: true
  }
})

const realMovies = model('movies', movieSchema);

module.exports = realMovies;