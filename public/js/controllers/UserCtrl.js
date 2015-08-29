angular.module('UserCtrl', []).controller('UserController', function($scope, $http, $auth) {
	$http.get('/api/users').success(function (data) {
		$scope.users = data;
	});

<<<<<<< HEAD
	// $http.get('/api/admin').success(function (data){
	// 	$scope.users = data;
	// });
=======
	$scope.isAuthenticated = function() {
	  return $auth.isAuthenticated();
	};
>>>>>>> eabbe8b27990966384854d910247ea987b9ccbea

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

<<<<<<< HEAD
	$scope.adminProfile = function() {

		console.log('admin profile is happening!')
		// $scope.users = [];
	}
=======
    $scope.logout = function() {
    	$auth.logout();
    	delete $window.localStorage.currentUser;
    	$scope.users = [];
    }
>>>>>>> eabbe8b27990966384854d910247ea987b9ccbea

});