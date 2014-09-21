angular.module('skillscap.proto').controller('NewProjectCtrl',function($scope){

  $scope.alertMe = function() {
    setTimeout(function() {
      alert('You\'ve selected the alert tab!');
    });
  };

  $scope.continueClick = function(index) {
    $scope.tabs1[index + 1].isOpen = true;
    $scope.tabs1[index].completed = true;
  }

  $scope.tabs1 = [
    { heading: 'Your hypothesis',
      content: 'partial/new-project/questions/project-1-hypothesis.html',
      completed: false,
      isOpen: true
    },
    { heading: 'Your business model canvas',
      content: 'partial/new-project/questions/project-1-canvas.html',
      completed: false,
      isOpen: false
    },
    { heading: 'Your market',
      content: 'partial/new-project/questions/project-1-market.html',
      completed: false,
      isOpen: false
    },
    { heading: 'Testing your hypothesiss',
      content: 'partial/new-project/questions/project-1-testing.html',
      completed: false,
      isOpen: false
    }
  ];

  angular.element('a.continue').bind('click', function() {
    alert('hello');
  });
  

});