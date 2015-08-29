angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'
		});

	$locationProvider.html5Mode(true);

}]);

$authProvider.httpInterceptor = true;
$authProvider.withCredentials = true;
$authProvider.tokenRoot = null;
$authProvider.cordova = false;
$authProvider.baseUrl = '/';
$authProvider.loginUrl = '/auth/login';
$authProvider.signupUrl = '/auth/signup';
$authProvider.unlinkUrl = '/auth/unlink/';
$authProvider.tokenName = 'token';
$authProvider.tokenPrefix = 'satellizer';
$authProvider.authHeader = 'Authorization';
$authProvider.authToken = 'Bearer';
$authProvider.storageType = 'localStorage';

// LinkedIn
$authProvider.linkedin({
  url: '/auth/linkedin',
  authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
  redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
  requiredUrlParams: ['state'],
  scope: ['r_emailaddress'],
  scopeDelimiter: ' ',
  state: 'STATE',
  type: '2.0',
  popupOptions: { width: 527, height: 582 }
});