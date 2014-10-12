angular.module('skillscap-proto', ['ui.bootstrap','ui.utils','ui.router','ngAnimate','ngCookies']);

angular.module('skillscap-proto').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('project', {
        url: '/project/:id',
        templateUrl: 'partial/project/project.html'
    });
    $stateProvider.state('contributor', {
        url: '/contributor/:id',
        templateUrl: 'partial/contributor/contributor.html'
    });
    $stateProvider.state('founder', {
        url: '/founder/:id',
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
    $stateProvider.state('sign-in', {
        url: '/sign-in',
        templateUrl: 'partial/sign-in/sign-in.html'
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
