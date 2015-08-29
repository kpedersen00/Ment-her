angular.module('UserCtrl', []).controller('UserController', function($scope, $http) {
	$scope.$on('someEvent', function(event, args) {
		console.log('args', args);
	});

	$http.get('/api/users').success(function (data) {
		$scope.users = data;
	});

	// $http.get('/api/admin').success(function (data){
	// 	$scope.users = data;
	// });

	$scope.createUser = function () {
		$http.post('api/users', $scope.formData).success(function(data){
			$scope.profile = {};
			$scope.users = data;
			console.log(data);
		});
	}

	$scope.updateProfile = function() {
		console.log('updating!!')
		$scope.users = [];
	}

	$scope.adminProfile = function() {

		console.log('admin profile is happening!')
		// $scope.users = [];
	}

});