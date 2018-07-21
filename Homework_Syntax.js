'use strict'
var nameProduct;
var priceProduct;
var saleProduct;
var totalPriceProduct;
var amountProduct;
var companyMoney;
var surrender;
var purchasePriceProduct;
var maxBuyProducts;

nameProduct = `Телепорт бытовой VZHIH-101`;
priceProduct = 10000;
saleProduct = 0.1;
amountProduct = 2;
companyMoney = 52334224;
purchasePriceProduct = 6500;

console.log(`В наличии имеется: ${nameProduct}`);
console.log(`Стоимость товара ${priceProduct} Q`);

totalPriceProduct = priceProduct * amountProduct - saleProduct * (priceProduct * amountProduct);
console.log(`Цена покупки с учетом скидки составит ${totalPriceProduct}Q`)

surrender = companyMoney % purchasePriceProduct;
maxBuyProducts = Math.floor(companyMoney / purchasePriceProduct)
console.log(`мы можем закупить ${maxBuyProducts} единиц товара, после закупки на счету останется ${surrender} Q`)
