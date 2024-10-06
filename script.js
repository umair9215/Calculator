let buttons = document.querySelectorAll('.btn');
let display = document.querySelector('.output');
let displayString = '';
Array.from(buttons).forEach(btn => {
    btn.addEventListener('click', (event) => {
        let buttonValue = event.target.innerHTML;
        if (buttonValue === 'AC') {
            displayString = '';
            display.innerHTML = '0';
        }
        else if (buttonValue === 'C') {
            displayString = displayString.slice(0, -1);
            display.innerHTML = displayString || '0';
        }
        else if (buttonValue === '=') {
            try {
                displayString = eval(displayString);
                display.innerHTML = displayString;
            } catch (error) {
                display.innerHTML = 'Error';
                displayString = '';
            }
        }
        else {
            displayString += buttonValue;
            display.innerHTML = displayString;
        }
    });
});