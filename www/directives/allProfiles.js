app.directive('allProfiles', [function(){

  return {
    templateUrl: '/directives/allProfiles.html',
    controller: ['$scope', 'Profiles', function ($scope, Profiles) {

      $scope.profile = Profiles.get();

			// create img-url for dropdownmenu
			$scope.imgUrls = [];
			var avatars = [], profilePics = [];

			(function (){
				for (var i = 0; i < 8; i++){
					avatars.push("/images/profile/avatar/pic" + (i+1) + ".png"); // .jpg ??
					profilePics.push("/images/profile/usrImg/pic" + (i+1) + ".jpg");
				}
			})();

			//update dropdownmenu to apartment/house urls
			$scope.update = function (){
				if ($scope.newProf.avatar === "Avatar") {
					$scope.imgUrls = avatars;
				}
				else if ($scope.newProf.pic === "Image") {
					$scope.imgUrls = profilePics;
				}
				console.log($scope.imgUrls)
			}

      //TEMP Not Used????
      // $scope.wells = $scope.myInterval = 5000;

      // $scope.colSize = Math.floor(24/$scope.wells.length);
    }]
  };
}]);