app.controller('loginController', function($scope, objectsFactory, $location) {

	$scope.login = function() {
		objectsFactory.login($scope.user, function(data){
			console.log(data.name.length);
      if(data.name.length < 3){
        $location.url('/');
      }
			$location.url('/question');
		});
	}
})
