
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate_pin').addEventListener('click', function () {
    const pin = getPin();
    const dispalytext = document.getElementById('input_show');
    dispalytext.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumber = document.getElementById('type_number');
    const preTypeNumber = typeNumber.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumber.value = '';
        } else if (number === '<') {
            const digits = preTypeNumber.split('');
            digits.pop();
            const remainingDigit = digits.join('');
            typeNumber.value = remainingDigit;
        }

    } else {
        const newTypeNumber = preTypeNumber + number;
        typeNumber.value = newTypeNumber;
    }
})

document.getElementById('verify_pin').addEventListener('click', function () {
    const displayfield = document.getElementById('input_show');
    const currentPin = displayfield.value;

    const typeNumberField = document.getElementById('type_number');
    const typeNumberFiedlValue = typeNumberField.value;

    const pinSuccess = document.getElementById('pin_success');
    const pinFaild = document.getElementById('pin_fail');

    if (typeNumberFiedlValue == currentPin) {
        pinSuccess.style.display = 'block';
        pinFaild.style.display = 'none';


    } else {
        const pinFaild = document.getElementById('pin_fail');
        pinFaild.style.display = 'block';
        pinSuccess.style.display = 'none';

    }

});

