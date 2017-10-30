myApp.controller('totalController2', ['$http', function($http){
  var main = this;
  
  this.url2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json"  

  this.totalMatches = [];
  this.rounds2 = [];

      this.loadSecond = function(){
        $http({
          method: 'GET',
          url:main.url2
        }).then(function success(response) {
          main.nameSecond = response.data.name;
          main.rounds2 = response.data.rounds;
        }, function error(response) {
          alert("some error occurred. Check the console.");
        })
      };
      this.loadSecond();
    }]); // controller ends   */