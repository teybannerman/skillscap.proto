angular.module('skillscap-proto').controller('DiscoverCtrl',function($scope, sampleUsers, sampleProjects, industries, tasks){

  $scope.usersOut = [];
  $scope.projectsOut = [];
  $scope.projectStage = '';
  $scope.tasks = [];
  $scope.contribTasks = [];

  $scope.discover = {};
  $scope.discover.skills = [];
  $scope.discover.selectedSkills = []; 

  sampleUsers().success(function(data) {
    var users = data.users;
    angular.forEach (users, function(user, key) {
      if (user.contributor.active) {
        $scope.usersOut.push({
          "firstName": user.firstname,
          "firstInitial": user.firstname.substring(0,1),
          "lastName": user.lastname,
          "tagline": user.tagline,
          "photo": user.photo,
          "skills": [ 
            user.contributor.skills[0].name,
            user.contributor.skills[1].name
          ],
          "rating": 'A'
        }); // end push
      }
    }); // end forEach
  }); // end success

  sampleProjects().success(function(data) {
    $scope.projectsOut = data.projects;
  });

  industries().success(function(data) {
    $scope.industries = data.industries;
  });

  $scope.$watch('projectStage', function() {
    //console.log('xx' + $scope.projectStage + 'xx');
  });

  tasks().success(function(data) {
    angular.forEach (data.tasks, function(task, key) {
      $scope.tasks.push({name:task['name']});
      $scope.contribTasks.push({name:task['name']});
      $scope.discover.skills.push({name:task['name']});
    });
  });

});