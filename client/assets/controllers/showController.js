app.controller('showController', ['$scope', '$routeParams', 'objectsFactory', function($scope, $routeParams, objectsFactory){
  console.log('showController');
  console.log($routeParams._id);
  //finds a single friend by passing the id through the url to the factory, returns the object and adds to $scope.friend
  var showQuestion = function(){
    objectsFactory.showQuestion($routeParams._id, function(data){
      console.log(data);
      $scope.question = data;
    })
  }
  //invokes findFriend method to find a single user and display details
  showQuestion();
var showAnswers = function(){
  objectsFactory.showAnswers($routeParams._id, function(data){
    $scope.answers = data;
    console.log($scope.answers,'scope.answers')
  })
}
showAnswers();

$scope.likeAnswer = function(id){
  console.log()
  objectsFactory.likeAnswer(id, function(data){
    $scope.answers = data;
  })
  showAnswers();
}

}])
