angular.module('skillscap-proto').controller('SignUpCtrl',function($http, $scope, industries, tasks){

  $scope.foundertabs = {};
  $scope.foundertabs['about'] = true;
  $scope.foundertabs['project'] = false;
  $scope.foundertabs['tasks'] = false;
  $scope.tasks = [];

  $scope.activateFounderTab = function(tab) {
    $scope.foundertabs[tab] = true;
  };

  industries().success(function(data) {
    $scope.industries = angular.copy(data.industries);
    $scope.interests = angular.copy(data.industries);
  });

});