/* eslint-disable no-continue */
function makeDeepCopy(obj) {
  const newObj = Object.create({});
  if (obj === null || typeof obj !== 'object') {
    throw new Error();
  } else {
    // eslint-disable-next-line no-restricted-syntax
    for (const i in obj) {
      if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
        newObj[i] = makeDeepCopy(obj[i]);
        continue;
      } else {
        newObj[i] = obj[i];
      }
    }
    return newObj;
  }
}

function selectFromInterval(arr, int1, int2) {
  const answer = [];
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error();
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number' && !Number.isNaN(arr[i]) && arr[i] !== Infinity && arr[i] !== -Infinity) {
        if (typeof int1 !== 'number' || Number.isNaN(int1) || int1 === Infinity || int1 === -Infinity || typeof int2 !== 'number' || Number.isNaN(int2) || int2 === Infinity || int2 === -Infinity) {
          throw new Error();
        } else if (int1 > int2) {
          if (arr[i] >= int2 && arr[i] <= int1) {
            answer.push(arr[i]);
          }
        } else if (int1 <= int2) {
          if (arr[i] <= int2 && arr[i] >= int1) {
            answer.push(arr[i]);
          }
        }
      } else {
        throw new Error();
      }
    }
    return answer;
  }
}

function createIterable(from, to) {
  if (from === undefined || to === undefined || ((typeof from !== 'number' || typeof to !== 'number') || (Number.isNaN(from) || Number.isNaN(to)) || (from === Infinity || to === Infinity) || (from === -Infinity || to === -Infinity)) || to <= from) {
    throw new Error();
  } else {
    const newObj = { from, to };
    newObj[Symbol.iterator] = function () {
      return {
        current: this.from,
        last: this.to,
        next() {
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          }
          return { done: true };
        },
      };
    };
    return newObj;
  }
}
