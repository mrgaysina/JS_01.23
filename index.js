let operand1 = '';
let operand2 = '';
let operator = '';
let submit = false;
let sliceOfOperand = false;
let modalOfOperand = false;

const screen = document.getElementsByTagName('input');

function clear() {
  operand1 = '';
  operand2 = '';
  operator = '';
  submit = false;
  screen[0].value = 0;
}

function modal() {
  modalOfOperand = true;
  screen[0].value = -screen[0].value;
  if (operand2 === '') {
    operand1 = -operand1;
    operand1 = String(operand1);
  } else {
    operand2 = -operand2;
    operand2 = String(operand2);
  }
}

function del() {
  sliceOfOperand = true;
  screen[0].value = screen[0].value.slice(0, -1);
  if (operand2 === '') {
    operand1 = String(operand1);
    operand1 = operand1.slice(0, -1);
  } else {
    operand2 = String(operand2);
    operand2 = operand2.slice(0, -1);
  }
}

const operations = document.getElementsByClassName('operations');
const numbers = document.getElementsByClassName('numbers');

for (let i = 0; i < operations.length; i += 1) {
  operations[i].addEventListener('click', (event) => {
    const pressed = event.target.textContent;
    if (pressed === 'C') clear();
    if (pressed === '+/-') modal();
    if (pressed === 'Del') del();
    if (pressed === '=') {
      if (operand2 === '') operand2 = operand1;
      if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        switch (operator) {
          case '+':
            operand1 = (+operand1) + (+operand2);
            operand1 = roundNumber(operand1);
            screen[0].value = operand1;
            operand2 = '';
            operator = '';
            break;
          case '-':
            operand1 -= operand2;
            operand1 = roundNumber(operand1);
            screen[0].value = operand1;
            operand2 = '';
            operator = '';
            break;
          case '*':
            operand1 *= operand2;
            operand1 = roundNumber(operand1);
            screen[0].value = operand1;
            operand2 = '';
            operator = '';
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
              operand1 = roundNumber(operand1);
              screen[0].value = operand1;
              operand2 = '';
              operator = '';
            }
            break;
          default:
            break;
        }
        submit = true;
      }
    }
    switch (pressed) {
      case '+':
        sliceOfOperand = false;
        modalOfOperand = false;
        break;
      case '-':
        sliceOfOperand = false;
        modalOfOperand = false;
        break;
      case '*':
        sliceOfOperand = false;
        modalOfOperand = false;
        break;
      case '/':
        sliceOfOperand = false;
        modalOfOperand = false;
        break;
      default:
        break;
    }
    if (operand1 !== '' && operand2 !== '' && operator !== '' && !sliceOfOperand && !modalOfOperand) {
      switch (operator) {
        case '+':
          operator = '+';
          operand1 = (+operand1) + (+operand2);
          operand1 = roundNumber(operand1);
          operand2 = '';
          screen[0].value = operand1;
          operator = '';
          break;
        case '-':
          operator = '-';
          operand1 -= operand2;
          operand1 = roundNumber(operand1);
          operand2 = '';
          screen[0].value = operand1;
          operator = '';
          break;
        case '*':
          operator = '*';
          operand1 *= operand2;
          operand1 = roundNumber(operand1);
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
            operand1 = roundNumber(operand1);
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
    let pressed = event.target.textContent;
    const regex = /\.\d{8,}/gm;

    if (pressed === '.' && operand1.includes('.') && operator === '') {
      return;
    }
    if (pressed === '.' && operand1.includes('.') && operand2.includes('.')){
      return;
    }
    if ((pressed === '0' || pressed === '00') && operand1 === '') return;

    if (pressed === '.' && operand1 === '') {
      operand1 += '0.';
      screen[0].value = operand1;
      return;
    }

    if (pressed === '.' && operand2 === '') {
      operand2 += '0.';
      screen[0].value = operand2;
      return;
    }

    if (operand2 === '' && operator === '') {
      operand1 += pressed;
      if (regex.test(String(operand1))) {
        operand1 = roundNumber(operand1);
        screen[0].value = operand1;
      } else {
        screen[0].value = operand1;
      }
    } else if (operand1 !== '' && operand2 !== '' && submit) {

      operand1 = screen[0].value;
      operand2 = pressed;
      submit = false;
      screen[0].value = operand2;
    } else {

      operand2 += pressed;
      if (regex.test(String(operand2))) {
        operand2 = roundNumber(operand2);
        screen[0].value = operand2;
      } else {
        screen[0].value = operand2;
      }
    }
  });
}

function roundNumber(num) {
  const precision = 8;
  const rounded = Math.round(num * 10 ** precision) / 10 ** precision;
  return String(rounded);
}
