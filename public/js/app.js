angular.module('sampleApp', ['satellizer', 'ngRoute', 'appRoutes', 'LoginCtrl', 'UserCtrl', 'UserService', 'CompanyCtrl','CompanyService', 'TrainingCtrl', 'ProfileCtrl', 'ui.bootstrap']).config(function($authProvider){
    $authProvider.linkedin({
      clientId: '75o7oq8qxk1g5s',
      redirectUri: 'http://localhost:8080/nerds',
      scope: ['r_emailaddress', 'r_basicprofile'],
    });
});
