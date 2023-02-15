class Stack {
  constructor(max = 10) {
    if (typeof max !== 'number' || max === Infinity || max === -Infinity || Number.isNaN(max) || max < 0) {
      throw new Error('Invalid limit value');
    } else {
      this.max = max;
      this.stack = [];
      this.lastelem = 0;
    }
  }

  push(elem) {
    if (this.lastelem === this.max) {
      throw new Error('Limit exceeded');
    } else {
      this.stack = [...this.stack, elem];
      this.lastelem += 1;
      return this.stack;
    }
  }

  pop() {
    if (this.lastelem === 0) {
      throw new Error('Empty stack');
    } else {
      this.stack.length = this.lastelem - 1;
      this.lastelem -= 1;
      return this.stack;
    }
  }

  peek() {
    if (this.lastelem === 0) {
      return null;
    }
    return this.stack[this.lastelem - 1];
  }

  isEmpty() {
    return this.lastelem === 0;
  }

  isArray() {
    let newArr = [];
    if (this.lastelem === 0) {
      return newArr;
    }
    newArr = [...this.stack];
    return newArr;
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Not iterable');
    } else {
      const stack = new Stack(iterable.max);
      for (let i = 0; i < iterable.length; i++) {
        stack.push(iterable[i]);
      }
      return stack;
    }
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  append(elem) {
    const node = new Node(elem);
    if (this.last) {
      this.last.next = node;
      this.last = node;
    } else {
      this.last = node;
    }
    if (!this.first) {
      this.first = node;
    }
  }

  prepend(elem) {
    const node = new Node(elem);
    if (this.first) {
      node.next = this.first;
      this.first = node;
    } else {
      this.first = node;
      this.last = node;
    }
  }

  find(elem, current = this?.first) {
    if (current === null) {
      return null;
    }
    if (current?.value === elem) {
      return current;
    }
    return this.find(elem, current?.next);
  }

  toArray(current = this.first, array = []) {
    if (current === null) {
      return array;
    }
    array.push(current);
    return this.toArray(current.next, array);
  }

  static fromIterable(iterable) {
    const list = new LinkedList();
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Not iterable');
    } else {
      for (let i = 0; i < iterable.length; i++) {
        list.append(iterable[i]);
      }
      return list;
    }
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Car {
  constructor() {
    this._brand = '';
    this._model = '';
    this._yearOfManufacturing = 1950;
    this._maxSpeed = 100;
    this._maxFuelVolume = 20;
    this._fuelConsumption = 1;
    this._damage = 1;
    this._currentFuelVolume = 0;
    this._isStarted = false;
    this._mileage = 0;
    this._health = 100;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    if (typeof value === 'string' && value.length >= 1 && value.length <= 50) {
      this._brand = value;
    } else {
      throw new Error('Invalid brand name');
    }
  }

  get model() {
    return this._model;
  }

  set model(value) {
    if (typeof value === 'string' && value.length >= 1 && value.length <= 50) {
      this._model = value;
    } else {
      throw new Error('Invalid model name');
    }
  }

  get yearOfManufacturing() {
    return this._yearOfManufacturing;
  }

  set yearOfManufacturing(value) {
    if (typeof value === 'number' && value >= 1950 && value <= new Date().getFullYear()) {
      this._yearOfManufacturing = value;
    } else {
      throw new Error('Invalid year of manufacturing');
    }
  }

  get maxSpeed() {
    return this._maxSpeed;
  }

  set maxSpeed(value) {
    if (typeof value === 'number' && value >= 100 && value <= 330) {
      this._maxSpeed = value;
    } else {
      throw new Error('Invalid max speed');
    }
  }

  get maxFuelVolume() {
    return this._maxFuelVolume;
  }

  set maxFuelVolume(value) {
    if (typeof value === 'number' && value >= 20 && value <= 100) {
      this._maxFuelVolume = value;
    } else {
      throw new Error('Invalid max fuel volume');
    }
  }

  get fuelConsumption() {
    return this._fuelConsumption;
  }

  set fuelConsumption(value) {
    if (typeof value === 'number' && value > 0 && value !== Infinity && !Number.isNaN(value)) {
      this._fuelConsumption = value;
    } else {
      throw new Error('Invalid fuel consumption');
    }
  }

  get damage() {
    return this._damage;
  }

  set damage(value) {
    if (typeof value === 'number' && value >= 1 && value <= 5) {
      this._damage = value;
    } else {
      throw new Error('Invalid damage');
    }
  }

  get currentFuelVolume() {
    return this._currentFuelVolume;
  }

  get isStarted() {
    return this._isStarted;
  }

  get mileage() {
    return this._mileage;
  }

  get health() {
    return this._health;
  }

  start() {
    if (this.isStarted) {
      throw new Error('Car has already started');
    } else {
      this._isStarted = true;
    }
  }

  shutDownEngine() {
    if (!this.isStarted) {
      throw new Error("Car hasn't started yet");
    } else {
      this._isStarted = false;
    }
  }

  fillUpGasTank(liters) {
    if (typeof liters === 'number' && liters > 0 && liters !== Infinity && !Number.isNaN(liters)) {
      if (this.currentFuelVolume + liters > this.maxFuelVolume) {
        throw new Error('Too much fuel');
      } else if (this.isStarted) {
        throw new Error('You have to shut down your car first');
      } else {
        return this._currentFuelVolume += liters;
      }
    } else {
      throw new Error('Invalid fuel amount');
    }
  }

  drive(speed, duration) {
    if (typeof speed !== 'number' || speed <= 0) {
      throw new Error('Invalid speed');
    }
    if (typeof duration !== 'number' || duration <= 0) {
      throw new Error('Invalid duration');
    }
    if (speed > this.maxSpeed) {
      throw new Error("Car can't go this fast");
    }
    if (!this.isStarted) {
      throw new Error('You have to start your car first');
    }
    const distance = speed * duration;
    const fuelNeeded = (distance / 100) * this.fuelConsumption;
    if (fuelNeeded > this.currentFuelVolume) {
      throw new Error("You don't have enough fuel");
    }
    const damageTaken = (distance / 100) * this.damage;
    if (damageTaken > this.health) {
      throw new Error("Your car won't make it");
    }
    this.currentFuelVolume -= fuelNeeded;
    this.health -= damageTaken;
    this.mileage += distance;
  }

  repair() {
    if (this.isStarted) {
      throw new Error('You have to shut down your car first');
    }
    if (this.currentFuelVolume < this.maxFuelVolume) {
      throw new Error('You have to fill up your gas tank first)');
    }
    this.health = 100;
  }

  getFullAmount() {
    return this.maxFuelVolume - this.currentFuelVolume
  }
}
