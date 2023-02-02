function factorial(number) {
  return number ? number * factorial(number - 1) : 1;
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

function delimeters(number) {
  let delimetArr = [];
  for (let i = number; i >= 1; i--) {
    if (number % i === 0) {
      delimetArr.push(i);
    }
  }
  return delimetArr.join(', ');
}

function validAnswer() {
  let answer = prompt('Введите число');

  if (typeof Number(answer) === 'number') {
    if (parseFloat(answer) > 0 && parseFloat(answer) !== Infinity) {
      if (Number(answer) === parseFloat(answer)) {
        let obj = {
          Number: Number(answer),
          Factorial: factorial(answer),
          Square: answer * answer,
          isPrime: isPrime(answer),
          isEven: answer % 2 === 0,
          Delimeters: delimeters(answer),
        };
        console.log(JSON.stringify(obj).replace(/{"|"}|,"/gm, ' ').replace(/"|^ /gm, '').replace(/(\b) /gm, '\n'));
      }
    } else if (parseFloat(answer) === 0) {
      let obj = {
        Number: answer,
        Factorial: 1,
        Square: answer,
        isPrime: true,
        isEven: true,
        Delimeters: answer,
      };
      console.log(console.log(JSON.stringify(obj).replace(/{"|"}|,"/gm, ' ').replace(/"|^ /gm, '').replace(/(\b) /gm, '\n')));
    } else {
      console.log('Incorrect input!');
      validAnswer();
    }
  } else {
    console.log('Incorrect input!');
    validAnswer();
  }
}

validAnswer();

function matrix() {
  let content = prompt('Введите символ');

  if (content.length >= 1 && content.length <= 3 && content !== '' && content !== ' ') {
    let repeat = prompt('Введите число');
    if (typeof Number(repeat) === 'number' && repeat > 0 && repeat < 10 && Number(repeat) === parseFloat(repeat)) {
      let result = [];
      result.length = repeat;

      for (let i = 0; i < result.length; i++) {
        result[i] = [];
        result[i].length = repeat;
      }

      for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
          result[i][j] = content;
        }
      }
      console.log(result.join('\n').replace(/,/gm, ' '));
    } else {
      console.log('Incorrect input!');
      matrix();
    }
  } else {
    console.log('Incorrect input!');
    matrix();
  }
}

matrix();
