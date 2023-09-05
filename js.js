let currentNumber = '';
let prevNumber = '';
let operation = null;

function updateDisplay(value) {
    let display = document.getElementById("display");
    display.innerText += value;
}

function appendToDisplay(num) {
    currentNumber += num;
    updateDisplay(num);
}

function clearDisplay() {
    document.getElementById("display").innerText = '0';
    currentNumber = '';
    prevNumber = '';
    operation = null;
}

function setOperation(op) {
    if (currentNumber !== '') {
        operation = op;
        prevNumber = currentNumber;
        currentNumber = '';
        switch(op) {
            case "add":
                updateDisplay('+');
                break;
            case "subtract":
                updateDisplay('-');
                break;
            case "multiply":
                updateDisplay('x');
                break;
            case "divide":
                updateDisplay('/');
                break;
            case "modulus":
                updateDisplay('%');
                break;
        }
    }
}

function calculate() {
    let display = document.getElementById("display").innerText;
    let components = display.split(/([+x/%-])/); // split by operators
    if(components.length < 3) return;  // Check if equation is complete

    prevNumber = components[0].trim();
    operation = components[1].trim();
    currentNumber = components[2].trim();

    let result;
    switch(operation) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "x":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            if(currentNumber === '0') {
                alert("Cannot divide by zero!");
                return;
            }
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        case "%":
            result = parseFloat(prevNumber) % parseFloat(currentNumber);
            break;
    }

    document.getElementById("result").innerText = "Result: " + result;
    document.getElementById("display").innerText = result;
    currentNumber = result.toString();
    prevNumber = '';
}
