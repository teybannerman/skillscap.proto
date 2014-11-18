angular.module('skillscap-proto').controller('DiscoverCtrl',function($scope, sampleUsers, sampleProjects, industries, tasks, discoverService){

  $scope.usersOut = [];
  $scope.projectsOut = [];
  $scope.tasksOut = [];
  $scope.tasks = [];
  $scope.contribTasks = [];

  $scope.discover = discoverService;

  sampleUsers().success(function(data) {
    var users = data.users;
    angular.forEach (users, function(user, key) {
      //if (user.contributor.active) {
        $scope.usersOut.push({
          "name": user.name,
          "tagline": user.headline,
          "location": user.location,
          "photo": user.photo,
          "skills": user.skills,
          "risk": user.risk,
          "intensity": user.intensity,
          "duration": user.duration,
          "rating": 'A'
        }); // end push
      //}
    }); // end forEach
  }); // end success

  sampleProjects().success(function(data) {
    $scope.projectsOut = data.projects;
  });

  industries().success(function(data) {
    $scope.discover.model.industries = data.industries;
  });

  tasks().success(function(data) {
    $scope.tasksOut = data.tasks;
    angular.forEach (data.tasks, function(task, key) {
      $scope.tasks.push({name:task['name']});
      $scope.contribTasks.push({name:task['name']});
      $scope.discover.model.skills.push({name:task['name']});
    });
  });
  
  $scope.contributorFilter = function (user) {
    if ($scope.discover.model.selected.intensity) {
      if (user.intensity.indexOf($scope.discover.model.selected.intensity) < 0) { return false; }
    }
    if ($scope.discover.model.selected.time) {
      if (user.duration.indexOf($scope.discover.model.selected.time) < 0) { return false; }
    }
    if ($scope.discover.model.selected.location) {
      if ($scope.discover.model.selected.location === 'My city (London)') {
        if (user.location.indexOf('London') < 0) { return false; }
      }
      if ($scope.discover.model.selected.location === 'My Country (UK)') {
        if (user.location.indexOf('UK') < 0) { return false; }
      }
    }
    return true;
  };

});