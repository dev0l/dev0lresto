app.directive('toDos', [function () {

  return {
    templateUrl: '/directives/toDos.html',
    controller: ['$scope', '$location', '$resource', '$routeParams', 'Task', function ($scope, $location, $resource, $routeParams, Task) {

      // $scope.message = "Waiting 2000ms for update";

      // setTimeout(function () {
      //   $scope.$apply(function () {
      //     $scope.message = "Timeout called!";
      //   });
      // }, 2000);

      // setInterval(function () {
      //   console.log($scope.tasks);
      //   $scope.$apply()
      // }, 500);

      $scope.tasks = Task.get();
      $scope.todo = Task.get({ id: $routeParams.id });

      // Submit Task
      $scope.submitTask = function () {
        //create new Task when form is submitted
        Task.create($scope.newTsk);
        console.log($scope.newTsk, "created")
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.tasks = Task.get()
          });
        }, 500);
        $scope.newTsk = null;
      }

      $scope.update = function (index) {
        var todo = $scope.tasks[index];
        Task.update({ id: todo._id }, todo);
        // $scope.editing[index] = false;
      }

      $scope.remove = function (index) {
        var todo = $scope.tasks[index];
        Task.remove({ id: todo._id }, function () {
          $scope.tasks.splice(index, 1);
        });
      };

      // $scope.removeDone = function (index) {
      //   var todo = $scope.tasks.done;
      //   Task.remove({ done: true }, function () {
      //     $scope.tasks.splice(index, 1);
      //   });
      // };

      $scope.removeDone = function () {
        Task.remove({ done: true })
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.tasks = Task.get()
          });
        }, 500);
      };


      // Total tasks
      $scope.totalTasks = function () {
        return $scope.tasks.length;
      };

      // Remaining tasks USING ANGULAR FUNCTION
      $scope.remainingTasks = function () {
        var count = 0;
        angular.forEach($scope.tasks, function (task) {
          count += task.done ? 0 : 1;
        });
        return count;
      };

      $scope.rems = [
        {
          type: 'danger'
        }
      ];

      $scope.closeRem = function (index) {
        $scope.rems.splice(index, 1);
      };

      // Archive tasks USING UNDERSCORE FUNCTION
      $scope.taskArchive = [];

      $scope.archiveTasks = function () {
        $scope.tasks = _.filter($scope.tasks, function (task) {
          if (task.done) $scope.taskArchive.push(task);
          return !task.done;
        });
      };

      // Remove completed tasks USING UNDERSCORE FUNCTION
      // $scope.clearDone = function () {
      //   $scope.tasks = _.filter($scope.tasks, function (task) {
      //     return !task.done;
      //   });
      // };

      //   $scope.clearDone = function () {
      //   angular.forEach($scope.tasks, function (task) {
      //     Task.delete(task.done)
      //     // return !task.done;
      //     console.log(task.done)
      //   });
      // };

      $scope.oneAtATime = true;

    }]
  };
}]);