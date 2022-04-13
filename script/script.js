//solution function will handle each operations

function solution(operator) {

    var firstValue = parseFloat(document.forms["inputForm"]["firstValue"].value);

    var secondValue = parseFloat(document.forms["inputForm"]["secondValue"].value);

    var result;

    //validating input should be number only

    if (isNaN(firstValue) || isNaN(secondValue)) {

        alert('Please enter both operands');

        return;

    }

    //using switch for various operations

    switch (operator) {

        case 'add':

            result = eval(firstValue) + eval(secondValue);

            output = firstValue + " + " + secondValue + " = " + result;

            document.getElementById('result').value = output;

            console.log(output);

            break;

        case 'multiply':

            result = eval(firstValue) * eval(secondValue);

            output = firstValue + " x " + secondValue + " = " + result;

            document.getElementById('result').value = output;

            console.log(output);

            break;

        case 'divide':

            result = eval(firstValue) / eval(secondValue);

            output = firstValue + " / " + secondValue + " = " + result;

            document.getElementById('result').value = output;

            console.log(output);

            break;

        default:

            break;

    }

}

//function to clear all inputs and result

function clr() {

    document.getElementById("result").value = "";

    document.forms["inputForm"]["firstValue"].value = "";

    document.forms["inputForm"]["secondValue"].value = "";

}