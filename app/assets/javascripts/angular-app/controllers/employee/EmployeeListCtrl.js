angular.module('app.employeeApp')
.controller("EmployeeListCtrl", ['$scope', 'EmployeeService', function($scope, EmployeeService) {
    EmployeeService.list().then(function(employees) {
      $scope.employees = employees;
      console.dir(employees);
    });
  }
]);
