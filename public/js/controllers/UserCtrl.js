angular.module('UserCtrl', []).controller('UserController', function($scope, $http) {
	$http.get('/api/users').success(function (data) {
		$scope.users = data;
	});

	$scope.tagline = 'Nothing beats a pocket protector!';

	$scope.createUser = function () {
		$http.post('api/users', $scope.formData).success(function(data){
			$scope.formData = {};
			$scope.users = data;
			console.log(data);
		})
	}
});