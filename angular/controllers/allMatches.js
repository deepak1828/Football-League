//var  myApp=angular.module('footBall',[]);

myApp.controller('totalController', ['$http', function($http){

	var main = this;

	this.pageHeading = 'Football League Matches';
	this.pageSubHeading = 'An angular application to view the match details';

	this.url1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
  this.url2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json"  

		this.totalMatches = [];
    this.rounds1 = [];
    	
this.loadFirst = function(){

                $http({
                 method: 'GET',
                 url:main.url1
                  }).then(function success(response) {
                      main.rounds1 = response.data.rounds;
                      main.nameFirst = response.data.name;       
                  //        console.log(main.rounds1);

                  }, function error(response) {
                    alert("some error occurred. Check the console.");
                  })
                 };

                      this.loadFirst();
                 
    }]); // controller ends   */