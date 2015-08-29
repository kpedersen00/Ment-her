angular.module('sampleApp', ['satellizer','ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'GeekService']);

.config(function($authProvider) {

    $authProvider.linkedin({
      clientId: '75dtrr7fhjol46'
    });

  });