var pokemonRepository = (function() {
  var repository = [
    { name: 'Bulbasaur',
    height: 0.7,
    types: ['grass', 'poison'] } ,
    { name: 'Weedle',
    height: 0.3,
    types: ['bug', 'poison'] },
    { name: 'Squirtle',
    height: 0.5,
    types: ['water'] },
    { name: 'Pidgey',
    height: 0.3,
    types: ['flying', 'normal'] }
  ];
  function addListItem(pokemon) {
    var listItem = document.createElement('li')
    var button = document.createElement('button')

    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }

    function add(pokemon) {
      repository.push(pokemon);
    }
    function getAll() {
      return repository;
    }
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
})();

var pokemonList = document.querySelector('.pokemon-list')

pokemonRepository.getAll().forEach(function(pokedex){
  pokemonRepository.addListItem(pokedex);
});
