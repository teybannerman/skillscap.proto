angular.module('skillscap-proto').directive('actionMega', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
      buttontitle: '@',
      buttonsubtitle: '@'
		},
		templateUrl: 'directive/action-mega/action-mega.html',
		link: function(scope, element, attrs, fn) {

      element.on("click", function(e) {
        $(element).parent().siblings().addBack().removeClass('col-md-6').addClass('col-md-12');
        return false;
      });
		}
	};
});
