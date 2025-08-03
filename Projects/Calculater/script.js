let firstNumber = "";
let secondNumber = "";
let operator = "";

function addDigits(num) {
    if (operator === "") {
        firstNumber += num;
        document.getElementById("inputF").value = firstNumber;
    } else {
        secondNumber += num;
        document.getElementById("inputF").value = firstNumber + operator + secondNumber;
    }
}
function addOperator(op) {
    if (firstNumber === "") return; // prevent operator before number
    if (secondNumber !== "") return; // prevent changing operator mid-way
    operator = op;
    document.getElementById("inputF").value = firstNumber + operator;
}
function showResult() {
    let result = 0;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error';
            break;
        default:
            result = 'Error';
    }

    document.getElementById("inputF").value = result;

    // Reset for next operation
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
}


    function clearInput() {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      document.getElementById("inputF").value = "";
    }