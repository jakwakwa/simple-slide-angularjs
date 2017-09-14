'use strict';

angular.module('app')

.controller('CarouselDemoCtrl', function($scope, dataService) {

	$scope.addSlide = function() {
		var newSlide = $scope.values
		$scope.slides.push(newSlide);
	};

	$scope.myInterval = 3000;

	dataService.getSlides(function(response) {
			// $scope.slides = response.data;
		$scope.aboutUs = response.data[0];
		$scope.slides = response.data.find(function(d) { return d.Carousel; }).Carousel;
		});

})