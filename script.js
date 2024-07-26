document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstNumber = '';

    function updateDisplay(value) {
        display.value = value;
    }

    function calculate() {
        try {
            display.value = eval(currentInput);
        } catch (e) {
            display.value = 'Error';
        }
    }

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.classList.contains('number')) {
                if (value === '0' && currentInput === '') return;
                currentInput += value;
                updateDisplay(currentInput);
            } else if (button.classList.contains('operator')) {
                if (currentInput === '' && value === '-') {
                    currentInput += value;
                    updateDisplay(currentInput);
                    return;
                }
                if (currentInput !== '') {
                    currentInput += value;
                    updateDisplay(currentInput);
                }
            } else if (button.classList.contains('clear')) {
                currentInput = '';
                updateDisplay(currentInput);
            } else if (button.classList.contains('equal')) {
                calculate();
            }
        });
    });
});