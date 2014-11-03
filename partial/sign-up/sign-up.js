angular.module('skillscap-proto').controller('SignUpCtrl',function($http, $scope, industries, tasks, skills, discoverService){

  $scope.discover = discoverService;

  $scope.foundertabs = {};
  $scope.foundertabs['about'] = true;
  $scope.foundertabs['project'] = false;
  $scope.foundertabs['tasks'] = false;
  $scope.projectStageModel = '';
  $scope.tasks = [];
  $scope.projectName = '';
  $scope.newTabText = '';
  $scope.credibilityIcon = 'fa-thumbs-down';
  $scope.credibility = 'Unverified';

  $scope.taskmodel = {
    intensity: [
      { value:'low', text:'Low'},
      { value:'medium', text:'Medium'},
      { value:'high', text:'High'}
    ],
    duration: [
      { value:'short', text:'Short'},
      { value:'medium', text:'Medium'},
      { value:'long', text:'Long'}
    ]
  };

  $scope.socialconnect = {
    'sc1': false,
    'sc2': false,
    'sc3': false,
    'sc4': false,
    'sc5': false,
    'sc6': false
  };

  $scope.signup = {};
  $scope.signup.model = {
    industries: [],
    interests: [],
    skills: []
  };


  $scope.activateFounderTab = function(tab) {
    $scope.foundertabs[tab] = true;
  };

  $scope.addNewTask = function() {
    $scope.tasks.push({
      name:'', 
      stage: $scope.discover.model.projectStage, 
      active:true
    });
  };

  $scope.credibilityCalc = function() {
    var count = 0;
    angular.forEach($scope.socialconnect, function(key, val){
      count += key ? 1 : 0;
    });
    if (count === 0) { $scope.credibilityIcon = 'fa-thumbs-down'; $scope.credibility = 'Unverified'; }
    if (count > 0) { $scope.credibilityIcon = 'fa-check'; $scope.credibility = 'Connected'; }
    if (count > 1) { $scope.credibilityIcon = 'fa-thumbs-up'; $scope.credibility = 'Verified'; }
    if (count > 3) { $scope.credibilityIcon = 'fa-star'; $scope.credibility = 'Superstar'; }
  };

  $scope.taskStageFilter = function (task) {
    return (task.stage === $scope.discover.model.projectStage);
  };

  industries().success(function(data) {
    $scope.signup.model.industries = angular.copy(data.industries);
    $scope.signup.model.interests = angular.copy(data.industries);
  });

  skills().success(function(data) {
    $scope.signup.model.skills = angular.copy(data.skills);
  });

  tasks().success(function(data) {
    $scope.tasks = angular.copy(data.tasks);
    $scope.tasks.forEach(function(task) {
      task.active = true;
    });
  });


});