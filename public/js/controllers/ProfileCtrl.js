angular.module('ProfileCtrl', []).controller('ProfileController', function($scope, $http, $auth) {
	$http.get('/api/users').success(function (data) {
		$scope.users = data;
	});

	$scope.isAuthenticated = function() {
	  return $auth.isAuthenticated();
	};

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

});