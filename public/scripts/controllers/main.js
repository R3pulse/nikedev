'use strict'

angular.module('testApp')
.controller('mainCntrl', function($scope, dataService)  {

  dataService.getData(function(response)  {
    var data = response.data.name
    $scope.data = data
  })
})
