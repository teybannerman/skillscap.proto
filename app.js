angular.module('skillscap.proto', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('skillscap.proto').config(function($stateProvider, $urlRouterProvider) {

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
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('skillscap.proto').run(function($rootScope) {

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
