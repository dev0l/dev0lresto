app.directive('myBookmarks', [function () {

  return {
    templateUrl: '/directives/myBookmarks.html',
    controller: ['$scope', function ($scope, $log) {

      // thumbnails
      // $(document).ready(function () { });

      var myApp = angular.module('myApp', []);
      myApp.filter('range', function () {
        return function (input, total) {
          total = parseInt(total);
          for (var i = 0; i < total; i++)
            input.push(i);
          return input;
        };
      });

  $scope.totalItems = 64;
  $scope.currentPage = 4;

  $scope.totalItems = 64;
  $scope.currentPage = 4;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
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