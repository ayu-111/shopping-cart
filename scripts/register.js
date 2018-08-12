var myForm = angular.module("myForm", []);
myForm.controller("formCtrl", ["$scope", "$http", function($scope, $http){
  var formData = {}
  $scope.suc = false;
  $scope.er = false;
  $scope.send = function(){
    console.log("send called", $.param($scope.formData));
    $http({
      url : "/signup",
      data : $.param($scope.formData),
      method : "POST",
      headers :{'Content-type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
    }).success( function(status){
      console.log("registered");
      $scope.val = true;
      $scope.formData.name=null;
      $scope.formData.email=null;
      $scope.formData.password=null;
    }).error(function(status){
      console.log("error discovered");
      $scope.er = true;
      $scope.formData.name=null;
      $scope.formData.email=null;
      $scope.formData.password=null;
    })
  };
  
}]);
