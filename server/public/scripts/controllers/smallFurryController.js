pets.controller('SmallFurryController', ['$http', "DataFactory", function($http, DataFactory) {

  var self = this;
  self.animalType = 'smallfurry';
  self.key = DataFactory.key;
  self.animal = {};
  self.message = 'smallfurry controller is running';

  console.log(self.key);
  console.log(self.message);

  this.getRandomPet = function(animalType){
    var query = 'http://api.petfinder.com/'; // baseURL for API
    query += 'pet.getRandom'; // selecting the method we would like to return
    query += '?key=' + self.key; // Giving petfinder our key
    query += '&animal=' + animalType; // Setting animal type
    query += '&format=json'; // Telling petfinder we want our response to be JSON
    query += '&output=basic'; // Telling petfinder what data we want (more than just id)
    var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

    console.log('Request:', request);

    $http.jsonp(request).then(function(response){
      console.log(response);
      self.animal = response.data.petfinder.pet;
    });

  }

  this.getRandomPet(self.animalType);

}]);
