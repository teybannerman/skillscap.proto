angular.module('skillscap-proto').controller('NavPrimaryCtrl',function($scope, $location){

  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };

});