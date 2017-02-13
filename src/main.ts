import * as angular from 'angular';

(function () {

  //creating our new module
  var app = angular.module("githubViewer", []); //need empty array to declare module

  var GithubViewer = function ($scope, $http) {
    var onUserComplete = function (response) {
      $scope.user = response.data;
      var imageSource = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F564x%2Fa3%2F5e%2F81%2Fa35e812958d649f2a427a4af4b5206b2.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F469500329874878608%2F&docid=--M8rfXrejNJlM&tbnid=9qhhvtvtJNhpIM%3A&vet=1&w=500&h=415&bih=1201&biw=1280&q=moose%20stuffed%20animal&ved=0ahUKEwjU0LyOlubRAhXBRiYKHXKqC6IQMwiLASgQMBA&iact=mrc&uact=8;';
    }

    var onError = function (reason) {
      $scope.error = "Could not fetch the user";
    };

    $scope.search = function (userName) {
      $http.get("https://api.github.com/users/" + userName)
        .then(onUserComplete, onError);
    }


    $scope.message = "Hello";
  };

  //registering controller: ("Name of controller", Function_To_Use_For_Controller)
  app.controller("GithubViewer", ["$scope", "$http", GithubViewer]);

})();
