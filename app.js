angular.module('skillscap-proto', ['ui.bootstrap','ui.utils','ui.router', 'ngAnimate', 'ngSanitize','ngCookies', 'ui.select', 'xeditable']);

angular.module('skillscap-proto').config(function($stateProvider, $urlRouterProvider, uiSelectConfig) {

  uiSelectConfig.theme = 'bootstrap';

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
    views: {
      "@":{
        templateUrl: 'partial/discover/discover.html'
      },
      "projectstage@discover": {
        templateUrl: 'partial/_components/forms-project-stage.html'
      }
    }
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
      },
      "projectstage@sign-up.founder": {
        templateUrl: 'partial/_components/forms-project-stage.html'
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

angular.module('skillscap-proto').run(function($rootScope, $state, $stateParams, editableOptions) {

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'

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

  // restore and save state on route change
  $rootScope.$on("$stateChangeStart", function (event, next, current) {
    if (sessionStorage.restorestate == "true") {
      $rootScope.$broadcast('restorestate'); //let everything know we need to restore state
      sessionStorage.restorestate = false;
    }
  });

  //let everthing know that we need to save state now.
  window.onbeforeunload = function (event) {
    $rootScope.$broadcast('savestate');
  };

});

