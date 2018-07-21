'use strict'
// 1
var quantityInStock;
var quantityOfGoodsInTheOrder;

quantityInStock = 500;
quantityOfGoodsInTheOrder = 500;

if (quantityOfGoodsInTheOrder > quantityInStock) {
  console.log('На складе нет такого количества товаров')
}
else if (quantityOfGoodsInTheOrder === quantityInStock) {
  console.log('Вы забираете весь товар с нашего склада')
}
else {
  console.log('Заказ оформлен')
}

// 2

var place = 'луна'

switch(place) {
  case 'луна':
    console.log(`Цены на доставку ${place} 150 Q`)
    break
  case 'крабовидная туманность':
    console.log(`Цены на доставку ${place} 250 Q`)
    break
  case 'галактика туманность андромеды':
    console.log(`Цены на доставку ${place} 550 Q`)
    break
  case 'туманность ориона':
    console.log(`Цены на доставку ${place} 600 Q`)
    break
  case 'звезда смерти':
    console.log(`Цены на доставку договорная`)
    break
  default:
    console.log(`В ваш квадрант доставка не осуществляется.`)
}

// 3

var price = 'dfgfgdfg';

try {
    if (typeof(price) !== 'number') {
      throw `Вы допустили ошибку: ${price} не является числом`;
    }
    console.log('Цена товара введена корректно');
    } catch(err) {
      console.log(`Ошибка ${err.name} : ${err.message}
      \n ${err.stack}`)
    }
