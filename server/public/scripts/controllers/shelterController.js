pets.controller('ShelterController', ['$http', "DataFactory", function($http, DataFactory) {

  var self = this;
  self.key = DataFactory.key;
  self.shelters = [];
  self.message = 'shelter controller is running';

  console.log(self.key);
  console.log(self.message);

  function getRandomShelter(){
    var query = 'http://api.petfinder.com/'; // baseURL for API
    query += 'shelter.find'; // selecting the method we would like to return
    query += '?key=' + self.key; // Giving petfinder our key
    query += '&location=55409';
    query += '&count=25';
    query += '&format=json'; // Telling petfinder we want our response to be JSON
    query += '&output=basic'; // Telling petfinder what data we want (more than just id)
    var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

    console.log('Request:', request);

    $http.jsonp(request).then(function(response){
      console.log(response);
      self.shelters = response.data.petfinder.shelters.shelter;
    });

  }

  getRandomShelter();

}]);
