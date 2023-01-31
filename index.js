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
  const delimetArr = [];
  for (let i = number; i >= 1; i--) {
    if (number % i === 0) {
      delimetArr.push(i);
    }
  }
  return delimetArr.join(', ');
}

function validAnswer() {
  const answer = prompt('Введите число');

  if (typeof Number(answer) === 'number') {
    if (parseFloat(answer) > 0 && parseFloat(answer) !== Infinity) {
      if (Number(answer) === parseFloat(answer)) {
        const obj = {
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
      const obj = {
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
