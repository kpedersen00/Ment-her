angular.module('sampleApp', ['satellizer', 'ngRoute', 'appRoutes', 'LoginCtrl', 'UserCtrl', 'UserService', 'CompanyCtrl','CompanyService', 'TrainingCtrl', 'ProfileCtrl', 'AboutUsCtrl']).config(function($authProvider){
    $authProvider.linkedin({
      clientId: '75o7oq8qxk1g5s',
      redirectUri: 'http://menther-50755.onmodulus.net/nerds',
      scope: ['r_emailaddress', 'r_basicprofile'],
    });
});
