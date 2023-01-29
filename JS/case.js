function caseNumberPlusMinus(sign) {
    const priviousCaseNumberString = document.getElementById('case-number');
    const priviousCaseNumber = priviousCaseNumberString.value;
    let curentCaseNumber;

    if (sign === true) {
        curentCaseNumber = parseInt(priviousCaseNumber) + 1;
    }
    else {
        curentCaseNumber = parseInt(priviousCaseNumber) - 1;
    }

    priviousCaseNumberString.value = curentCaseNumber;
    return curentCaseNumber;
}

function casePriceUpdate(sign, caseNumber) {
    const priviousCasePriceString = document.getElementById('case-price');
    const priviousCasePrice = parseFloat(priviousCasePriceString.innerText);

    const newCasePrice = caseNumber * 59;

    priviousCasePriceString.innerText = newCasePrice;
}

document.getElementById('case-plus').addEventListener('click', function () {
    const caseNumber = caseNumberPlusMinus(true);

    // total case price

    casePriceUpdate(true, caseNumber);
    totalPrice()

})

document.getElementById('case-minus').addEventListener('click', function () {
    const caseNumber = caseNumberPlusMinus(false);

    // total case price minus

    casePriceUpdate(false, caseNumber);
    totalPrice()
})