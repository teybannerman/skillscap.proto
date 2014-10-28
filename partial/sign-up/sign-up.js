angular.module('skillscap-proto').controller('SignUpCtrl',function($http, $scope, industries, tasks){

  $scope.foundertabs = {};
  $scope.foundertabs['about'] = true;
  $scope.foundertabs['project'] = false;
  $scope.foundertabs['tasks'] = false;
  $scope.projectStageModel = '';
  $scope.tasks = [
    {name:'Terms of Service', active:true},
    {name:'Content Marketing Strategy', active:true},
    {name:'Research Project', active:true},
    {name:'Prototype Development', active:true}
  ];
  $scope.projectName = '';
  $scope.newTabText = '';
  $scope.credibilityIcon = 'fa-thumbs-down';
  $scope.socialconnect = {
    'sc1': false,
    'sc2': false,
    'sc3': false,
    'sc4': false,
    'sc5': false,
    'sc6': false
  };

  $scope.activateFounderTab = function(tab) {
    $scope.foundertabs[tab] = true;
  };

  $scope.addNewTask = function() {
    if ($scope.newTabText !== '') {
      $scope.tasks.push({name:$scope.newTabText, active:true});
      $scope.newTabText = '';
    }
  }

  $scope.credibilityCalc = function() {
    var count = 0;
    angular.forEach($scope.socialconnect, function(key, val){
      count += key ? 1 : 0;
    });
    if (count == 0) { $scope.credibilityIcon = 'fa-thumbs-down'; }
    if (count > 0) { $scope.credibilityIcon = 'fa-check'; }
    if (count > 1) { $scope.credibilityIcon = 'fa-thumbs-up'; }
  }

  industries().success(function(data) {
    $scope.industries = angular.copy(data.industries);
    $scope.interests = angular.copy(data.industries);
  });


});