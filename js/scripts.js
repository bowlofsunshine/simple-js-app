
var pokemonRepository = (function() {
  var repository = [];
  //URL to access pokedex
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  var $modalContainer = document.querySelector('#modal-container');
  //Function to add Pokemon data
  function add(pokemon) {
    repository.push(pokemon);
  }

  function addListItem(pokemon) {
    var listItem = document.createElement('li')
    var button = document.createElement('button')
    //setting the innerText of the button to be the Pokémon's name
    button.innerText = pokemon.name;
    //Add a class to the button using the classList.add making it easier to target in CSS
    button.classList.add('button-class');
    //append the button to the list item as its child.
    listItem.appendChild(button);
    //append the list item to the unordered list as its child
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

  //Inside the showDetails() function, call the loadDetails() function from above.
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
      return item;
    }).then(function(item) {
      showModal(item);
    });
  }

  function showModal(item) {
    var $modalContainer = document.querySelector('#modal-container');

    // Clear all existing modal content
    $modalContainer.innerHTML = '';

    var modal = document.createElement('div');
    modal.classList.add('modal');



    //create a title for the pokemon name
    var pokemonName = document.createElement('h1');
    pokemonName.innerText = item.name;
    //render pokemon Image to appear in the modal
    var pokemonImage = document.createElement('Img');
    pokemonImage.src = item.imageUrl;
    pokemonImage.classList.add('modal-img');
    //add a paragraph to the modal to tell the pokemon's height
    var pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = item.name + ' is ' + item.height/10 + ' meters tall';
    //will figure this one out eventually. trying to capture the pokemon types
    // var pokemonTypes = document.createElement('p');
    // pokemonTypes.innerText = 'Types: ' + item.types;
    // pokemonTypes.classList.add('modal-details2');

    //create a button to close the modal
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    //making the close button repsonsive when clicked
    closeButtonElement.addEventListener('click', hideModal);

    //appending each new variable to the original modal
    modal.appendChild(closeButtonElement);
    modal.appendChild(pokemonName);
    modal.appendChild(pokemonImage);
    modal.appendChild(pokemonHeight);
    // modal.appendChild(pokemonTypes);
    $modalContainer.appendChild(modal);

    //making the modal container visible
    $modalContainer.classList.add('is-visible');

  }

  // document.querySelector('#show-modal').addEventListener('click', () => {
  //   showModal('Modal title', 'This is the modal content!');
  // });

  //function to make the modal go away when closed
  function hideModal() {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');
  }
  //making the modal responsive to the escape button being pressed
  window.addEventListener('keydown', (e) => {
    var $modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  //making the modal responsive to clicking outside the modal to close it
  $modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });
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
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();

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
