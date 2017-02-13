import * as ng from 'angular';

module GithubViewer {

  var app = ng.module("GithubViewer", []); //need empty array to declare module

  export class GithubViewerDirective implements ng.IDirective {
    public restrict: string = 'E';
    public replace: boolean = true;
    public message: string = "Hello. You can search Github user names here:";
    public controller: string = 'GithubViewerController';
    public scope ={};
  }

  app.directive("githubViewer", [() => new GithubViewer.GithubViewerDirective()]);

 export interface IGithubViewerScope extends ng.IScope{
      Error: string;
      Message: string;
      Search: string;
      User: string;
  }

 export class GithubViewerController{
  static $inject = ["$scope", "$http"];
  constructor(protected $scope: GithubViewer.IGithubViewerScope,
              protected $http: ng.IHttpService)
        {
              this.$scope.Search = function (userName) {
      $http.get("https://api.github.com/users/" + userName)
        .then(onUserComplete, onError);
    }
        }

    public onUserComplete(response: any){
    this.$scope.User = response.data;
    let imageSource = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F564x%2Fa3%2F5e%2F81%2Fa35e812958d649f2a427a4af4b5206b2.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F469500329874878608%2F&docid=--M8rfXrejNJlM&tbnid=9qhhvtvtJNhpIM%3A&vet=1&w=500&h=415&bih=1201&biw=1280&q=moose%20stuffed%20animal&ved=0ahUKEwjU0LyOlubRAhXBRiYKHXKqC6IQMwiLASgQMBA&iact=mrc&uact=8;';
  }

    public onError(reason):  void{
      this.$scope.Error = "Could not fetch the user";
    };

    this.$scope.


 }



    $scope.message = "Hello. You can search Github user names here:";


 }

  app.controller("MainController", MainController);

}

}


