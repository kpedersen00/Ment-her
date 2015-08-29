angular.module('myModule', ['chart.js']);

angular.module('AdminCtrl', []).controller('AdminController', function($scope, $http) {

  $scope.onboard = [{
    header: 'Step 1',
    title: 'Pic 1'
  }, {
    header: 'Step 2',
    title: 'Pic 2'
  }, {
    header: 'Step 3',
    title: 'Pic 3'
  }, {
    header: 'Step 4',
    title: 'Pic 4'
  }, {
    header: 'Step 5',
    title: 'Pic 5'
  }];


});