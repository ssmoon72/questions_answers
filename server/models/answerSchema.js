//import mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema
console.log('Answers model');
//set up blueprint for db
var answerSchema = new mongoose.Schema({
    answer: {type: String, required: true, minlength: 5},
    details: {type: String},
    user: {type: String},
    like_count: {type: Number, default: 0},
    _question: {type: Schema.Types.ObjectId, ref: 'Question'}
}, {timestamps: true}
);

//get schema
var Answer = mongoose.model('Answer', answerSchema);
