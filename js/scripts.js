var pokemonRepository = (function functionName() {
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
    getAll: getAll;
  };
})();

// function printArrayDetails() {
//   for (i = 0; i < repository.length; i++) {
//     if (repository[i].height  >= 0.5) {
//       document.write('<p>' + repository[i].name);
//       document.write(': (height ' + repository[i].height + ') wow, that\'s big! </p>');
//     } else {
//       document.write('<p>' + repository[i].name);
//       document.write(': (height ' + repository[i].height + ') </p>');}
//   }
// }

// function arrayList(pokedex) {
//   if (pokedex.height >= 0.5)
//   document.write(pokedex.name + ' height: ' + pokedex.height + 'wow, that\'s big! <br>');
//   else {
//     document.write(pokedex.name + ' height: ' + pokedex.height + '<br>');
//   }
// }
// repository.forEach(arrayList);

// function arrayList(pokedex) {
//   document.write('name: ' + pokedex.name + ' height: ' + pokedex.height + ' types: ' + pokedex.types + '<br>');
// }
// repository.forEach(arrayList);

repository.forEach(function(pokedex){
  document.write('name: ' + pokedex.name + ' height: ' + pokedex.height + ' types: ' + pokedex.types + '<br>');
});
