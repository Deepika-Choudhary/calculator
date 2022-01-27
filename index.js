console.log('calculator')
//input box
//buttons
//AC- clear

function number(num) {
    // console.log(num);
    document.getElementById('result').value += num;
}

function operation(op) {
    // console.log(op);
    document.getElementById('result').value += op;
}

function equal() {
    // console.log(res);
    console.log(eval(result.value));
    document.getElementById('result').value=eval(result.value);
}

function remove(op) {
    if (op == 'AC')  document.getElementById('result').value = '';
    if (op == 'x') {
        document.getElementById('result').value=result.value.substring(0,result.value.length-1);
    }
}
