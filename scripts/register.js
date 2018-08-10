var myForm = angular.module("myForm", []);
myForm.controller("formCtrl", ["$scope", "$http", function($scope, $http){
  var formData = {}
  $scope.send = function(){
    console.log("send called", $.param($scope.formData));
    $http({
      url : "/signup",
      data : $.param($scope.formData),
      method : "POST",
      headers :{'Content-type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
    }).success( function(data){
      alert("Success, Info :", data);
    }).error(function(err){
      alert("Error");
    })
  };

  $scope.login = function(){
    $http({
      url : "/home",
      data : $.param($scope.form),
      method : "POST",
      headers :{'Content-type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
      }).success(function(data){
        alert("Success, Info :", data);
      }).error(function(err){
        alert("Error");
      })
  };
}]);
