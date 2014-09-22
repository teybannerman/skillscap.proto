angular.module('skillscap-proto').controller('BasicPassProtectCtrl',function($scope, $modalInstance, $state){

  $scope.data = {};
  $scope.passed = false;

  $scope.checkPass = function(pass) {
    if (pass === 'SkillsCap-0914') {
      $scope.passed = true;
      $modalInstance.dismiss('passed');
      $state.go('new-project');
    }
    else {
      $scope.data.pass = '';
    }
  };

});