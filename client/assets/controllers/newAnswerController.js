//initializing the controller that takes care of new friend creation
app.controller('newAnswerController', ['$scope', '$routeParams', 'objectsFactory', '$location', function($scope, $routeParams, objectsFactory, $location){
  console.log('newAnswerController')
  console.log($routeParams);
  //method that grabs all friends from the factory
  $scope.user = objectsFactory.user;
  //sends form data contained in $scope.friend to friendsFactory
  //returns and adds created friend to $scope.friends
  objectsFactory.showQuestion($routeParams._id, function(data){
    $scope.question = data
  })
  $scope.createAnswer = function(){
    $scope.newAnswer.user = $scope.user.name
    $scope.newAnswer._question = $routeParams._id
    console.log($scope.newAnswer.user.name, 'user submitted question')
    console.log($scope.newAnswer, 'Submitted Form');
    objectsFactory.createAnswer($scope.newAnswer, function(data){
      $scope.answer = data;
      $location.url('/question/show/' + $routeParams._id);
    });
  }
}]);
