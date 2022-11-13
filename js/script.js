let form = document.querySelector(".js-formElement");
let eurValue = document.querySelector(".js-eurValueElement");
let usdValue = document.querySelector(".js-usdValueElement");
let gbpValue = document.querySelector(".js-gbpValueElement");
let currencyAmount = document.querySelector(".js-currencyAmountElement");
let plnValue = document.querySelector(".js-plnValueElement");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let result;

    if (eurValue.checked === true) {
        result = 4.75 * +currencyAmount.value;
    } else if (usdValue.checked === true) {
        result = 4.74 * +currencyAmount.value;
    } else {
        result = 5.48 * +currencyAmount.value;
    }

    plnValue.innerText = result.toFixed(2);

});