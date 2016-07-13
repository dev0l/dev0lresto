app.directive('myContent', [function(){

  return {
    templateUrl: '/directives/myContent.html',
    controller: ['$scope', 'Profiles', function ($scope, Profiles) {

    }]
  };
}]);