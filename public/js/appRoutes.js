angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'LoginController'
		})

		.when('/users', {
			templateUrl: 'views/user.html',
			controller: 'UserController'
		})

		.when('/companies', {
			templateUrl: 'views/company.html',
			controller: 'CompanyController'
		})

		.when('/training', {
			templateUrl: 'views/training.html',
			controller: 'TrainingController'
		});

	$locationProvider.html5Mode(true);

}]);