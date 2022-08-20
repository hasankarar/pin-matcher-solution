
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

    console.log(event.target.innerText);



})

