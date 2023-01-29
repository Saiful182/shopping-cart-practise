

document.getElementById('case-plus').addEventListener('click', function () {
    const priviousCaseNumberString = document.getElementById('case-number');
    const priviousCaseNumber = priviousCaseNumberString.value;
    const curentCaseNumber = parseInt(priviousCaseNumber) + 1;
    priviousCaseNumberString.value = curentCaseNumber;

    // total case price

    const priviousCasePriceString = document.getElementById('case-price');
    const priviousCasePrice = parseFloat(priviousCasePriceString.innerText);

    const newCasePrice = priviousCasePrice + 59;
    priviousCasePriceString.innerText = newCasePrice;

})

document.getElementById('case-minus').addEventListener('click', function () {
    const priviousCaseNumberString = document.getElementById('case-number');
    const priviousCaseNumber = priviousCaseNumberString.value;
    const curentCaseNumber = parseInt(priviousCaseNumber) - 1;
    priviousCaseNumberString.value = curentCaseNumber;

    // total case price minus
    const priviousCasePriceString = document.getElementById('case-price');
    const priviousCasePrice = parseFloat(priviousCasePriceString.innerText);
    const newCasePrice = priviousCasePrice - 59;
    priviousCasePriceString.innerText = newCasePrice;
})