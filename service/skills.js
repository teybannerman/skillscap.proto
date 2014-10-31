angular.module('skillscap-proto').factory('skills',function($http) {

  var promise = null;

  return function() {
    if (promise) {
      // If we've already asked for this data once,
      // return the promise that already exists.
      return promise;
    } else {
      promise = $http.get('/data/skills.json');
      return promise;
    }
  };
});