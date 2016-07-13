app.directive('appSidebar', [function () {

  return {
    templateUrl: '/directives/appSidebar.html',
    controller: ['$scope', '$interval', function ($scope, $interval) {

      // Sign In
      // http://mherman.org/blog/2015/07/02/handling-user-authentication-with-the-mean-stack/#.V3fkmLiLSUk

      // TEMP!
      $scope.currentProfile = [
        {
          userName: "dev0l",
          name: "Marcus Mobark",
          pic: "../images/profile/avatar/skull.png"
        },
      ];

      // Links
      $scope.links = [
        {
          url: '/toDo',
          title: 'Tasks'
        },
        {
          url: '/myAccounts',
          title: 'Accounts'
        },
        {
          url: '/myBookmarks',
          title: 'Bookmarks'
        },
        {
          url: '/myFavourites',
          title: 'Favourites'
        },
        {
          url: '/myInfo',
          title: 'Me'
        }
      ];

      // Current Time
      function currentTime() {
        $scope.currentTime = new Date();
      }
      currentTime();
      // update currentTime every 1 second
      // if we don't use angulars $interval
      // $scope wont realize that there is an updated value!
      $interval(currentTime, 1000);

    }]
  };
}]);