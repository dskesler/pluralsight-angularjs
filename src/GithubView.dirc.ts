/// <reference path="../typings/modules/angular/index.d.ts" />
import * as ng from 'angular';

module GithubViewer
{
    var app = ng.module('GithubViewer');


     export interface IGithubViewerScope extends ng.IScope{
        [key: string] : any;

        user: any;
        repos: any;
        username: string;
        message: string;
        repoSortIrder: string;
        countdown: number;
        timerMessage: string;
     }

    export class GithubViewerDirective implements ng.IDirective
    {
        private _$compile : ng.ICompileService;
        private _scope: IGithubViewerScope;
        private _$http: ng.IHttpService;
        private _$log: ng.ILogService;

        //public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any)=> void;
        public scope = {};
        public restrict: string = "AE";
        public replace: boolean = true;
        public templateUrl: string = '../user_details.html';

        constructor(private $compile: ng.ICompileService, $http: ng.IHttpService, $log: ng.ILogService){ }

        link = (scope: ng.IScope, element: JQuery, attrs: ng.IAttributes, ctrl: any)=>{
            element.append()
        }

        public static factory(): ng.IDirectiveFactory {
            const directive = ($compile: ng.ICompileService, $http: ng.IHttpService, $log: ng.ILogService) => new GithubViewerDirective($compile, $http, $log);
            directive.$inject = ['$compile','$http','$log'];
            return directive;
        }
     }


     export class GithubViewerController{

     }

    app.directive('GithubViewerDirective', GithubViewerDirective.factory());
}

