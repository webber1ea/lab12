var app = angular.module("lab12", []);


app.controller('lab12Ctrl', function($scope){

$scope.toDoList = [ 'Eat Ice Cream', 'Eat at the Krusty Krab', 'Visit Squidward', 'Jellyfish with Sandy', 'Sleep', 'Nap', 'Swim at the Blue Lagoon', 'Rest', 'Wait for SpongeBob to get home'];

$scope.addTo = function(usersTask){
  $scope.toDoList.push(usersTask);
};


$scope.remove = function(index){
  $scope.toDoList.splice(index, 1)
};
});
