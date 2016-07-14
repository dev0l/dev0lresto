app.directive('archiveBoxes', [function () {

  return {
    templateUrl: '/directives/archiveBoxes.html',
    controller: ['$scope', function ($scope) {
      $scope.wells = [
        {
          title: 'Something',
          content: 'something something.........'
        },
        {
          title: 'Home',
          content: 'Aliquam finibus purus vitae ipsum aliquam, vitae blandit lectus aliquet. Phasellus dignissim porta placerat. Nulla facilisi.',
          url: '/'
        },
        {
          title: 'Also home',
          content: 'Morbi nibh dui, porttitor vel sagittis vel, porttitor nec dolor. Duis cursus porttitor neque, sagittis scelerisque est commodo quis.',
          url: '/'
        },
      ];

      // make all wells fit on a single row
      $scope.colSize = Math.floor(24 / $scope.wells.length);
    }]
  };
}]);
