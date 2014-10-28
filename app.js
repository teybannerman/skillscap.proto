angular.module('skillscap-proto', ['ui.bootstrap','ui.utils','ui.router','ngAnimate','ngCookies', 'multi-select']);

angular.module('skillscap-proto').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('project', {
    url: '/project/:id',
    templateUrl: 'partial/project/project.html'
  });
  $stateProvider.state('contributor', {
    url: '/contributor/:id',
    templateUrl: 'partial/contributor/contributor.html'
  });
  $stateProvider.state('founders', {
    url: '/founders/:id',
    templateUrl: 'partial/founder/founder.html'
  });
  $stateProvider.state('search-projects', {
    url: '/search-projects',
    templateUrl: 'partial/search-projects/search-projects.html'
  });
  $stateProvider.state('new-project', {
    url: '/new-project',
    templateUrl: 'partial/new-project/new-project.html'
  });
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'partial/home/home.html'
  });
  $stateProvider.state('discover', {
    url: '/discover',
    templateUrl: 'partial/discover/discover.html'
  });

  // Sign In

  $stateProvider.state('sign-in', {
    abstract: true,
    url: '/sign-in',
    templateUrl: 'partial/sign-in/sign-in.html'
  });
  $stateProvider.state('sign-in.default', {
    url: ''
  });

  // Sign Up
  
  $stateProvider.state('sign-up', {
    abstract: true,
    url: '/sign-up',
    templateUrl: 'partial/sign-up/sign-up.html'
  });
  $stateProvider.state('sign-up.default', {
    url: ''
  });
  $stateProvider.state('sign-up.founder', {
    url: '/founder',
    views:{
      "@":{
        templateUrl: 'partial/sign-up/founder.html'
      }
    }
  });
  $stateProvider.state('sign-up.contributor', {
    url: '/sign-up/contributor',
    views:{
      "@":{
        templateUrl: 'partial/sign-up/contributor.html'
      }
    }
  });
  $stateProvider.state('contributors', {
        url: '/contributors',
        templateUrl: 'partial/contributors/contributors.html'
    });
  /* Add New States Above */
  $urlRouterProvider.otherwise('/home');

});

angular.module('skillscap-proto').run(function($rootScope, $state, $stateParams) {

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  $rootScope.safeApply = function(fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});
