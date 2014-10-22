describe('currencyNoDecimal', function() {

	beforeEach(module('skillscap-proto'));

	it('should ...', inject(function($filter) {

        var filter = $filter('currencyNoDecimal');

		expect(filter('input')).toEqual('output');

	}));

});