angular
  .module('myApp')
  .controller('todoCtrl', ['$scope', function($scope) {
    $scope.title = "My TODO's"
    $scope.todos = [
      {"name": "clean teh hauzah"},
      {"name": "feed zeh catz"},
      {"name": "do teh stuffies"},
      {"name": "pay dem bills"},
      {"name": "do teh daipers"},
      {"name": "do teh dizzeh"}
    ]
  }])
