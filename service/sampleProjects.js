angular.module('skillscap-proto').factory('sampleProjects',function($http) {

	var promise = null;

  return function() {
    if (promise) {
      // If we've already asked for this data once,
      // return the promise that already exists.
      return promise;
    } else {
      promise = $http.get('/data/projects.json');
      return promise;
    }
  };
});
