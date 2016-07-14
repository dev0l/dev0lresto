app.directive('temps', [function () {

  return {
    templateUrl: '/directives/temps.html',
    controller: ['$scope', '$log', function ($scope, $log) {

      // $log is currently not used...i think...??

      $scope.totalItems = 64;
      $scope.currentPage = 4;

      $scope.totalItems = 64;
      $scope.currentPage = 4;

      $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
      };

      $scope.pageChanged = function () {
        $log.log('Page changed to: ' + $scope.currentPage);
      };

      $scope.maxSize = 5;
      $scope.bigTotalItems = 175;
      $scope.bigCurrentPage = 1;

      function Main($scope) {
      }

    }]
  };
}]);