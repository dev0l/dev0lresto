app.directive('sideNav', [function () {

  return {
    templateUrl: '/directives/sideNav.html',
    controller: ['$scope', function ($scope) {

      $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
      });

    }]
  };
}]);