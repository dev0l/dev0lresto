// declare our angular app
// and it's dependencies
var app = angular.module("myApp", [
  'ngRoute',
  'ngResource',
  'ngTouch',
  'ui.bootstrap'
]);

app.config(["$locationProvider", "$routeProvider", function ($locationProvider, $routeProvider) {

  $routeProvider
    .when("/", {
      templateUrl: "/templates/home.html"
    })
    .when("/theArchives", {
      templateUrl: "/templates/archive.html"
    })
    .when("/temp", {
      templateUrl: "/templates/temp.html"
    })
    .when("/signUp", {
      templateUrl: "/templates/signUp.html"
    })
    .when("/toDo", {
      templateUrl: "/templates/ToDo.html"
    })
    .when("/myAccounts", {
      templateUrl: "/templates/accounts.html"
    })
    .when("/myBookmarks", {
      templateUrl: "/templates/bookmarks.html"
    })
    .when("/myFavourites", {
      templateUrl: "/templates/favourites.html"
    })
    .otherwise({
      templateUrl: "/templates/404.html"
    });

  $locationProvider.html5Mode(true);
}]);