//actual database manipulation occurs here. instantiate mongoose variable and friends collection in mongodb
var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');
console.log('Answer server controller');
//export this file so others may call upon these functions
module.exports = {
  //retrieves all friends from database and returns as json object
  showAnswers: function(req,res){
    console.log(req.params, 'show answers id');
    Answer.find({ _question: req.params.id}, function(err,answers){
      if (err){
        console.log('error finding answers');
      }
      else{
        res.json(answers);
      }
    })
  },
  //receive http request from friendsFactory and create a new entry in database with information retrieved from the request body, returns json object
  createAnswer: function(req,res){
    console.log(req.body._question,'question id');
    console.log(req.params,'answer id')
    Question.findOneAndUpdate({_id: req.body._question}, {$inc: {answer_count: 1}} , function(err, question){
      console.log(question ,'after update')
      Answer.create(req.body, function(err, result){
          if (err){
            console.log('error creating new answer');
          }
          else {
            console.log('added new answer')
            res.json(result);
          }
        })
    })
  },
  likeAnswer: function(req,res){
    Answer.findOneAndUpdate({_id: req.params.id},{$inc:{like_count: 1}}, function(err, result){
      if(err){
        console.log('error adding like');
      }
      else {
        res.json(result);
      }
    })
  }
}
