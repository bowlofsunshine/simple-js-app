var repository = [
  { name: 'Bulbasaur',
  height: 0.7,
  types: ['grass', 'poison'] } ,
  { name: 'Weedle',
  height: 0.3,
  types: ['bug', 'poison'] },
  { name: 'Squirtel',
  height: 0.5,
  types: ['water'] },
  { name: 'Pidgey',
  height: 0.3,
  types: ['flying', 'normal'] }
];

for (i = 0; i < repository.length; i++) {
  if (repository[i].height  >= 0.5) {
    document.write(repository[i].name + ': (height: ' + repository[i].height + ') ' + 'wow! that\'s big ' + '<br/>');
  } else {
    document.write(repository[i].name + ': (height: ' + repository[i].height + ') ' + '<br/>');}
}
