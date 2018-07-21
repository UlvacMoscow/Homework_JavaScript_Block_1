'use strict'
// 1
var price;
var taxes = 0;

function update_taxes(offerPrice) {
  let taxe = 0.73 * offerPrice;
  taxes += taxe;
  return console.log(`Налог с продажи 73 % к оплате ${taxes} Q`)
};

update_taxes(100);
update_taxes(200);
update_taxes(300);
console.log('---------------------------------------')

// 2
var wrappingPaper = 30 ;

function packaging(a, b, c)  {
  let area_box = 2 * (a * b + b * c + a * c);
  wrappingPaper -= area_box;
  if (wrappingPaper >= 0)  {
    return console.log(`Заказ ${a, b, c} упакован, осталось упаковочной бумаги ${wrappingPaper} м2`)
  }
  else {
    return console.log(`Заказ ${a, b, c} не упакован, осталось упаковочной бумаги ${wrappingPaper} м2`)
  }
};

packaging(1, 1, 1);
packaging(2, 2, 2);
packaging(5, 5, 5);

console.log('---------------------------------------')

// 3
var chargeTeleport = [7, 2, 1, 4, 8];
var chargeInfo = [];

for (var num = 0; num < chargeTeleport.length; num += 1)  {
  chargeInfo.push(function check_charge(num)  {
    if (chargeTeleport[num] === 0) {
      return console.log(`Телепорт ${num + 1} недоступен, заряжаеться`)
  }
  chargeTeleport[num] -= 1;
  if (chargeTeleport[num] === 0) {
    return console.log(`Телепорт ${num + 1} использован, заряд - ${chargeTeleport[num]}, требуеться подзарядка`)
  }
  return console.log(`Телепорт ${num + 1} использован, заряд — ${chargeTeleport[num]} единиц`);
  })
}

chargeInfo[0](1)
chargeInfo[0](1)
chargeInfo[1](1)
chargeInfo[1](1)
console.log(chargeInfo)

console.log('---------------------------------------')
