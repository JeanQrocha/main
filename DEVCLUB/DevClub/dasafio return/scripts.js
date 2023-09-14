


const cart = [59, 69, 10, 13, 55, 42, 16, 24, 3]

let finalPriceWithDiscount = 0

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}
cart.forEach(value => {
    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalPriceWithDiscount += (value - discount)
    } else {
        finalPriceWithDiscount += value
    }
    
});

let finalPrice = 0

cart.forEach( value => {
    finalPrice += value
});

const discount = finalPrice - finalPriceWithDiscount

console.log(`O valor da sua compra foi R$ ${finalPrice.toFixed(2)}, 
você teve um desconto de R$ ${discount.toFixed(2)} e sua compra ficou por R$ ${finalPriceWithDiscount.toFixed(2)}`)

