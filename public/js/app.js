angular.module('sampleApp', ['satellizer', 'ngRoute', 'appRoutes', 'LoginCtrl', 'UserCtrl', 'AdminCtrl', 'UserService', 'CompanyCtrl','CompanyService', 'TrainingCtrl', 'chart.js']).config(function($authProvider){
    $authProvider.linkedin({
      clientId: '75o7oq8qxk1g5s',
      redirectUri: 'http://localhost:8080/nerds',
      scope: ['r_emailaddress', 'r_basicprofile'],
    });

});

console.log("in app.js file");