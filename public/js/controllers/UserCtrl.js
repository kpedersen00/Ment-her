angular.module('UserCtrl', []).controller('UserController', function($scope, $http) {
	$scope.$on('someEvent', function(event, args) {
		console.log('args', args);
	});

	$http.get('/api/users').success(function (data) {
		$scope.users = data;
	});

	$scope.createUser = function () {
		$http.post('api/users', $scope.formData).success(function(data){
			$scope.formData = {};
			$scope.users = data;
			console.log(data);
		})
	}
});