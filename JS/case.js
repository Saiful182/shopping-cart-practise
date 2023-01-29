
document.getElementById('case-plus').addEventListener('click', function () {
    const priviousCaseNumberString = document.getElementById('case-number');
    const priviousCaseNumber = priviousCaseNumberString.value;
    const curentCaseNumber = parseInt(priviousCaseNumber) + 1;
    priviousCaseNumberString.value = curentCaseNumber;
})

document.getElementById('case-minus').addEventListener('click', function () {
    const priviousCaseNumberString = document.getElementById('case-number');
    const priviousCaseNumber = priviousCaseNumberString.value;
    const curentCaseNumber = parseInt(priviousCaseNumber) - 1;
    priviousCaseNumberString.value = curentCaseNumber;
})