import * as angular from 'angular';

(function () {

  //creating our new module
  angular
    .module("githubViewer", []) /*need empty array to declare module*/
    .controller('GitHubViewerController',GitHubViewerController);  //registering controller: ("Name of controller", Function_To_Use_For_Controller)

  function GitHubViewerController (
    $scope, $http, $interval,
    $log, $anchorScroll, $location) {

    var onUserComplete = function (response) {
      $scope.user = response.data;

      $http.get($scope.user.repos_url).
      then(onRepos, onError);
      // var imageSource = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F564x%2Fa3%2F5e%2F81%2Fa35e812958d649f2a427a4af4b5206b2.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F469500329874878608%2F&docid=--M8rfXrejNJlM&tbnid=9qhhvtvtJNhpIM%3A&vet=1&w=500&h=415&bih=1201&biw=1280&q=moose%20stuffed%20animal&ved=0ahUKEwjU0LyOlubRAhXBRiYKHXKqC6IQMwiLASgQMBA&iact=mrc&uact=8;';
    }

    var onRepos = function(response){
        $scope.repos = response.data;
        $location.hash("userDetails");
        $anchorScroll();
    }

    var onError = function (reason) {
      $scope.error = "Could not fetch the user";
    };

    var decrementCountdown = function(){
       $scope.countdown -= 1;
      if( $scope.countdown < 1){
        $scope.search($scope.username);
      }
    };

    $scope.search = function (userName) {
      $log.info("searching for "+ userName);
      $http.get("https://api.github.com/users/" + userName)
        .then(onUserComplete, onError);
      if(countdownInterval){
        $interval.cancel(countdownInterval);
        //$scope.countdown = null;
        $scope.timerMessage = "Search complete."
      }
    }
    var countdownInterval = null;

    var getCountdown = function(){
      return $scope.countdown;
    }

    var startCountdown = function(){
      countdownInterval =  $interval(decrementCountdown, 1000, getCountdown);
    };

    $scope.username = "angular"
    $scope.message = "GitHub Search";
    $scope.repoSortOrder = "-stargazers_count";
    $scope.countdown = 10;
    $scope.timerMessage = `Better type fast you only have ${getCountdown()} seconds left.`

    startCountdown();
 };

})();
