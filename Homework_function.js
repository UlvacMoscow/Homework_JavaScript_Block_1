'use strict'

//1
function guarantee(yearsGuarantee = 0) {
  if (yearsGuarantee === 1) {
    return console.log(`гарантийное обслуживание на ${yearsGuarantee} год будет стоить 1250 Q`);
  }
  else if (yearsGuarantee === 2)  {
    return console.log(`гарантийное обслуживание на ${yearsGuarantee} года будет стоить 2300 Q`);
  }
  else if (yearsGuarantee > 2)  {
    return console.log(`гарантийное обслуживание на ${yearsGuarantee} года будет стоить ${2300 + (yearsGuarantee - 2) * 1250} Q`);
  }
  else if (yearsGuarantee === 0)  {
    return console.log(`вы не выбрали услугу`)
  }
};
guarantee(12);

//2
var amount;
var yourPhrase = `333 fghdh`;

function engraving(phrase)  {
  if (phrase === undefined) {
    return console.log(`стоимость гравировки равна 0 Q`)
  }
  var amount = phrase.split(' ');
  return console.log(`Подарочная упаковка и гравировка: ${amount.length * 11} Q`)
}

engraving(yourPhrase);

//3
var deliveryNeed = true;
var place = ['луна', 'крабовидная туманность', 'галактика туманность андромеды', 'туманность ориона', 'звезда смерти']

function delivery(place, deliveryNeed) {
  if (deliveryNeed === false) {
    return console.log(`Доставка не требуется`)
  }
  else if (deliveryNeed === true) {
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
    return console.log(`Ошибка при расчете стоимости доставки`)
    }
  }
}

delivery(place[0], false)
delivery(place[1], true)
delivery('dfdfdfd', true)
