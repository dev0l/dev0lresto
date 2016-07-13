app.directive('signUpForm', [function () {

  return {
    templateUrl: '/directives/signUpForm.html',
    controller: ['$scope', '$location', '$resource', '$routeParams', 'Profiles', function ($scope, $location, $resource, $routeParams, Profiles) {

      //create new Profiles when form is submitted
      $scope.submitProfile = function () {
        Profiles.create($scope.newProf);
        console.log($scope.newProf, "created")
        $scope.newProf = null;
      }

    }]
  };
}]);



// FILE UPLOAD EXAMPLE!!

// <script>
//    var myApp = angular.module('myApp', []);

//    myApp.directive('fileModel', ['$parse', function ($parse) {
//       return {
//          restrict: 'A',
//          link: function(scope, element, attrs) {
//             var model = $parse(attrs.fileModel);
//             var modelSetter = model.assign;

//             element.bind('change', function(){
//                scope.$apply(function(){
//                   modelSetter(scope, element[0].files[0]);
//                });
//             });
//          }
//       };
//    }]);

//    myApp.service('fileUpload', ['$http', function ($http) {
//       this.uploadFileToUrl = function(file, uploadUrl){
//          var fd = new FormData();
//          fd.append('file', file);

//          $http.post(uploadUrl, fd, {
//             transformRequest: angular.identity,
//             headers: {'Content-Type': undefined}
//          })

//          .success(function(){
//          })

//          .error(function(){
//          });
//       }
//    }]);

//    myApp.controller('myCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
//       $scope.uploadFile = function(){
//          var file = $scope.myFile;

//          console.log('file is ' );
//          console.dir(file);

//          var uploadUrl = "/fileUpload";
//          fileUpload.uploadFileToUrl(file, uploadUrl);
//       };
//    }]);

// </script>