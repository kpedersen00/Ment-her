angular.module('ProfileCtrl', []).controller('ProfileController', function($scope, $http, $auth) {
	$http.get('/api/profile').success(function (data) {
		$scope.users = [];
		console.log('got profile', data);
		$scope.profile = data;
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

	$scope.createUser = function () {
		if($scope.profile.strong_skills.split) {
			$scope.profile.strong_skills = $scope.profile.strong_skills.split(',');			
		}
		$http.post('api/users', $scope.profile).success(function(data){
			alert('Updated!');
			$scope.profile = data.newUser;
			$scope.users = data;
		});
	}

});