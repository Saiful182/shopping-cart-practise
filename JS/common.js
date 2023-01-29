function convertInnerText(itemId) {
    const totalItemPriceString = document.getElementById(itemId);
    const totalItemPrice = parseInt(totalItemPriceString.innerText);
    return totalItemPrice;
}
function totalPrice() {
    const totalPhonePrice = convertInnerText('phone-price');
    const totalCasePrice = convertInnerText('case-price');
    const subTotal = totalCasePrice + totalPhonePrice;
    const priviousSubTotalString = document.getElementById('sub-total')
    priviousSubTotalString.innerText = subTotal;

    const priviousTaxString = document.getElementById('tax');
    const priviousTax = priviousTaxString.innerText;



    const tax = subTotal * 0.05;
    priviousTaxString.innerText = tax.toFixed(2);

    const priviousTotal = document.getElementById('total');
    priviousTotal.innerText = subTotal + tax;



}


