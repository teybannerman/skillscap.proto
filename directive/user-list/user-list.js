angular.module('skillscap-proto').directive('userList', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
      users: '=users',
      limit: '@'
		},
		templateUrl: 'directive/user-list/user-list.html',
		link: function(scope, element, attrs, fn) {
      /*scope.$watch('users', function(users) {
        angular.forEach(users, function(user, key) {
          //element.append( angular.element('<user-single-line ng-model="user"></user-single-line>') );
        });
      }, true);*/

		}
	};
});
