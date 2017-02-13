## Introduction
## Controllers
### Summary
- Controllers manipulate scope -- avoiding interacting with html directly
- Add data to a $scope object.
- Binding lifts data into view from scope.
- Controllers can live in a module
- Controllers can use services like $http
    - returns promise objects and get future data using `then`
## Directives and Views
### Introduction
### Philosophy
- The $scope object on the controllers provides the model
    - e.g. `$scope.message = "Hello world" `
- Model does not touch the html
- Data bindings (e.g. `<h1> {{message}} <h1>`) are a type of **Directive**  

Controller and Model are only **concerned with gathering the data** -- the View is only concerned with **presenting the data**. 
Some **Directives** move data from Model to the view, e.g. message text above.
We also have **Directives** that will move data from View to the Model, e.g. on a click event, submit the form data

### ng-model
`ng-model` is a directive that pushes data from the View to the Model. e.g. `ng-model = "username"` will push value of input to the $scope object and `username` property.

### ng-click

We can pass a function with parameters using `ng-click`: e.g. `ng-click="search(username)" `
### ng-repeat
### Filters
### ng-show and hide
### ng-include
### Directives!
### Summary

