angular.module('LoginCtrl', []).controller('LoginController', function($scope, $auth, $window) {
	$scope.isAuthenticated = function() {
	  console.log('isAuthenticated?', $auth.isAuthenticated());
	  return $auth.isAuthenticated();
	};

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider).then(function(res){
      	if(res.data.user) {
      		$scope.profile = res.data.user;
      		console.log('setting user', res.data.user);
      	}
      });
    };

    $scope.logout = function() {
    	$auth.logout();
    	delete $window.localStorage.currentUser;
    }
});