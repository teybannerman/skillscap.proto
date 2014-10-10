angular.module('skillscap-proto').controller('BasicPassProtectCtrl',function($scope, $modalInstance, $state, $cookies){

  $scope.data = {};
  $scope.passed = false;

  $scope.checkPass = function(pass) {
    if (pass === 'SkillsCap-0914') {
      $scope.passed = true;
      $modalInstance.dismiss('passed');
      $cookies.loggedIn = true;
      //$state.go('new-project');
    }
    else {
      $scope.data.pass = '';
    }
  };

});