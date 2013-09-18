'use strict';
//
//function PhoneListCtrl($scope) {
//	 $scope.phones = [
//	                  {"name": "Nexus S",
//	           
//	                   "snippet": "Fast just got faster with Nexus S.",
//	                   "age": 0},
//	                  {"name": "Motorola XOOM™ with Wi-Fi",
//	           
//	                   "snippet": "The Next, Next Generation tablet.",
//	                   "age": 1},
//	                  {"name": "MOTOROLA XOOM™",
//
//	                   "snippet": "The Next, Next Generation tablet.",
//	                   "age": 2}
//	                ];
//	              
//	                $scope.orderProp = 'age';
//	              }


function PhoneListCtrl($scope, $http) {
	  $http.get('http://localhost/php/angular-phones.json').success(function(data) {
	    $scope.phones = data;
	  });
	 
	  $scope.orderProp = 'age';
	}
	 
	//PhoneListCtrl.$inject = ['$scope', '$http'];