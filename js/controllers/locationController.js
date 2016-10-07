angular.module('devmtnTravel')

  .controller('locationsCtrl', function($scope, mainSrv){

    $scope.travelInfo = mainSrv.travelInfo;

    $scope.bookedLoc = function(items){
      mainSrv.travelLocations = items;
      
    };
  });
