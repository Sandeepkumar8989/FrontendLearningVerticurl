const normalUser = [200, 300, 250, 120, 400];
const premiumUser = [100, 400, 550, 100, 400];
const goldenUser = [300, 370, 350, 130, 450];

function calculateDis(cart, discount) {
  const discountedPrices = [];

  cart.forEach((price) => {
    const discountedPrice = price - (price * discount) / 100;
    discountedPrices.push(discountedPrice);
  });
  return discountedPrices;
}

const normal = calculateDis(normalUser, 5);
const premium = calculateDis(premiumUser, 15);
const golden = calculateDis(goldenUser, 20);

console.log("Discounted Prices for Normal User:", normal);
console.log("Discounted Prices for Premium User:", premium);
console.log("Discounted Prices for Golden User:", golden);
