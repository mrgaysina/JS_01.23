function curry(func) {
  return function newCurry(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return function (...newArgs) {
      return newCurry.apply(this, args.concat(newArgs));
    };
  };
}

class Calculator {
  constructor(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('');
    }
    this.num1 = num1;
    this.num2 = num2;
  }

  setX = (num) => {
    if (typeof num === 'undefined' || typeof num !== 'number' || num === Infinity || num === -Infinity || Number.isNaN(num)) {
      throw new Error();
    } else {
      this.num1 = num;
    }
  };

  setY = (num) => {
    if (typeof num === 'undefined' || typeof num !== 'number' || num === Infinity || num === -Infinity || Number.isNaN(num)) {
      throw new Error();
    } else {
      this.num2 = num;
    }
  };

  getSum = () => this.num1 + this.num2;

  getMul = () => this.num1 * this.num2;

  getSub = () => this.num1 - this.num2;

  getDiv = () => {
    if (this.num2 === 0) {
      throw new Error();
    } else {
      return this.num1 / this.num2;
    }
  };
}

class RickAndMorty {
  getCharacter(id) {
    if (!id || typeof id !== 'number') {
      throw new Error();
    } else {
      const character = fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.log(null);
          } else {
            console.log(data);
          }
        })
        .catch((error) => console.log(error));
    }
  }

  async getEpisode(id) {
    if (!id || typeof id !== 'number') {
      throw new Error();
    } else {
      const episode = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      const response = await episode.json();
      if (episode.status === 200) {
        console.log(response);
      } else {
        console.log(null);
      }
    }
  }
}
