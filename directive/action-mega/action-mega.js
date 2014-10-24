angular.module('skillscap-proto').directive('actionMega', function() {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
      buttontitle: '@',
      buttonsubtitle: '@'
		},
		templateUrl: 'directive/action-mega/action-mega.html',
		link: function(scope, element, attrs, fn) {

      element.on("click", function(e) {
        $(element)
          .find('.block-link')
          .addClass('active')
          .removeClass('muted-link')
          .parent()
          .parent()
          .siblings()
          .addBack()
          .removeClass('col-md-6')
          .addClass('col-md-12');
        $(element)
          .find('.inner-content')
          .slideDown();
        $(element)
          .parent()
          .siblings()
          .find('.block-link')
          .removeClass('active')
          .addClass('muted-link')
          .find('.inner-content')
          .slideUp();
        $('.sample-people').fadeOut(400);
        return false;
      });
		}
	};
});
