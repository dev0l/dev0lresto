app.directive('myAccounts', [function () {

  return {
    templateUrl: '/directives/myAccounts.html',
    controller: ['$scope', function ($scope) {

      $scope.submitAccount = function () {
        Accounts.create($scope.newAcc);
        console.log($scope.newAcc, "created")
        $scope.newAcc = null;
      }

      $scope.social = [
        {
          title: 'https://ssl.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_112x36dp.png',
          url: "https://accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/&hl=sv#identifier",
          img: "https://ssl.gstatic.com/accounts/ui/wlogostrip_230x17_1x.png"
        },
        {
          title: 'https://assets.onestore.ms/cdnfiles/onestorerolling-1607-15000/shell/v3/images/logo/microsoft.png',
          url: "https://login.live.com/login.srf?wa=wsignin1.0&ct=1467853371&rver=6.6.6556.0&wp=MBI_SSL&wreply=https:%2F%2Foutlook.live.com%2Fowa%2F&id=292841&CBCXT=out",
          img: "https://auth.gfx.ms/16.000.26416.00/AppCentipede/AppCentipede_Microsoft.svg"
        },
        {
          title: "http://www.phonegreetings.com/layer_template/images/small-facebook-logo.png",
          url: "https://www.facebook.com/",
          img: "#"
        },
        {
          title: 'Reddit',
          url: "https://www.reddit.com/r/javascript+programming+webdev+web_design",
          img: "#"
        },
      ],

        $scope.emails = [
          {
            title: "Inbox",
            url: "https://www.google.com/inbox/"
          },
          {
            title: "Gmail",
            url: "https://accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/&hl=sv#identifier"
          },
          {
            title: "Microsoft",
            url: "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=12&ct=1467929374&rver=6.4.6456.0&wp=MBI_SSL_SHARED&wreply=https:%2F%2Fmail.live.com%2Fdefault.aspx&lc=1053&id=64855&mkt=sv-se&cbcxt=mai"
          },
          {
            title: "Yahoo",
            url: "https://login.yahoo.com/?.src=ym&.intl=se&.lang=sv-SE&.done=https%3a//mail.yahoo.com"
          },

        ],

        $scope.education = [
          {
            title: "Lernia - It'sLearning",
            url: "https://lernia.itslearning.com/Index.aspx?SessionExpired=0",
            img: "#"
          },
          {
            title: 'Lernia - NodeBite',
            url: "http://lernia.nodebite.se/",
            img: "#"
          },
          {
            title: 'Lernia - HappySad',
            url: "http://happysad.se/lernia",
            img: "#"
          },
        ],

        $scope.collaboration = [
          {
            title: "GitHub",
            url: "https://github.com/login",
            img: "#"
          },
          {
            title: 'Trello (dyhr-rumson)',
            url: "https://trello.com/login?returnUrl=%2Fb%2F3XNCA4oD%2Fdyhr-rumson",
            img: "#"
          },
        ],

        $scope.blogs = [
          {
            title: "JavaScriptIsSexy",
            url: "http://javascriptissexy.com/",
            img: "#"
          },
        ],

        $scope.health = [
          {
            title: "NutritionData",
            url: "http://nutritiondata.se/",
            img: "#"
          },
        ],


        $scope.casinos = [
          {
            title: 'Casinostugan',
            url: "https://www.casinostugan.com/casino/#!start",
            img: "https://8f862a3cf6d7c471b6a6-fb3a1aa204d4ba7b02ce89a81093b84e.ssl.cf3.rackcdn.com/static/casinostugan/img/logo.png"
          },
          {
            title: 'Dunder',
            url: "https://www.dunder.com",
            img: "#"
          },
          {
            title: 'Thrills',
            url: "https://www.thrills.com/login",
            img: "#"
          },
          {
            title: 'Rizk',
            url: "https://rizk.com",
            img: "#"
          },
        ];

      // Open new tab, stay in window

      // $scope.some_function = function (event) {
      //   if (event.ctrlKey) {
      //     // logic here
      //   }
      // }

      // function OpenInNewTabWinBrowser(url) {
      //   var win = window.open(url, '_blank');
      //   win.focus();
      // }
      // $('a[target="_blank"]').removeAttr('target');

      // function openWindow(url) {
      //   window.open(url, '_blank');
      //   window.focus();
      // }

      // $scope.openWindow = function (url) {
      //   window.open(url, '_blank');
      //   window.focus();
      //   return false
      // }

    }]
  };
}]);