//import path to allow joining of file paths
var path = require('path');
//import server controller methods
var question = require('../controllers/questions.js');
var answer = require('../controllers/answers.js');
console.log('routes');
//export routes so others can use these methods
module.exports = function(app) {
  app.get('/', function(req, res) {
    //process.env['APPROOT'] is simply the path of the root directory as defined in server.js, This line sends the main index.html file
    res.sendFile(path.join(process.env['APPROOT'],'client/index.html'))
  })
  //sends to http request to .index method in server conroller
  app.get('/question', function(req, res) {
    question.allQuestions(req, res);
  });
  //sends to http request to .show method in server conroller
  app.get('/question/show/:id', function(req, res) {
    question.showQuestion(req, res);
  });
  //sends to http request to .create method in server conroller
  app.post('/new_question', function(req, res) {
    question.createQuestion(req, res);
  });
  //sends to http request to .create method in server conroller
  app.post('/new_answer', function(req, res) {
    answer.createAnswer(req, res);
  });
  app.get('/answer/:id', function(req, res){
    answer.showAnswers(req, res);
  })
  app.put('/answer/like/:id', function(req,res){
    answer.likeAnswer(req,res);
  })
}
