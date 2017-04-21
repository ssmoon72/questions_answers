//This file sets the routes used to determine which partial is displayed for which url
var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'loginController'
    })
    .when('/question', {
      templateUrl: 'partials/questionList.html',
      controller: 'indexController'
    })
    .when('/new_question',{
      templateUrl: 'partials/new_question.html',
      controller: 'newQuestionController'
    })
    .when('/question/show/:_id', {
      templateUrl: 'partials/showOne.html',
      controller: 'showController'
    })
    .when('/question/:_id/new_answer',{
      templateUrl: 'partials/new_answer.html',
      controller: 'newAnswerController'
    })
    .otherwise('/')
});
