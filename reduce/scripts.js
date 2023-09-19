


const cart = [
    {productName: "Abóbora" , pricePerKg: 5, kg: 1},
    {productName: "Pepino" , pricePerKg: 3.55, kg: 1.3},
    {productName: "Limão" , pricePerKg: 1.2, kg: 2},
    {productName: "Abacate" , pricePerKg: 5.4, kg: 1.67},
    {productName: "Morango" , pricePerKg: 11.9, kg: 3},
]


const sum = cart.reduce( (acc , value) => {
    const sumKg = value.pricePerKg * value.kg

    return acc + sumKg



}, 0)

console.log(`Sua compra ficou no valor de R$${sum.toFixed(2)}`)