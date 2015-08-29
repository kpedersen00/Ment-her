angular.module('LoginCtrl', []).controller('LoginController', function($scope, $auth, $window, $http) {
	$http.get('api/users').success(function(data){
		$scope.users = data;
	})
	$scope.isAuthenticated = function() {
	  return $auth.isAuthenticated();
	};

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider).then(function(res){
      	if(res.data.user) {
      		$scope.profile = res.data.user;
      		userId = res.data.user.linkedin_id;
      		console.log('setting user', res.data.user);
      	}
      });
    };

    $scope.logout = function() {
    	$auth.logout();
    	delete $window.localStorage.currentUser;
    	$scope.users = [];
    };

	$scope.createUser = function () {
		console.log('form', $scope.profile);
		if($scope.profile.strong_skills.split) {
			$scope.profile.strong_skills = $scope.profile.strong_skills.split(',');			
		}
		$http.post('api/users', $scope.profile).success(function(data){
			$scope.profile = {};
			$scope.users = data;
			console.log(data);
		})
	}

	$scope.hasUsers = function() {
		console.log('users', $scope.users);
		return $scope.users && $scope.users.length > 0;
	}

	$scope.filterUsers = function(filter) {
		var params = filter.params;
		console.log('params', params);
		$http({url:'api/filter', method: 'GET', params: {'filter': params}}).success(function(data){
			$scope.users = data;
		});
	}

	$scope.getAllUsers = function() {
		$http.get('api/users').success(function(data){
			$scope.users = data;
			$('#searchBox').val('');
		});
	}

	$scope.updateProfile = function() {
		console.log('updating!!')
		$scope.users = [];
	}

	$scope.deleteUsers = function() {
		console.log('updating!!')
		$http({url: 'api/deleteUser', method: 'POST'}).success(function(ards){
			console.log('hey! deleted', ards);
		});
	}

	$scope.isFemale = function(gender) {
		return gender === 'FEMALE';
	}
	$scope.isMale = function(gender) {
		return gender === 'MALE';
	}


});