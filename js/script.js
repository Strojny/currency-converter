{
    const calculateResult = (currencyAmount) => {
        const eurValue = document.querySelector(".js-eurValueElement");
        const usdValue = document.querySelector(".js-usdValueElement");
        /* name of below constant (currencyAmount) should be different than function parameter?? */
        const currencyAmount = document.querySelector(".js-currencyAmountElement");

        if (eurValue.checked === true) {
            return 4.75 * +currencyAmount.value;
        } else if (usdValue.checked === true) {
            return 4.74 * +currencyAmount.value;
        } else {
            return 5.48 * +currencyAmount.value;
        };
    };

    const form = document.querySelector(".js-formElement");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const plnValue = document.querySelector(".js-plnValueElement");
        const result = calculateResult(currencyAmount);
        plnValue.innerText = result.toFixed(2);

    });
}