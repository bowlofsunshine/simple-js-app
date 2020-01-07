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
  function add(pokemon) {
    repository.push(pokemon);
  }
  function getAll() {
    return repository;
  }
  return {
    add: add,
    getAll: getAll
  };
})();

var pokemonList = document.querySelector('.pokemon-list')

pokemonRepository.getAll().forEach(function(pokedex){
  var listItem = document.createElement('li')
  var button = document.createElement('button')

  button.innerText = pokedex.name;
  // pokemonList.classList.contains('pokemon-list')
  button.classList.add('button-class');
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);

});


// document.write('name: ' + pokedex.name + ' height: ' + pokedex.height + ' types: ' + pokedex.types + '<br>');
