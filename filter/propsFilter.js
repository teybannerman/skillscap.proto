/**
 * Alternative to the AngularJS default filter, which evaluates the following:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * and performs a AND between 'name: $select.search' AND 'age: $select.search'.
 * When we want to perform an OR, we use  propsFilter.
 */

angular.module('skillscap-proto').filter('propsFilter', function() {
	return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      items.forEach(function(item) {
        var itemMatches = false;

        var keys = Object.keys(props);
        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
});
