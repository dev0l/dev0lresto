app.directive('myFavourites', [function () {

  return {
    templateUrl: '/directives/myFavourites.html',
    controller: ['$scope', function ($scope) {

      $scope.series = [
        {
          title: 'Steven Universe',
          url: "http://kisscartoon.me/Cartoon/Steven-Universe",
          img: "#"
        },
        {
          title: 'Naked And Afraid',
          url: "#",
          img: "#"
        },
        {
          title: "The Last Man On Earth",
          url: "#",
          img: "#"
        },
        {
          title: 'Brooklyn Nine Nine',
          url: "#",
          img: "#"
        },
      ]

    }]
  };
}]);