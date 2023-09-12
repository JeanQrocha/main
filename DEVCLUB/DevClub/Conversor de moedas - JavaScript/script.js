const convertButton = document.querySelector(".convert-button")
const currencySelectConverted = document.querySelector(".currency-coverted-moeda")
const currencySelectConverter = document.querySelector(".currency-converter-moeda")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConverter = document.querySelector(".currency-value-real")

    const currencyValueConverted = document.querySelector(".currency-value-dolar")

    const dolarToday = 5
    const euroToday = 5.3
    const libraToday = 6.2
    const bitcoinToday = 128.215
    

  
   



    if (currencySelectConverted.value == "dolar-converted") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelectConverted.value == "euro-converted") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {

            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


        if (currencySelectConverted.value == "bitcoin-converted") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
    
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / bitcoinToday)


    }

    if (currencySelectConverted.value == "libra-converted") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {

            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)


}


    currencyValueToConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)


   

}

function changeCurrencyConverted(){
    

    const currencyName = document.getElementById("currency-name-dolar")
    const currencyImg = document.querySelector(".moeda-eua")

    if (currencySelectConverted.value == "dolar-converted"){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assents/estados-unidos (1) 1.png"

    }
    
    if (currencySelectConverted.value == "euro-converted"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assents/euro.png"

    }

    if (currencySelectConverted.value == "libra-converted"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assents/libra 1.png"

    }

    if (currencySelectConverted.value == "bitcoin-converted"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assents/bitcoin 1.png"

    }

    if (currencySelectConverted.value == "real-converted"){
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assents/brasil 2.png"

    }

    convertValues
}

function changeCurrencyConverter(){
    

    const currencyName = document.getElementById("currency-name-real")
    const currencyImg = document.querySelector(".moeda-br")


    if (currencySelectConverter.value == "dolar-converter"){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assents/estados-unidos (1) 1.png"

    }
    
    if (currencySelectConverter.value == "euro-converter"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assents/euro.png"

    }

    if (currencySelectConverter.value == "libra-converter"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assents/libra 1.png"

    }

    if (currencySelectConverter.value == "bitcoin-converter"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assents/bitcoin 1.png"

    }

    if (currencySelectConverter.value == "real-converter"){
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assents/brasil 2.png"

    }

    convertValues
}


currencySelectConverter.addEventListener("change", changeCurrencyConverter)
currencySelectConverted.addEventListener("change", changeCurrencyConverted)
convertButton.addEventListener("click", convertValues)