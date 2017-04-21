console.log('objects factory active');
app.factory('objectsFactory', ['$http', function($http){
  var factory = {}
  var questions = [];
  var question = {};
  var answers = [];
  var answer = {};
  factory.user = ""
  factory.login = function(name, callback) {
    factory.user = name;
    callback(factory.user);
  }
  factory.allQuestions = function(callback){
    //update or set friends variable to send to controllers for displaying
    $http.get('/question').then(function(returned_data){
      console.log(returned_data.data);
      questions = returned_data.data;
      callback(questions);
    });
  }
  //take the id of a single user and retrieve details of that user from the database and send it back to the showController
  factory.showQuestion = function(id, callback){
    console.log(id)
    $http.get('/question/show/'+ id).then(function(returned_data){
      console.log(returned_data.data);
      //set empty friend object to the json data returned from server then use the friend object in the function passed to this method
      question = returned_data.data
      callback(question);
    });
  }
  //send object created from form data to the database to create a new entry, then return an updated list of all friends
  factory.createQuestion = function(newobject, callback){
    console.log(newobject, 'object passed to factory to create');
    $http.post('/new_question', newobject).then(function(returned_data){
      console.log(returned_data.data.name);
      if(returned_data.data.name == 'ValidationError'){
        callback(returned_data)
      }
      //set friend object to returned data
      question = returned_data.data;
      //push friend object to friends array containing all users
      questions.push(question);
      //run function passed to this method with friends array as parameter
      callback(questions);
    });
  }
  //send object created from form data to the database to create a new entry, then return an updated list of all friends
  factory.createAnswer = function(newobject, callback){
    console.log(newobject, 'object passed to factory to create');
    $http.post('/new_answer', newobject).then(function(returned_data){
      console.log(returned_data.data);
      //set friend object to returned data
      answer = returned_data.data;
      //push friend object to friends array containing all users
      answers.push(answer);
      //run function passed to this method with friends array as parameter
      console.log(answers,'answers array')
      callback(answers);
    });
  }
  factory.showAnswers = function(id, callback){
    console.log(id)
    $http.get('/answer/' + id).then(function(data){
      console.log(data.data, 'show answer data')
      callback(data.data);
    })
  }
  factory.likeAnswer = function(id,callback){
    console.log(id);
    $http.put('/answer/like/' + id).then(function(data){
      callback(data.data);
    })
  }
  return factory;
}])
