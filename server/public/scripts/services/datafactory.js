pets.factory('DataFactory', [function() {
  console.log("data factory running");
    var key = 'ac37ea50612c55186b0cae6129df1df0';

    function getRandomPet(animalType){
      var animal = {};
      var query = 'http://api.petfinder.com/'; // baseURL for API
      query += 'pet.getRandom'; // selecting the method we would like to return
      query += '?key=' + key; // Giving petfinder our key
      query += '&animal=' + animal;
      query += '&format=json'; // Telling petfinder we want our response to be JSON
      query += '&output=basic'; // Telling petfinder what data we want (more than just id)
      var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

      console.log('Request:', request);

      $http.jsonp(request).then(function(response){
        console.log(response);
        self.animal = response.data.petfinder.pet;
      });

    }

  var publicApi = {
    key: key,
    getRandomPet: function(animalType) {
      getRandomPet(animalType);
    }
  };

  return publicApi;

}]);
