angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/users', {
			templateUrl: 'views/user.html',
			controller: 'UserController'
		})

		.when('/companies', {
			templateUrl: 'views/company.html',
			controller: 'CompanyController'
		});

	$locationProvider.html5Mode(true);

}]);