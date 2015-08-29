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

		.when('/profile', {
			templateUrl: 'views/home.html',
			controller: 'ProfileController'
		})

		.when('/about-us', {
			templateUrl: 'views/aboutUs.html',
			controller: 'AboutUsController'
		})

		.when('/training', {
			templateUrl: 'views/training.html',
			controller: 'TrainingController'
		})

		.when('/admin', {
			templateUrl: 'views/admin.html',
			controller: 'AdminController'
		});

	$locationProvider.html5Mode(true);

}]);