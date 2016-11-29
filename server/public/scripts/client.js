var pets = angular.module('pets', ['ngRoute']);

pets.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/dogs', {
            templateUrl: '/views/templates/dogs.html',
            controller: 'DogController',
            controllerAs: 'dc'
        })
        .when('/cats', {
            templateUrl: '/views/templates/cats.html',
            controller: 'CatController',
            controllerAs: 'cc'
        })
        .when('/barnyard', {
            templateUrl: '/views/templates/barnyard.html',
            controller: 'BarnyardController',
            controllerAs: 'bc'
        })
        .when('/shelters', {
            templateUrl: '/views/templates/shelters.html',
            controller: 'ShelterController',
            controllerAs: 'sc'
        })
        .otherwise({
            redirectTo: '/dogs'
        });
}]);


// app.controller('firstController', ['$http', function($http) {
//   console.log('firstController up and running');
//   var key = 'ac37ea50612c55186b0cae6129df1df0';
//   var self = this;
//
//   self.animal = {};
//
//   self.getRandomPet = function(animal){
//     var query = 'http://api.petfinder.com/'; // baseURL for API
//     query += 'pet.getRandom'; // selecting the method we would like to return
//     query += '?key=' + key; // Giving petfinder our key
//     query += '&animal=' + animal;
//     query += '&format=json'; // Telling petfinder we want our response to be JSON
//     query += '&output=basic'; // Telling petfinder what data we want (more than just id)
//     var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback
//
//     console.log('Request:', request);
//
//     $http.jsonp(request).then(function(response){
//       console.log(response);
//       self.animal = response.data.petfinder.pet;
//     });
//
//   }
//
//   self.getRandomPet('dog');
//
//   self.message = "Welcome!"
// }]);
