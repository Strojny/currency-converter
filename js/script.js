{
    const calculateResult = () => {
        const eurValue = document.querySelector(".js-eurValueElement");
        const usdValue = document.querySelector(".js-usdValueElement");
        const currencyAmount = document.querySelector(".js-currencyAmountElement");

        if (eurValue.checked === true) {
            return 4.75 * +currencyAmount.value;
        } else if (usdValue.checked === true) {
            return 4.74 * +currencyAmount.value;
        } else {
            return 5.48 * +currencyAmount.value;
        };
    };

    const endResult = () => {
        const plnValue = document.querySelector(".js-plnValueElement");
        const result = calculateResult();

        plnValue.innerText = result.toFixed(2);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        endResult();
    };

    const init = () => {
        const form = document.querySelector(".js-formElement");

        form.addEventListener("submit", onFormSubmit);
    }

    init();
}