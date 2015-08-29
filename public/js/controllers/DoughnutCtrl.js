angular.module('sampleApp', ['chart.js']);

angular.module('DoughnutCtrl', []).controller('DoughnutController', function($scope) {

  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];

});

console.log("in the doughnut controller");