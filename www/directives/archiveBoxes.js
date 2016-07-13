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
        // {
        //   title: 'Well 4',
        //   content: 'Pellentesque a bibendum nisi. In dignissim est tortor, vitae iaculis nunc gravida et. Mauris venenatis libero eget risus sollicitudin euismod ut sed mi.'
        // },
        // {
        //   title: 'Well 5',
        //   content: 'Pellentesque a bibendum nisi. In dignissim est tortor, vitae iaculis nunc gravida et. Mauris venenatis libero eget risus sollicitudin euismod ut sed mi.'
        // }
      ];

      // make all wells fit on a single row
      $scope.colSize = Math.floor(24 / $scope.wells.length);
    }]
  };
}]);