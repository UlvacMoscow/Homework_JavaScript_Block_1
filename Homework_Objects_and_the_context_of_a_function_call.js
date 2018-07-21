'use strict'

var positions = [
  'Телепорт бытовой VZHIH-101',
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)'
];

var prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

var hitName = positions[2];
var hitPrice = prices[2];

// 1
var hit = {};

hit['name'] = hitName;
hit['price'] = hitPrice;
console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.price} Q` );
console.log('---------------------------------------------');
// 2
var items = [];

for (var num = 0; num < positions.length; num += 1) {
  let offer = {};
  offer.name = positions[num];
  offer.price = prices[num];
  items.push(offer);
}

console.log(`Купите ${items[4].name} по цене ${items[4].price} Q`);
console.log(items);
console.log('--------------------------------------------');

//3

function infoDiscount(offer, amount, discount) {
   console.log(`${offer.name} стоимость партии из ${amount} штук ${Math.round(offer.price * amount - discount * (offer.price * amount))} Q (скидка ${discount * 100} %), ваша выгода ${Math.round(discount * offer.price * amount)} Q!`);
}

function showDiscount(offer, amount) {
  if (amount <= 10)  {
    infoDiscount(offer, amount, 0.05);
  }
  else if ((amount > 10) && (amount <= 50))  {
    infoDiscount(offer, amount, 0.07);
  }
  else if ((amount > 50) && (amount <= 100))  {
     infoDiscount(offer, amount, 0.1);
  }
  else  {
     infoDiscount(offer, amount, 0.15);
  }
};

showDiscount(items[0], 9);
showDiscount(items[3], 197);
console.log('--------------------------------------------');

// 4

for (let i = 0; i < 5; i++) {
  items[i].amount = 4;
}
console.log(items);

function updateAmount(offer, consumption) {
  consumption = consumption === undefined ?  1 : consumption;
  if ((offer.amount in offer)) {
    return;
  }
  else if (consumption > offer.amount || offer.amount === 0) {
    return console.log(`${offer.name} закончился на складе`);
  }
  else if (offer.amount > consumption)  {
    offer.amount =- consumption;
    return console.log(`${offer.name} остаток ${offer.amount} шт`);
  }
  else if (offer.amount === consumption)  {
    offer.amount = 0;
    return console.log(`Это был последний ${offer.name}, вам повезло!.`);
  }
};

updateAmount(items[1], 17);
updateAmount(items[3], 3);
updateAmount(items[3]);
updateAmount(items[1]);
