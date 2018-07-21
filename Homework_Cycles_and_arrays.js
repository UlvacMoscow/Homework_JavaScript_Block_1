'use strict'
// 1
var positions = [
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)',
  'Машина времени DeLorean',
  'Репликатор домашний STAR-94',
  'Лингвенсор 000-17',
  'Целеуказатель электронный WAY-Y'
];

var positionsLenght = positions.length;
var allNames = 'Список наименований';
var finishAllNames = 'Окончательный список наименований';
var message = 'Принять в первую очередь';


console.log(allNames)
for (var i = 0; i < positionsLenght; i++)  {
    console.log((i + 1) + ' ' + positions[i])
};

// 2
var addPositions = [
    'Экзоскелет Trooper-111',
    'Нейроинтерфейс игровой SEGUN',
    'Семена дерева Эйва'
];

for (var i = 0; i < addPositions.length; i++)  {
    positions.push(addPositions[i])
};

console.log();
console.log(finishAllNames);

for (var i = 0; i < positions.length; i++)  {
    console.log((i + 1) + ' ' + positions[i])
};

// 3
var num = positions.indexOf('Машина времени DeLorean');
console.log(num, positions[num]);
positions.unshift(positions.splice(num, 1)[0]);
console.log(message +'\n'+ positions.slice(0, 3));
console.log(positions);
