//actual database manipulation occurs here. instantiate mongoose variable and friends collection in mongodb
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
console.log('Question server controller');
//export this file so others may call upon these functions
module.exports = {
  //retrieves all friends from database and returns as json object
  allQuestions: function(req,res){
    Question.find({}, function(err,questions){
      if (err){
        console.log('error finding questions');
      }
      else{
        res.json(questions);
      }
    })
  },
  //receive http request from friendsFactory and create a new entry in database with information retrieved from the request body, returns json object
  createQuestion: function(req,res){
    console.log(req.body);
    Question.create(req.body, function(err, result){
      if (err){
        console.log('error creating new question');
        res.json(err);
      }
      else {
        console.log('added new question')
        res.json(result);
      }
    })
  },
  //finds the question with id matching req.params.id and returns info via json object
  showQuestion: function(req,res){
    console.log(req.params.id)
    Question.findOne({_id: req.params.id}, function(err, question){
      console.log(question);
      res.json(question);
    })
  }
}
