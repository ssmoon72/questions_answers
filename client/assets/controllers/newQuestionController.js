//initializing the controller that takes care of new friend creation
app.controller('newQuestionController', ['$scope', '$routeParams', 'objectsFactory', '$location', function($scope, $routeParams, objectsFactory, $location){
  console.log('newQuestionController')
  //method that grabs all friends from the factory
  $scope.user = objectsFactory.user;
  var allQuestions = function(){
    //sends a callback to friendsFactory.index that puts all friends in $scope.friends
    objectsFactory.allQuestions(function(data){
      console.log(data);
      $scope.questions = data;
    })
  }
  //invoking index function to populate $scope.friends and display friends
  console.log('index funciton invocation newObjectController')
  //sends form data contained in $scope.friend to friendsFactory
  //returns and adds created friend to $scope.friends
  $scope.createQuestion = function(){
    $scope.newQuestion.user = $scope.user.name
    console.log($scope.newQuestion.user.name, 'user submitted question')
    console.log($scope.newQuestion, 'Submitted Form');
    objectsFactory.createQuestion($scope.newQuestion, function(data){
      console.log(data.errors);
      if(data.errors){
        $location.url('/new_question')
      }
      $scope.question = data;
      $location.url('/question');
    });
  }
}]);
