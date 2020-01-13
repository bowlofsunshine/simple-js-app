var pokemonRepository = (function() {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //Function to add Pokemon data
   function add(pokemon) {
     repository.push(pokemon);
   }

  function addListItem(pokemon) {
    var listItem = document.createElement('li')
    var button = document.createElement('button')

    button.innerText = pokemon.name;
    button.classList.add('button-class');

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function(){
      showDetails(pokemon)
    })
  }

//Add a loadList function as a return key that uses fetch to GET the complete list of Pokémon
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        //Use the add() function to add each Pokémon from the results to your repository variable.
        //Make sure to set name and detailsUrl as the keys.
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  //Add a loadDetails()
  //loadDetails() function should expect a parameter with a Pokémon object as a parameter.
  function loadDetails(item) {
    var url = item.detailsUrl;
    //loadDetails() should GET the Pokémon details using the URL from the Pokémon object in the parameter.
    return fetch(url).then(function (response) {
      //Once the GET request is complete, use then to return a JSON response.
      return response.json();
    }).then(function (details) {
      //Then, assign some of the details you got from the response to the Pokémon object in the repository
      //Assign at least imgUrl and height
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }
  function getAll() {
    return repository;
  }
  //Make sure both functions loadList and loadDetails are assigned to keys with the same name
  //in the returned object of your pokemonRepository.
  return {
    add: add,
    getAll: getAll,
    // search: search,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
} ) ();

//Inside the showDetails() function, call the loadDetails() function from above.
function showDetails(item) {
pokemonRepository.loadDetails(item).then(function () {
  //Log the result in the console
  console.log(item);
  });
}

var pokemonList = document.querySelector('.pokemon-list');

//Call the loadList function of pokemonRepository.
pokemonRepository.loadList().then(function() {
  // Now the data is loaded
  //Then, execute getAll from the pokemonRepository
  pokemonRepository.getAll().forEach(function(pokemon){
    //forEach Pokémon, call the addListItem function you wrote in the previous Exercise.
    pokemonRepository.addListItem(pokemon);
  });
});
