//import mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema
console.log('Questions model');
//set up blueprint for db
var questionSchema = new mongoose.Schema({
    question: {type: String, required: true, minlength: 10},
    description: {type: String},
    user: {type: String},
    answer_count: {type: Number, default: 0},
    answer: {type: Schema.Types.ObjectId, ref: 'Answer'}
}, {timestamps: true}
);

//get schema
var Question = mongoose.model('Question', questionSchema);
