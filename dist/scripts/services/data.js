'use strict';

angular.module('app')

.service('dataService', function($http) {

	this.getSlides = function(callback) { 
		$http.get('json/be-creative.json')
		.then(callback)
	}

});