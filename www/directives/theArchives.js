app.directive('theArchives', [function () {

  return {
    templateUrl: '/directives/theArchives.html',
    controller: ['$scope', 'Archives', function ($scope, Archives) {

      //create new Archives when form is submitted
      $scope.submitArchive = function () {
        Archives.create($scope.newArch);
        console.log($scope.newArch, "created")
        $scope.newArch = null;
      }

      $scope.addImg = function () {

      }

    }]
  };
}]);