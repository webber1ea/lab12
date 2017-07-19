var app = angular.module("lab12", []);


app.controller('lab12Ctrl', function($scope){

$scope.toDoList = [ 'Go Grocery Shopping', 'Clean Bedroom', 'Clean Garage', 'Mop Kitchen Floor', 'Do Homework', 'Study for test', 'Give dog a bath', 'Tend to Garden' ];

$scope.addTo = function(usersTask){
  $scope.toDoList.push(usersTask);
};
});
