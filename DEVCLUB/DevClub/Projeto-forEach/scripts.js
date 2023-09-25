
const list = document.querySelector(".foods")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map")
const buttonSumAll = document.querySelector(".sum-all")
const buttonFilter = document.querySelector(".filter")

function formatCurrency(Value) {
    return Value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
})}

function showAllItens(products) {
    let myList = " "
    products.forEach(product => {
        myList += ` 
        <li>
            <img src= ${product.src}>
            <p>R$ ${formatCurrency(product.price)}</p>
            <p> ${product.name}</p>
        </li>`
    });


    list.innerHTML = myList
}

function discountItens() {
    const newPrices = menuOptions.map((discount) => ({
        ...discount,
        price: discount.price * 0.9,

    }))
    showAllItens(newPrices)

}

function sumItens() {
    const sumDiscount = menuOptions.reduce( (acc , curr) => acc + curr.price * 0.9 ,0)
    const sum = menuOptions.reduce( (acc , curr) => acc + curr.price ,0)
     list.innerHTML =  `
     <li>
           <p> A SOMA DE TODOS OS ITENS É DE R$${formatCurrency(sum)} , 
           <br>
            NA PROMOÇÃO COM 10% DE DESCONTO FICA POR R$${formatCurrency(sumDiscount)}</p>
     
     </li>
    
     `
}

function filterItens() {
    const filterVegan = menuOptions.filter( products => products.vegan)

    showAllItens(filterVegan)
}


buttonShowAll.addEventListener('click', () => showAllItens(menuOptions))
buttonMapAll.addEventListener("click", discountItens)
buttonSumAll.addEventListener("click" , sumItens)
buttonFilter.addEventListener("click" , filterItens)
































