angular.module('devmtnTravel')

  .controller('bookedCtrl', function($scope, mainSrv, $state){

    var locations = mainSrv.travelInfo;

      for (var i = 0; i < locations.length; i++){
        if (locations[i].id == $state.params.id){
          console.log("success");
          $scope.tripLocation = locations[i];
        }
        else{
          console.log('failure');
        }
      }



  });
