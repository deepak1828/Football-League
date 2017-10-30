var  myApp=angular.module('footBall',['ngRoute','ngAnimate']);

 //******** ROUTE Configuration ********

          /*myApp.config(["$routeProvider",function($routeProvider){
            $routeProvider
            .when("/main",{
              templateUrl : "views/allMatches-view.html",
              controller : "totalController",
              controllerAs : "totalCtrl"
            })
           .when("/match/:id1/:id2/:matchDate",{
              templateUrl : "views/singleMatch-view.html",
              controller : "singleMatchController",
              controllerAs : "singleCtrl"
            })
           .when("/teams",{
              templateUrl : "views/statistics-view.html",
              controller : "statisticController",
              controllerAs : "statCtrl"
           })

            .otherwise(
                      {
                          redirectTo:'/'
                          
                      }
                  );
          }]);*/