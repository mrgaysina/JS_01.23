let operand1 = '';
let operand2 = '';
let operator = '';
let submit = false;
const screen = document.getElementsByTagName('input');

function clear() {
  operand1 = '';
  operand2 = '';
  operator = '';
  submit = false;
  screen[0].value = 0;
}

function modal() {
  screen[0].value = -screen[0].value;
  if (operand2 === '') {
    operand1 = -operand1;
  } else {
    operand2 = -operand2;
  }
}

const operations = document.getElementsByClassName('operations');
const numbers = document.getElementsByClassName('numbers');

for (let i = 0; i < operations.length; i += 1) {
  operations[i].addEventListener('click', (event) => {
    const pressed = event.target.textContent;
    if (pressed === 'C') clear();
    if (pressed === '+/-') modal();
    if (pressed === '=') {
      if (operand2 === '') operand2 = operand1;
      if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        switch (operator) {
          case '+':
            operand1 = (+operand1) + (+operand2);
            screen[0].value = operand1;
            operand2 = '';
            break;
          case '-':
            operand1 -= operand2;
            screen[0].value = operand1;
            operand2 = '';
            break;
          case '*':
            operand1 *= operand2;
            screen[0].value = operand1;
            operand2 = '';
            break;
          case '/':
            if (operand2 === '' || operand2 === '0') {
              screen[0].value = 'Error';
              operand1 = '';
              operand2 = '';
              operator = '';
              break;
            } else {
              operand1 /= operand2;
              screen[0].value = operand1;
              operand2 = '';
            }
            break;
          default:
            break;
        }
        submit = true;
      }
    }
    if (operand1 !== '' && operand2 !== '' && operator !== '') {
      switch (operator) {
        case '+':
          operator = '+';
          operand1 = (+operand1) + (+operand2);
          operand2 = '';
          screen[0].value = operand1;
          operator = '';
          break;
        case '-':
          operator = '-';
          operand1 -= operand2;
          operand2 = '';
          screen[0].value = operand1;
          operator = '';
          break;
        case '*':
          operator = '*';
          operand1 *= operand2;
          screen[0].value = operand1;
          operand2 = '';
          operator = '';
          break;
        case '/':
          operator = '/';
          if (operand2 === '' || operand2 === '0') {
            screen[0].value = 'Error';
            operand1 = '';
            operand2 = '';
            operator = '';
            break;
          } else {
            operand1 /= operand2;
            screen[0].value = operand1;
            operand2 = '';
          }
          operator = '';
          break;
        default:
          break;
      }
    }

    switch (pressed) {
      case '+':
        operator = '+';
        break;
      case '-':
        operator = '-';
        break;
      case '*':
        operator = '*';
        break;
      case '/':
        operator = '/';
        break;
      default:
        break;
    }
  });
}

for (let i = 0; i < numbers.length; i += 1) {
  numbers[i].addEventListener('click', (event) => {
    const pressed = event.target.textContent;
    if (operand2 === '' && operator === '') {
      operand1 += pressed;
      screen[0].value = operand1;
    } else if (operand1 !== '' && operand2 !== '' && submit) {
      operand2 += pressed;
      submit = false;
      screen[0].value = operand2;
    } else {
      operand2 += pressed;
      screen[0].value = operand2;
    }
  });
}
