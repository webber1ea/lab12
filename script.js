var app = angular.module("lab12", []);


app.controller('lab12Ctrl', function($scope){

$scope.toDoList = [ 'Go Grocery Shopping', 'Clean Bedroom' ];

$scope.addTo = function(usersTask){
  $scope.toDoList.push(usersTask);
};
});
