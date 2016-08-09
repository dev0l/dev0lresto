app.directive('myFavourites', [function () {

  return {
    templateUrl: '/directives/myFavourites.html',
    controller: ['$scope', function ($scope) {

      $scope.submitFavourite = function () {
        Favourites.create($scope.newFav);
        console.log($scope.newFav, "created")
        $scope.newFav = null;
      }

      $scope.series = [
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
        {
          title: 'Vice Principals',
          url: "http://watch-series.to/serie/vice_principals",
          img: "#"
        },
        {
          title: 'Workaholics',
          url: "http://watch-series.to/serie/vice_principals",
          img: "#"
        },
        {
          title: 'Mr Robot',
          url: "#",
          img: "#"
        },
        {
          title: 'Stranger things',
          url: "#",
          img: "#"
        },
        {
          title: 'Steven Universe',
          url: "http://kisscartoon.me/Cartoon/Steven-Universe",
          img: "#"
        },
        {
          title: 'South Park',
          url: "#",
          img: "#"
        },
        {
          title: 'Family Guy',
          url: "#",
          img: "#"
        },
        {
          title: 'American Dad',
          url: "#",
          img: "#"
        },
        {
          title: 'Brickleberry',
          url: "#",
          img: "#"
        },
        {
          title: 'Futurama',
          url: "#",
          img: "#"
        },
        {
          title: 'Rick & Morty',
          url: "#",
          img: "#"
        },
        {
          title: 'Archer',
          url: "#",
          img: "#"
        },
      ]

      $scope.websites = [
        {
          title: 'WatchSeries',
          url: "#",
          img: "#"
        },
        {
          title: 'KissCartoon',
          url: "#",
          img: "#"
        },
        {
          title: 'KissAnime',
          url: "#",
          img: "#"
        },
      ]

    }]
  };
}]);