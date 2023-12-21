function Product(name, actualPrice, discount, brand) {
    this.name = name;
    this.actualPrice = actualPrice;
    this.discount = discount;
    this.brand = brand;
    this.display = function () {
        let discountedPrice = this.actualPrice * (1 - this.discount);
        console.log(`Product: ${this.name}, Brand: ${this.brand}, Actual Price: ${this.actualPrice}, Discounted Price: ${discountedPrice}`);
    };
}

// New method to display the brand of each product
function showBrands(products) {
    for (let i = 0; i < products.length; i++) {
        console.log(`Product ${i + 1} Brand: ${products[i].brand}`);
    }
}


let product1 = new Product("Product 1", 100, 0.2, "Brand A");
let product2 = new Product("Product 2", 150, 0.15, "Brand B");
let product3 = new Product("Product 3", 200, 0.1, "Brand C");
let product4 = new Product("Product 4", 120, 0.25, "Brand D");

// Displaying information about each product
product1.display();
product2.display();
product3.display();
product4.display();

// Displaying the brand of each product
let products = [product1, product2, product3, product4];
showBrands(products);