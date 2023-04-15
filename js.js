let num1 = '';
let num2 = '';
let operator = '';

function input(num) {
    if (operator === '') {
        num1 += num;
        document.getElementById('result').value = num1;
    } else {
        num2 += num;
        document.getElementById('result').value = num2;
    }
}

function operation(op) {
    if (operator !== '') {
        equal();
    }
    operator = op;
}

function equal() {
    let result;
    if (num2 === '') {
        result = parseFloat(num1);
    } else {
        switch (operator) {
            case '+':
                result = parseFloat(num1) + parseFloat(num2);
                break;
            case '-':
                result = parseFloat(num1) - parseFloat(num2);
                break;
            case '*':
                result = parseFloat(num1) * parseFloat(num2);
                break;
            case '/':
                result = parseFloat(num1) / parseFloat(num2);
                break;
        }
    }
    document.getElementById('result').value = result;
    num1 = result.toString();
    num2 = '';
    operator = '';
}



function clearResult() {
    num1 = '';
    num2 = '';
    operator = '';
    document.getElementById('result').value = '';
}