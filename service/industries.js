angular.module('skillscap-proto').factory('industries',function($http) {

	var promise = null;

  return function() {
    if (promise) {
      // If we've already asked for this data once,
      // return the promise that already exists.
      return promise;
    } else {
      promise = $http.get('/data/industries.json');
      return promise;
    }
  };
});