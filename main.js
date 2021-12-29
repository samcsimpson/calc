function operate(a,operation, b) {
    if (operation == '+') {
        return a + b;
    } else if (operation == '-') {
        return a - b;
    } else if (operation == '*') {
        return a * b;
    } else if (operation == '/') {
        answer = Math.round(a / b * 100)/100;
        if(isFinite(answer)) {
            return answer
        } else { 
            alert('No dividing by zero!');
            location.reload()
        }
    }
}
const show = document.querySelector('.t');
show.value = 0;
let a;
let b;
const numbers = document.querySelectorAll('button.number');
operator = null;

numbers.forEach(number => {
    number.addEventListener('click', function(event) {
        if (!operator) {
            if (show.value == 0) {
                show.value = number.innerText;
            } else {
            show.value += number.innerText;
            }
        
        } else {
            if (!(b)) {
                b = number.innerText;
            } else {
                b += number.innerText;
            }
        show.value = b;
        }
    });
});

const operators = document.querySelectorAll('button.operator');
operators.forEach(number => {
    number.addEventListener('click', function(event) {
        if (!operator) {
            a = show.value;
            operator = number.id;

        } else {

            show.value = operate(Number(a),operator,Number(b));
            a = operate(Number(a),operator,Number(b));
            operator = null;
            b = 0;
        }
    });
});

const exit = document.getElementById('clr');
exit.addEventListener('click', function(event) {
    show.value = 0;
    a = 0;
    operator = null;
    b = 0;
});

const equals = document.getElementById('=');
equals.addEventListener('click', function(event) {
    if(a && b && operator) {
        show.value = operate(Number(a),operator,Number(b));
        a = operate(Number(a),operator,Number(b));
        operator = null;
        b = 0;
    }
});