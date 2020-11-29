'use strict'

const keret = document.querySelector ('.keret');
const btns = document.querySelector('.container');
const led = document.querySelector('.led')

btns.addEventListener('click', ecs=> {
    if(ecs.target.matches ('button')) {
        const btn = ecs.target;
        const action = btn.dataset.action;
        const btnContent = btn.textContent;
        const ledNum = led.textContent;
        const op= btn.textContent;
        

        if(!action) {
            led.textContent = ledNum + btnContent
        };
        if(
            action === 'add' ||
            action === 'minus' ||
            action === 'multiply' ||
            action === 'divide'
            ) {
                btn.classList.add('is-depressed');
                keret.dataset.previousbtnType = 'operator'
                led.textContent = op;
                const firstValue = keret.dataset.firstValue;
                const operator = keret.dataset.operator;
                const secondValue = ledNum;
               
        };
        if (action === 'dot') {
            console.log('dot')
            led.textContent = ledNum + '.'
          };
          
        if (action === 'clear') {
            console.log('clear')
            led.textContent = ' '
          };
          
        if (action === 'calc') {
            
         
          };
             Array.from (btn.parentNode.children)
            .forEach (key=>key.classList.remove('is-depressed'));
    };
});
