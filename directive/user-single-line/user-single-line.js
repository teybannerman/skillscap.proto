angular.module('skillscap-proto').directive('userSingleLine', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
      'user': '='
		},
		templateUrl: 'directive/user-single-line/user-single-line.html',
		link: function(scope, element, attrs, fn) {


		}
	};
});
