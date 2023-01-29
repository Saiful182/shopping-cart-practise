function phoneNumberPlusMinus(sign) {
    const priviousPhoneNumberString = document.getElementById('phone-number');
    const priviousPhoneNumber = priviousPhoneNumberString.value;
    let curentPhoneNumber;

    if (sign === true) {
        curentPhoneNumber = parseInt(priviousPhoneNumber) + 1;
    }
    else {
        curentPhoneNumber = parseInt(priviousPhoneNumber) - 1;
    }

    priviousPhoneNumberString.value = curentPhoneNumber;
    return curentPhoneNumber;
}

function phonePriceUpdate(sign, phoneNumber) {
    const priviousPhonePriceString = document.getElementById('phone-price');
    const priviousPhonePrice = parseFloat(priviousPhonePriceString.innerText);

    const newPhonePrice = phoneNumber * 1219;

    priviousPhonePriceString.innerText = newPhonePrice;
}

document.getElementById('phone-plus-btn').addEventListener('click', function () {
    const phoneNumber = phoneNumberPlusMinus(true);
    phonePriceUpdate(true, phoneNumber);
    totalPrice()
})
document.getElementById('phone-minus-btn').addEventListener('click', function () {
    const phoneNumber = phoneNumberPlusMinus(false);
    phonePriceUpdate(false, phoneNumber);
    totalPrice()
})
