app.directive('headerNav', [function () {

  return {
    templateUrl: '/directives/headerNav.html',
    controller: ['$scope', '$interval', '$location', function ($scope, $interval, $location) {

      // Links
      $scope.navLinks = [
        {
          title: "Archives",
          url: "/theArchives"
        },
        {
          title: "Temp",
          url: "/temp"
        },
      ];

      $scope.currentUrl = function () {
        return $location.url();
      }

      // E-mails
      $scope.emaiLinks = [
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
      ];

      // Notifications
      $scope.notifications = [
        {
          title: "Tasks",
          url: "/toDo"
        },
        {
          title: "Emails",
          url: "/myAccounts"
        },
        // category: "Social media"[
        //   {
        //     title: "Facebook",
        //     url: "https://www.facebook.com/"
        //   },
        //   {
        //     title: "Emails",
        //     url: "https://twitter.com/?lang=sv"
        //   }
        // ],
        //   },
        {
          title: "Facebook",
          url: "https://www.facebook.com/"
        },
        {
          title: "Twitter",
          url: "https://twitter.com/?lang=sv"
        },
      ];



      // Search
      // $scope.searchExpand = function () {
      //   $(".search").toggleClass("open")
      // }



      //     var callback = function () {...};

      // $("input").keypress(function () {
      //   if (event.which == 13) callback();
      // });

      // $('#login_submit').click(callback);

      // Profile Button
      /////
      // * http://geniuscarrier.com/ng-toggle-in-angularjs/
      /////

      // TEMPORARY, USE * ???
      $("#profileBtn").on("click", function () {
        var state = $(this).data('state');
        state = !state;
        if (state) {
          $("#profileSidebar").addClass("show");
        } else {
          $("#profileSidebar").removeClass("show");
        }
        $(this).data('state', state);
      });

    }]
  };
}]);



      /*
      
            $scope.selectedItem;
            $scope.dropboxitemselected = function (item) {
      
              $scope.selectedItem = item;
              alert($scope.selectedItem);
            }
      
            getEmaiLinks();
            function getEmaiLinks() {
              TeacherService.getEmaiLinks()
                .success(function (emaiLinks) {
                  $scope.emaiLinks = emaiLinks;
                  console.log($scope.emaiLinks);
      
                })
                .error(function (error) {
                  $scope.status = 'Unable to load subject data: ' + error.message;
      
                });
            };
      
            API
      
            MyApp.factory('TeacherService', ['$http', function ($http) {
              var urlBase = 'http://localhost:25221/api';
              var TeacherService = {};
              TeacherService.getEmaiLinks = function () {
                return $http.get(urlBase + '/EmaiLinks');
              };
            }]);
      
      */