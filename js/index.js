const buttons = document.querySelectorAll('button');
const led = document.querySelector('.led');

buttons.forEach(function(button) {
    buttons.addEventListener ('click' , calculate);
});

function calculate (event) {
    const clickedButtonValue =event.target.value;
    if (clickedButtonValue === '='){
        if(led.value || '') {
            led.value =led.value;
        }
    }
    else if (clickedButtonValue === 'C') {
        led.value = '';
    }
    else {
        led.value += clickedButtonValue;
    }
};

led.textContent = calculate();