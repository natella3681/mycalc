let input = document.querySelector('.my-input');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const btnC = document.querySelector('.clear-input');
let memoryCurrentNumber = 0;
let memoryNewNumber = false;
let memoryPendingOperation = '';

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function (e) {
        console.log(e.target.textContent);
        numberPress(e.target.value);
    });
};

for (let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
        console.log(e.target.value);
        operation(e.target.value);
    });
};

btnC.addEventListener('click', pressC);

function numberPress(number) {
    if (memoryNewNumber) {
        input.value = number;
        memoryNewNumber = false;
    } else {
        if (input.value === '0') {
            input.value = number;
        } else {
            input.value += number;
        }
    }
};

function operation(op) {
    let localOperationMemory = input.value;
    if (memoryNewNumber && memoryPendingOperation !== '=') {
        input.value = memoryCurrentNumber;
    } else {
        memoryNewNumber = true;
        if (memoryPendingOperation === '+') {
            memoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (memoryPendingOperation === '-') {
            memoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (memoryPendingOperation === '*') {
            memoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (memoryPendingOperation === '/') {
            memoryCurrentNumber /= parseFloat(localOperationMemory);
        } else {
            memoryCurrentNumber = parseFloat(localOperationMemory);
        };
        input.value = memoryCurrentNumber;
        memoryPendingOperation = op;
    };
};

function pressC(e) {
    if (e.target) {
        input.value = '0';
    };
};




