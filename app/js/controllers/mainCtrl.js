myApp.controller("mainCtrl", function($scope, $location){
    $scope.title = "My title";
    $scope.url = $location.absUrl();

});