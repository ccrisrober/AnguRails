angular.module("app.myApp").controller("ExampleCtrl", [
   "$scope", function($scope) {
      console.log("ExampleCtrl running");
      $scope.exampleValue = "Hello AnguRails";
   }
]);
