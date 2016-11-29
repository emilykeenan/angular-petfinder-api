var app = angular.module('app', []);

app.controller('firstController', ['$http', function($http) {
  console.log('firstController up and running');
  var key = 'ac37ea50612c55186b0cae6129df1df0';
  var self = this;

  self.animal = {};

  self.getRandomPet = function() {
    var query = 'http://api.petfinder.com/';
    query += 'pet.getRandom';
    query += '?key=' + key;
    query += '&format=json';
    query += '&output=basic';
    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(function(response) {
      console.log(response);
      self.animal = response.data.petfinder.pet;
    });
  }



  self.getRandomPet();

  self.message = "Welcome!"
}]);
