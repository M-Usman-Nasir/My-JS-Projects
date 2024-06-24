// Exercise Node. 03
// Remove all duplicate values from array and print new array

// Solution Code:
const products = ["keyboard", "mouse", "keyboard", "speaker", "printer", "headphone", "printer", "keyboard", "mouse"]
const uniqueProducts = [];
for (let i = 0; i < products.length; i++) {
    if (!uniqueProducts.includes(products[i])) {
        uniqueProducts.push(products[i]);
    }
}
console.log(uniqueProducts);