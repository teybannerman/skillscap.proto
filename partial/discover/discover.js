angular.module('skillscap-proto').controller('DiscoverCtrl',function($scope, sampleUsers, sampleProjects, industries, tasks, discoverService){

  $scope.usersOut = [];
  $scope.projectsOut = [];
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
          "photo": user.photo,
          "skills": user.skills,
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
    angular.forEach (data.tasks, function(task, key) {
      $scope.tasks.push({name:task['name']});
      $scope.contribTasks.push({name:task['name']});
      $scope.discover.model.skills.push({name:task['name']});
    });
  });

});