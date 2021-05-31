const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  movie_id: {
    type: Schema.Types.ObjectId,
    require: true
  }
})

const realComments = model('comments', commentSchema);

module.exports = realComments;