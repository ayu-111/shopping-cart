var loginForm = angular.module("loginForm", []);

loginForm.controller("loginCtrl", ["$scope", "$http", function($scope, $http){
  var formData = {};
  $scope.er = false;
  $scope.errMessage= "";
  $scope.send = function(){

      $http({
        url : "/login",
        data : $.param($scope.formData),
        method : "POST",
        headers : {'Content-type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
      }).success(function(response){
        data = $.param($scope.formData)
        if(data.email == "admin@admin.com"){
          alert("admin login");
        }else{
          alert("user login");
        }
      }).error(function(response){
        $scope.er = true;
        $scope.errMessage = response.message;
      })
  };

}]);
