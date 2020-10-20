let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
};
let price = item.price;
let discount = item.discount;
let priceWithDiscount;
price = parseInt(price);
discount = parseInt(discount);
discount = discount / 100;
priceWithDiscount = price * (1 - discount);
if ((price !== NaN) && (discount !== NaN)) {
    item.priceWithDiscount = priceWithDiscount;
    console.log(item.priceWithDiscount)
} else {
    console.log(item.price);
}
