angular.module('skillscap-proto').controller('HomeCtrl',function($scope, $modal, $cookies){

  if (!$cookies.loggedIn) {
    var modalInstance = $modal.open({
      templateUrl: 'modals/basic-pass-protect/basic-pass-protect.html',
      controller: 'BasicPassProtectCtrl',
      keyboard: false,
      backdrop: 'static'
    }).result.then(function(result){
      //do something with the result
    });
  }

});