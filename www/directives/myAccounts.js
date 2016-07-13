app.directive('myAccounts', [function () {

  return {
    templateUrl: '/directives/myAccounts.html',
    controller: ['$scope', function ($scope) {
      $scope.submitAccount = function () {
        Accounts.create($scope.newAcc);
        console.log($scope.newAcc, "created")
        $scope.newAcc = null;
      }
      $scope.emails = [
        {
          title: 'G-mail',
          url: "https://accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/&hl=sv#identifier",
          img: "oi50.tinypic.com/29yhzc6.jpg"
        },
        {
          title: 'Hotmail',
          url: "https://login.live.com/login.srf?wa=wsignin1.0&ct=1467853371&rver=6.6.6556.0&wp=MBI_SSL&wreply=https:%2F%2Foutlook.live.com%2Fowa%2F&id=292841&CBCXT=out",
          img: "oi50.tinypic.com/29yhzc6.jpg"
        },
      ],
        $scope.casinos = [
          {
            title: 'Casinostugan',
            url: "www.casinostugan.com",
            img: "#"
          },
          {
            title: 'Dunder',
            url: "www.dunder.com",
            img: "#"
          },
          // {
          //   title: 'G-mail',
          //   url: "https://accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/&hl=sv#identifier",
          //   img: "oi50.tinypic.com/29yhzc6.jpg"
          // },
          // {
          //   title: 'Hotmail',
          //   url: "https://login.live.com/login.srf?wa=wsignin1.0&ct=1467853371&rver=6.6.6556.0&wp=MBI_SSL&wreply=https:%2F%2Foutlook.live.com%2Fowa%2F&id=292841&CBCXT=out"
          // },
        ];
    }]
  };
}]);