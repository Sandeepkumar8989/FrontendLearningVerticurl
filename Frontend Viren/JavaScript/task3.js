class Product{
    constructor(product_name,price,discount){
        this.product_name = product_name;
        this.price = price;
        this.discount = discount;
    
    }
    discountedPrice(){
        return this.price - (this.price * (this.discount / 100));
    }
}
class Productbrand extends Product{
    constructor(product_name, price, discount, brand) {
        super(product_name, price, discount);
        this.brand = brand;
    }

    details(){
        return `Product: ${this.product_name}, Price: ${this.price}, Brand: ${this.brand}`;
    }
}

const watch = new Productbrand('Watch', 5000, 10, 'Titan');
const ledTV = new Productbrand('LED TV', 10000, 20, 'Sony');
const oven = new Productbrand('Oven', 20000, 30, 'Apple');
const shoes = new Productbrand('Shoes', 8000, 5, 'adidas');


console.log(watch.details());
  console.log(`Discounted Price: ${watch.discountedPrice()}\n`);
  
  console.log(ledTV.details());
  console.log(`Discounted Price: ${ledTV.discountedPrice()}\n`);
  
  console.log(oven.details());
  console.log(`Discounted Price: ${oven.discountedPrice()}\n`);
  
  console.log(shoes.details());
  console.log(`Discounted Price: ${shoes.discountedPrice()}\n`);
  