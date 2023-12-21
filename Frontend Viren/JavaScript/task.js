
function Product(name, actualPrice, discount) {
    this.name = name;
    this.actualPrice = actualPrice;
    this.discount = discount;
    this.display = function () {
        let discountedPrice = actualPrice - (actualPrice*discount/100);
        console.log(`Product: ${this.name}, Actual Price: ${this.actualPrice},Discount: ${this.discount}, Discounted Price: ${discountedPrice}`);
    };
}


let product1 = new Product("watch", 5000, 10);
let product2 = new Product("LED TV", 1000, 20);
let product3 = new Product("Oven", 20000, 30);
let product4 = new Product("Shoes", 8000, 5);


product1.display();
product2.display();
product3.display();
product4.display();

// Product.prototype.brand="samsung";

product1.brand='boult';
product2.brand='oppp';
product3.brand='samsung';
product4.brand='spark';
// Product.prototype.brand_task = function() {
//     console.log(this.brand);
//  }

//  product1.brand_task();
 
console.log(product1.brand);
console.log(product2.brand);
console.log(product3.brand);
console.log(product4.brand);


