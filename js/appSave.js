var myapp = angular.module('saveWaterApp', []);

myapp.controller('saveWaterCtrl', function ($scope,$http) 
{
  $scope.slider = {
    value: 12,
    options: {
        showSelectionBar: true,
        getSelectionBarColor: function(value) {
            if (value <= 0)
                return '#f5b500';
            return '#2AE02A';
        }
    }
};
               
});
    
