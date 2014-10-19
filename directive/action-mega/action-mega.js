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
        $(element)
          .removeClass('muted-link')
          .parent()
          .siblings()
          .addBack()
          .removeClass('col-md-6')
          .removeClass('muted-link')
          .addClass('col-md-12');
        $(element)
          .parent()
          .siblings()
          .find('.block-link')
          .addClass('muted-link');
        $('.sample-people').fadeOut(400);
        return false;
      });
		}
	};
});
