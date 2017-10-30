//var  myApp=angular.module('footBall',[]);

myApp.controller('singleMatchController',['$http','$routeParams','$location',function($http,$routeParams,$location){

	var main = this;

	this.url1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
    this.url2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json"; 
	this.id1 = $routeParams.id1;
	this.id2 = $routeParams.id2;
	this.matchDate = $routeParams.matchDate;

	this.team1;
	this.team2;
	this.code1;
	this.code2;
	this.score1;
	this.score2;
	this.win;
	this.date;
	this.day;
	this.rounds1 = [];

	this.navigateBack = function (){

		$location.path("/main");
	};

	this.stats = function(data){
		main.rounds1 = data.rounds;

		for(var i in main.rounds1){
console.log("Hi hello");
			for(var  j in main.rounds1[i].matches){
						
				if(main.rounds1[i].matches[j].team1.code == main.id1 && main.rounds1[i].matches[j].team2.code == main.id2 &&
					main.rounds1[i].matches[j].date == main.matchDate){

					main.day = main.rounds1[i].name;
					main.date = main.rounds1[i].matches[j].date;

					main.team1 = main.rounds1[i].matches[j].team1.name;
					main.team2 = main.rounds1[i].matches[j].team2.name;

					main.score1 = main.rounds1[i].matches[j].score1;
					main.score2 = main.rounds1[i].matches[j].score2;

					main.code1 = main.rounds1[i].matches[j].team1.code;
					main.code2 = main.rounds1[i].matches[j].team2.code;

					if(main.score1 > main.score2){
						main.win = " " +main.team1+ " Won";
					}
					else if(main.score1 < main.score2){
						main.win = " "+main.team2 + " Won";
					}
					else{
						main.win = "Match is Draw";
					}
				}
			}
		}
	}

	this.year2015 = function(){

		$http({
			method : "GET",
			url : main.url1
		}).then(function success(response){

			main.stats(response.data);
		},function error(response){
			alert("Sorry problem with http get");
		})
	};

	this.year2015();

	this.year2017 = function(){

		$http({
			method : "GET",
			url : main.url2
		}).then(function success(response){

			main.stats(response.data);
		},function error(response){
			alert("Sorry problem with http get");
		})
	};

	this.year2017();
}]);