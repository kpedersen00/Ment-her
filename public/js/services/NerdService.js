angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {
	return {
		get: function() {
			return $http.get('/api/users');
		},
        create : function(nerdData) {
            return $http.post('/api/users', nerdData);
        }
	}

}]);