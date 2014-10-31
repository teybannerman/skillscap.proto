angular.module('skillscap-proto').factory('discoverService', ['$rootScope', function ($rootScope) {

	var service = {

    model: {
      projectStage: '',
      skills: [],
      industries: [],
      selected: {}
    },

    SaveState: function () {
      sessionStorage.discoverService = angular.toJson(service.model);
    },

    RestoreState: function () {
      service.model = angular.fromJson(sessionStorage.discoverService);
    }
  }

  $rootScope.$on("savestate", service.SaveState);
  $rootScope.$on("restorestate", service.RestoreState);

  return service;

}]);
