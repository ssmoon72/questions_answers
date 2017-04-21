app.controller('editController', ['$scope','$routeParams', '$location',  'objectsFactory', function($scope, $routeParams, $location, objectsFactory){
  console.log('editController')
  console.log($routeParams._id);
  //finds a single user based on friend id, adds to $scope.friend so that the existing info can displayed in the form fields
  var findObject = function(){
    friendsFactory.show($routeParams._id, function(data){
      console.log(data);
      $scope.object = data;
    })
  }
  //invokes findFriend function to find a single user
  findObject();
  //sends id of a user to the friends factory to edit then redirects to all users list
  $scope.update = function(){
    objectFactory.update($routeParams._id, function(returnedData){
      $location.url('/');
    })
  }
}]);
