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

    const setResultText = (result) => {
        const plnValue = document.querySelector(".js-plnValueElement");

        plnValue.innerText = result.toFixed(2);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const result = calculateResult();

        setResultText(result);
    };

    const init = () => {
        const form = document.querySelector(".js-formElement");

        form.addEventListener("submit", onFormSubmit);
    }

    init();
}