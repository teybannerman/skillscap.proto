angular.module('skillscap-proto').controller('DiscoverCtrl',function($scope, sampleUsers, sampleProjects, industries){

  $scope.usersOut = [];
  $scope.projectsOut = [];

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

});