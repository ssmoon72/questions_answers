app.controller('indexController', function($scope, objectsFactory, $location) {
	$scope.user = objectsFactory.user;
	// gets topic to fill table
	var allQuestions = function() {
		objectsFactory.allQuestions(function(data) {
			$scope.questions = data;
		})
	};
	allQuestions();
});
