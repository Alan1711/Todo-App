// <!--
// * Author: Alan Murphy
// * Assignment: BSc Mobile  Web Applications, Digital Skills  Academy
// * Student ID: D16125812
// * Date  : 2017/01/09
// * Ref:  https://angularjs.org/
// -->

function TodoCtrl($scope) {
  
  $scope.todos = [
    {text:'Learn AngularJS', done:false},         
    {text: 'Build an app', done:false}
  ];
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
}

// var TodoCtrl = angular.module("TodoCtrl",[]);

// TodoCtrl.controller("TodoCtrl", function ($scope) {
      
//       $scope.todos = [
//         {text:'Learn AngularJS', done:false},         
//         {text: 'Build an app', done:false}
//       ];
      
//       $scope.getTotalTodos = function () {
//         return $scope.todos.length;
//       };
      
      
//       $scope.addTodo = function () {
//         $scope.todos.push({text:$scope.formTodoText, done:false});
//         $scope.formTodoText = '';
//       };
      
//         $scope.clearCompleted = function () {
//             $scope.todos = _.filter($scope.todos, function(todo){
//                 return !todo.done;
//             });
//         };
//     })
