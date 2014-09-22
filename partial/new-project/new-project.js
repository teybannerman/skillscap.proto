angular.module('skillscap.proto').controller('NewProjectCtrl',function($scope){

  $scope.tabs = [];
  $scope.activePage = 1;

  $scope.pageSelected = function(index) {
    $scope.activePage = index + 1;
  };

  $scope.continueClick = function(index) {
    $scope.tabs[$scope.activePage][index].completed = true;
    if (index ===  $scope.totalCount($scope.activePage)-1) {
      $scope.tabPages[$scope.activePage].active = true;
    }
    else {
      $scope.tabs[$scope.activePage][index + 1].isOpen = true;
    }
  };

  $scope.completedCount = function(page) {
    var count = 0;
    angular.forEach($scope.tabs[page], function(tab){
      count += tab.completed ? 1 : 0;
    });
    return count;
  };

  $scope.totalCount = function(page) {
    return $scope.tabs[page].length;
  };

  $scope.totalPercentage = function(page) {
    return ($scope.completedCount(page) / $scope.totalCount(page)) * 100;
  };

  $scope.$watch('activePage', function() {
    //$scope.tabs[$scope.activePage].active = true
    //console.log($scope.activePage);
  });

  $scope.tabPages = [
    { num:1, name:'Concept', active:true, completed:0, intro:'Your project\'s concept is a clearly defined set of tasks necessary to complete, build, validate or advance your technology, service or product, and represents a significant milestone in your company\'s commercialization process.' },
    { num:2, name:'Prototype', active:false, completed:0, intro:'Your project\'s low fidelity prototype is... , and can be anything from sketched wireframes to clickable mockups all the way up to a working "skeleton" application.' },
    { num:3, name:'Validate', active:false, completed:0, intro:'The validation phase is where you take steps to find out if you can actually sell or provide to your market and that it is large enough for a viable business.' },
    { num:4, name:'MVP', active:false, completed:0, intro:'Your project\'s Minimum Viable Product (MVP) represents your product or service\'s minimal set of features needed to solve the core problem. MVPs are used to rapidly test product hypotheses with customers. The goal of your MVP should be to validate your ‘product-market fit’ and to answer the question, "is the developed product something that people want?"' },
    { num:5, name:'Scale', active:false, completed:0, intro:'' }
  ];

  $scope.tabs[1] = [
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
    { heading: 'Testing your hypothesis',
      content: 'partial/new-project/questions/project-1-testing.html',
      completed: false,
      isOpen: false
    }
  ];

  $scope.tabs[2] = [
    { heading: 'Have you built your low fidelity prototype?',
      content: 'partial/new-project/questions/project-2-prototype.html',
      completed: false,
      isOpen: true
    },
    { heading: 'Has your low fidelity prototype been tested with real users?',
      content: 'partial/new-project/questions/project-2-testing.html',
      completed: false,
      isOpen: false
    }
  ];

  $scope.tabs[3] = [
    { heading: 'What is your revenue model?',
      content: 'partial/new-project/questions/project-3-revenue.html',
      completed: false,
      isOpen: true
    },
    { heading: 'What is your distribution model?',
      content: 'partial/new-project/questions/project-3-distribution.html',
      completed: false,
      isOpen: false
    },
    { heading: 'And your cost model?',
      content: 'partial/new-project/questions/project-3-costs.html',
      completed: false,
      isOpen: false
    }
  ];

  $scope.tabs[4] = [
    { heading: 'Has your high-fidelity solution been built?',
      content: 'partial/new-project/questions/project-4-high-fidelity-built.html',
      completed: false,
      isOpen: true
    },
    { heading: 'Has your solution been tested?',
      content: 'partial/new-project/questions/project-4-tested.html',
      completed: false,
      isOpen: false
    },
    { heading: 'Your full feature set...',
      content: 'partial/new-project/questions/project-4-features.html',
      completed: false,
      isOpen: false
    }
  ];

  $scope.tabs[5] = [
    { heading: 'Sales',
      content: 'partial/new-project/questions/project-5-sales.html',
      completed: false,
      isOpen: true
    },
    { heading: 'Marketing',
      content: 'partial/new-project/questions/project-5-marketing.html',
      completed: false,
      isOpen: false
    },
    { heading: 'Continuous product development',
      content: 'partial/new-project/questions/project-5-cpd.html',
      completed: false,
      isOpen: false
    }
  ];

});